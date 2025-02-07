import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Your Gmail address (to authenticate)
      to: process.env.EMAIL_USER, // Your email to receive the message
      subject: "New Contact Form Message",
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
      replyTo: email, // This allows replies to go to the sender
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
