const nodemail = require("nodemailer");

const sendMail = async options => {
  const transporter = nodemail.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: options.email,
    subject: options.subject,
    html: options.html
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
