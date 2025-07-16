import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/models/contact";


import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      );
    }
    await connectDB();

    await Contact.create({
      name,
      email,
      phone,
      message,
    });

    // 1. Create transporter for owner's mail
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your mail provider
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 2. Email to Owner
    const ownerMailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.OWNER_EMAIL, // your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>Contact Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    await transporter.sendMail(ownerMailOptions);

    // 3. Confirmation email to User
    const userMailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Thank You for Contacting Shreeyam Consultancy",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Shreeyam Consultancy. We have received your message and will get back to you shortly.</p>
        <br>
        <p>Best Regards,<br>Shreeyam Consultancy</p>
      `,
    };

    await transporter.sendMail(userMailOptions);

    return Response.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
