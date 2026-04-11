import { sendMail } from "@/lib/mailService";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      company,
      service,
      message,
    } = body;

    // 🔐 REQUIRED VALIDATION
    if (!fullName || !email || !phone || !service || !message) {
      return Response.json({
        success: false,
        error: "Please fill all required fields",
      });
    }

    // ✅ EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({
        success: false,
        error: "Invalid email address",
      });
    }

    // ✅ PHONE VALIDATION (basic)
    if (phone.length < 10) {
      return Response.json({
        success: false,
        error: "Invalid phone number",
      });
    }

    // 📩 EMAIL TEMPLATE (structured for company readability)
    const html = `
      <h2>New Contact Enquiry</h2>
      <hr/>

      <h3>Contact Details</h3>
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Company:</b> ${company || "N/A"}</p>

      <h3>Service Requested</h3>
      <p>${service}</p>

      <h3>Project Details</h3>
      <p>${message}</p>
    `;

    const result = await sendMail({
      to: "info@hyalineenviro.com",
      subject: "New Contact Enquiry 📩",
      html,
    });

    if (!result.success) {
      return Response.json({
        success: false,
        error: "Failed to send email",
      });
    }

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("Contact API Error:", error);

    return Response.json({
      success: false,
      error: "Something went wrong",
    });
  }
}