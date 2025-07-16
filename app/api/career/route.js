import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const resumeFile = formData.get("resume");

  // Set up transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Load PDF and logo from the public folder
  const pdfPath = path.resolve("public", "shreeyam-brochure.pdf");
  const logoCid = "shreeyamlogo@logo";
  const logoPath = path.resolve("public", "logo.png");

  try {
    // ✅ 1. Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Career Request from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: Buffer.from(await resumeFile.arrayBuffer()),
          contentType: resumeFile.type,
        },
      ],
    });

    // ✅ 2. Send confirmation email to applicant (with logo + brochure PDF)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for applying to Shreeyam Consultancy",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <img src="cid:${logoCid}" alt="Shreeyam Logo" style="height: 60px; margin-bottom: 20px;" />
          <p>Dear ${name},</p>
          <p>Thank you for applying to <strong>Shreeyam Consultancy</strong>.</p>
          <p>We have received your resume and will get back to you if shortlisted.</p>
          <p>Attached is our company brochure to help you know more about us.</p>
          <p>Best regards,<br/>Shreeyam Consultancy Team</p>
        </div>
      `,
      attachments: [
        {
          filename: "Shreeyam-Company-Brochure.pdf",
          path: pdfPath,
          contentType: "application/pdf",
        },
        {
          filename: "logo.png",
          path: logoPath,
          cid: logoCid, // used in img src
        },
      ],
    });

    return NextResponse.json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send application" }, { status: 500 });
  }
}
