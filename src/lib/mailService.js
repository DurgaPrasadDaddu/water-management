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
  console.log("Access token acquired");

  // console.log("🔍 TOKEN RESPONSE:", data); // 🔥 VERY IMPORTANT

  if (!res.ok || !data.access_token) {
    throw new Error(
      data.error_description || data.error || "Failed to get access token",
    );
  }

  return data.access_token;
};



// export async function sendMail({ type, subject, html, replyTo }) {
//   try {
//     const token = await getAccessToken();

//     const { FROM_EMAIL } = process.env;

//     if (!FROM_EMAIL) {
//       throw new Error("Missing FROM_EMAIL in ENV");
//     }

//     const toMap = {
//       contact: "admin@hyalineenviro.com",
//       partner: "admin@hyalineenviro.com",
//     };

//     const to = toMap[type];

//     if (!to) {
//       throw new Error("Invalid mail type");
//     }

//     // CLEAN replyTo
//     const cleanReplyTo = replyTo?.trim().toLowerCase();

//     // OPTIONAL VALIDATION
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     const payload = {
//       message: {
//         subject,
//         body: {
//           contentType: "HTML",
//           content: html,
//         },
//         toRecipients: [
//           {
//             emailAddress: {
//               address: to,
//             },
//           },
//         ],
//       },
//       saveToSentItems: true,
//     };

//     // ADD replyTo ONLY if valid
//     if (cleanReplyTo && emailRegex.test(cleanReplyTo)) {
//       payload.message.replyTo = [
//         {
//           emailAddress: {
//             address: cleanReplyTo,
//           },
//         },
//       ];
//     }

//     console.log(
//       "MAIL PAYLOAD:",
//       JSON.stringify(payload, null, 2)
//     );

//     const res = await fetch(
//       `https://graph.microsoft.com/v1.0/users/${FROM_EMAIL}/sendMail`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       }
//     );

//     if (!res.ok) {
//       const error = await res.text();
//       console.error("GRAPH MAIL ERROR:", error);
//       return { success: false, error };
//     }

//     console.log("MAIL SENT via Graph");

//     return { success: true };
//   } catch (err) {
//     console.error("MAIL ERROR:", err.message);

//     return {
//       success: false,
//       error: err.message,
//     };
//   }
// }

export async function sendMail({ type, subject, html, replyTo }) {
  try {
    const token = await getAccessToken();

    const { FROM_EMAIL } = process.env;
    if (!FROM_EMAIL) throw new Error("Missing FROM_EMAIL in ENV");

    // ==================== TO RECIPIENT ====================
    const toMap = {
      contact: "hr@hyalineenviro.com",
      partner: "tenders@hyalineenviro.com",
    };

    const to = toMap[type];

    console.log("MAIL TYPE:", type);
console.log("TO EMAIL:", to);

    if (!to) {
      throw new Error(`Invalid mail type: ${type}`);
    }

    // ==================== REPLY-TO VALIDATION ====================
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let cleanReplyTo = null;

    if (replyTo) {
      cleanReplyTo = String(replyTo).trim().toLowerCase();
      if (!emailRegex.test(cleanReplyTo)) {
        console.warn(`⚠️ Invalid replyTo skipped: ${replyTo}`);
        cleanReplyTo = null;
      }
    }

    // ==================== BUILD PAYLOAD ====================
    const payload = {
      message: {
        subject: subject || "No Subject",
        body: {
          contentType: "HTML",
          content: html || "<p>No content</p>",
        },
        toRecipients: [
          {
            emailAddress: { address: to },
          },
        ],
      },
      saveToSentItems: true,
    };

    // Add replyTo only if valid
    if (cleanReplyTo) {
      payload.message.replyTo = [
        {
          emailAddress: { address: cleanReplyTo },
        },
      ];
    }

    console.log("📧 MAIL PAYLOAD:", JSON.stringify(payload, null, 2));

    // ==================== SEND EMAIL ====================
    const res = await fetch(
      `https://graph.microsoft.com/v1.0/users/${FROM_EMAIL}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ GRAPH MAIL ERROR:", errorText);
      return { success: false, error: errorText };
    }

    console.log("✅ MAIL SENT successfully");
    return { success: true };

  } catch (err) {
    console.error("❌ MAIL SERVICE ERROR:", err.message);
    return { success: false, error: err.message };
  }
}
 