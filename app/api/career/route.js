import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse form data
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const resume = formData.get("resume"); // File object

    // Convert resume to Buffer if provided
    let attachments = [];
    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buffer,
        contentType: resume.type,
      });
    }

    // Setup Nodemailer transporter (Shreeyam Consultancy Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to Shreeyam HR/Admin
    await transporter.sendMail({
      from: `"Shreeyam Consultancy Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.CAREER_EMAIL || process.env.EMAIL_USER, // HR Email
      subject: "New Career Application - Shreeyam Consultancy",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      attachments,
    });

    // Confirmation mail to applicant
    await transporter.sendMail({
      from: `"Shreeyam Consultancy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Application Received - Shreeyam Consultancy",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for applying at <strong>Shreeyam Consultancy</strong>.</p>
        <p>We have received your resume and will get back to you if shortlisted.</p>
        <br/>
        <p>Best Regards,<br/>Shreeyam Consultancy Team</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Shreeyam Career API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit application" },
      { status: 500 }
    );
  }
}
