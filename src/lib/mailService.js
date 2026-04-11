import nodemailer from "nodemailer";

let transporter;

export function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // smtp.zoho.in / smtp.hostinger.com
    port: Number(process.env.SMTP_PORT), // 465 or 587
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

export async function sendMail({ to, subject, html, attachments = [] }) {
  const transporter = getTransporter();

  try {
    const info = await transporter.sendMail({
      from: `"Website" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      attachments,
    });

    return { success: true, info };
  } catch (error) {
    console.error("Mail Error:", error);
    return { success: false, error };
  }
}
