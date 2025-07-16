// app/api/contact/route.js
// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send to admin
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 2. Send confirmation to sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Shreeyam Consultancy",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for your message. We will respond soon.</p>
        <br />
        <p>Regards,<br/>Shreeyam Consultancy</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ message: "Mail failed" }, { status: 500 });
  }
}
