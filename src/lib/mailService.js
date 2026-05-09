const getAccessToken = async () => {
  const { TENANT_ID, CLIENT_ID, CLIENT_SECRET } = process.env;

  if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET) {
    throw new Error("Missing Graph ENV variables");
  }

  const res = await fetch(
    `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    },
  );

  const data = await res.json();

  console.log("🔍 TOKEN RESPONSE:", data); // 🔥 VERY IMPORTANT

  if (!res.ok || !data.access_token) {
    throw new Error(
      data.error_description || data.error || "Failed to get access token",
    );
  }

  return data.access_token;
};

export async function sendMail({ type, subject, html, replyTo }) {
  try {
    const token = await getAccessToken();

    const { FROM_EMAIL } = process.env;

    console.log("FROM_EMAIL DEBUG:", FROM_EMAIL);

    if (!FROM_EMAIL) {
      throw new Error("Missing FROM_EMAIL in ENV");
    }

    // 🔁 Route emails based on type
    const toMap = {
      contact: "info@hyalineenviro.com",
      partner: "sales@hyalineenviro.com",
    };

    const to = toMap[type];

    if (!to) {
      throw new Error("Invalid mail type");
    }

    const res = await fetch(
      `https://graph.microsoft.com/v1.0/users/${FROM_EMAIL}/sendMail`,
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
            toRecipients: [
              {
                emailAddress: {
                  address: to,
                },
              },
            ],
            ...(replyTo && {
              replyTo: [
                {
                  emailAddress: {
                    address: replyTo,
                  },
                },
              ],
            }),
          },
          saveToSentItems: "true",
        }),
      },
    );

    if (!res.ok) {
      const error = await res.text();
      console.error("❌ GRAPH MAIL ERROR:", error);
      return { success: false, error };
    }

    console.log("✅ MAIL SENT via Graph");

    return { success: true };
  } catch (err) {
    console.error("❌ MAIL ERROR:", err.message);
    return { success: false, error: err.message };
  }
}
