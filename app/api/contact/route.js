import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.CONTACTPORT,
  secure: true,
  auth: {
    user: process.env.CONTACTUSER,
    pass: process.env.PASSWORD,
  },
});
export async function POST(request) {
  const { data } = await request.json();
  console.log("data: ", data);

  const { name, phone, model, comment } = data;

  if (!name || !model || !comment || !phone) return;

  const mailOptions = {
    from: "info@iccgarage.com",
    to: "info@iccgarage.com",
    subject: "Client Query",
    text: `
    Name: ${name} 
    Phone: ${phone}
    Model: ${model}
    Comment: ${comment}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error.message);
    } else {
      console.log("Email sent:", info);
    }
  });
  return NextResponse.json("mail sent");
}
