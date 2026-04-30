const getAccessToken = async () => {
  if (!process.env.TENANT_ID || !process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
    throw new Error("Missing ENV variables");
  }

  const res = await fetch(
    `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("TOKEN ERROR:", data);
    throw new Error("Failed to get token");
  }

  return data.access_token;
};

export async function sendMail({ type, subject, html }) {
  try {
    const token = await getAccessToken();

    const toMap = {
      contact: "info@hyalineenviro.com",
      partner: "sales@hyalineenviro.com",
    };

    const to = toMap[type];

    const res = await fetch(
      `https://graph.microsoft.com/v1.0/users/${process.env.SMTP_USER}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject,
            body: {
              contentType: "HTML",
              content: html,
            },
            from: {
              emailAddress: {
                address: process.env.SMTP_USER,
              },
            },
            toRecipients: [
              {
                emailAddress: {
                  address: to,
                },
              },
            ],
          },
        }),
      }
    );

    if (!res.ok) {
      const error = await res.text();
      console.error("GRAPH MAIL ERROR:", error);
      return { success: false };
    }

    console.log("MAIL SENT via Graph ✅");

    return { success: true };
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return { success: false, error: err.message };
  }
}