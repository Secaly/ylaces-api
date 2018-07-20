import nodemailer from 'nodemailer';

const from = '"Ylaces" <info@ylaces.com';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
};

export function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Welcome to Ylaces',
    text: `
      Welcome to Ylaces, please confirm your email.

      ${user.generateConfirmationURL()}
    `
  };

  transport.sendMail(email);
};
