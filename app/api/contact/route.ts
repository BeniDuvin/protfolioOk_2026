import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { validateEmail } from "@/lib/utils";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim();
    const trimmedSubject = subject?.trim();
    const trimmedMessage = message?.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    if (!validateEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: trimmedEmail,
      subject: `[Portfolio Contact] ${trimmedSubject}`,
      text: `
        You have received a new message from your portfolio contact form.

        Name: ${trimmedName}
        Email: ${trimmedEmail}
        Subject: ${trimmedSubject}

        Message:
        ${trimmedMessage}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${trimmedName}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Subject:</strong> ${trimmedSubject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${trimmedMessage.replace(/\n/g, "<br />")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
