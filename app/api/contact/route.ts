import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Configure Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,   // set in .env.local
        pass: process.env.GMAIL_PASS,   // Gmail App Password (not your main password)
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "tharunnv98@gmail.com",
      replyTo: email,
      subject: `Portfolio: New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:auto;background:#0f0f1a;color:#f1f5f9;padding:32px;border-radius:12px;border:1px solid #1e1e2e">
          <h2 style="color:#7c3aed;margin-bottom:8px">New Portfolio Message</h2>
          <hr style="border-color:#1e1e2e;margin-bottom:24px"/>
          <p><strong style="color:#94a3b8">From:</strong> ${name}</p>
          <p><strong style="color:#94a3b8">Email:</strong> <a href="mailto:${email}" style="color:#06b6d4">${email}</a></p>
          <hr style="border-color:#1e1e2e;margin:16px 0"/>
          <p><strong style="color:#94a3b8">Message:</strong></p>
          <p style="line-height:1.7;color:#cbd5e1">${message.replace(/\n/g, "<br/>")}</p>
          <hr style="border-color:#1e1e2e;margin-top:24px"/>
          <p style="font-size:0.75rem;color:#64748b">Sent via tharun.nv portfolio contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
