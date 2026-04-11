import { sendMail } from "@/lib/mailService";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      phone,
      email,
      location,
      businessType,
      experience,
      investment,
      message,
    } = body;

    // 🔐 SERVER-SIDE VALIDATION (DON’T TRUST FRONTEND)
    if (
      !name ||
      !company ||
      !phone ||
      !email ||
      !location ||
      !businessType ||
      !experience ||
      !investment
    ) {
      return Response.json({
        success: false,
        error: "All required fields must be filled",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({
        success: false,
        error: "Invalid email format",
      });
    }

    // Phone basic validation (India friendly)
    if (phone.length < 10) {
      return Response.json({
        success: false,
        error: "Invalid phone number",
      });
    }

    // 📩 EMAIL TEMPLATE (clean + readable for business)
    const html = `
      <h2>New Channel Partner Application</h2>
      <hr/>
      
      <h3>Basic Information</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Location:</b> ${location}</p>

      <h3>Business Details</h3>
      <p><b>Business Type:</b> ${businessType}</p>
      <p><b>Experience:</b> ${experience}</p>
      <p><b>Investment Capacity:</b> ${investment}</p>

      <h3>Additional Info</h3>
      <p>${message || "No additional message provided"}</p>
    `;

    const result = await sendMail({
      to: "sales@hyalineenvro.com",
      subject: "New Channel Partner Lead 🚀",
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
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Channel Partner API Error:", error);

    return Response.json({
      success: false,
      error: "Something went wrong",
    });
  }
}