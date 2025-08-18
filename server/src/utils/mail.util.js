import nodemailer from "nodemailer";

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

export const sendVerificationEmail = async (to, subject, html) => {

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"Celeb-ind" <no-reply@celeb-ind.com>`,
    to,
    subject,
    html,
  });

  console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
};
