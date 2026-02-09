import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const company = formData.get("company");
    const message = formData.get("message");
    const file = formData.get("attachment") as File | null;

    let attachmentBuffer = null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      attachmentBuffer = Buffer.from(bytes);
    }

    // ✅ SMTP Transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },

      connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000,
    });

    // ✅ Email Send
    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.SMTP_USER}>`,

      // ⭐ MAIN RECEIVER
      to: "contact@mercurionconsulting.com",

      // ⭐ CC YOU
      cc: "chaurasiyaumesh9@gmail.com",

      subject: `New Enquiry from ${name}`,

      html: `
        <h3>New Website Enquiry</h3>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>

        <p><b>Message:</b></p>
        <p>${message}</p>
      `,

      attachments:
        attachmentBuffer && file
          ? [
              {
                filename: file.name,
                content: attachmentBuffer,
              },
            ]
          : [],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
