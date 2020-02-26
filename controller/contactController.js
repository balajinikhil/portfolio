const catchAsyn = require("./../utils/catchAsyn");
const Contact = require("./../model/contactModel");
const sendMail = require("./../utils/sendMail");

exports.sendContact = catchAsyn(async (req, res, next) => {
  const newContact = await Contact.create(req.body);

  try {
    await sendMail({
      email: req.body.email,
      subject: `Thanks for being awesome!`,
      html: `<p>
          Hi ${req.body.name}
        We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below. Otherwise, we will reply by email as soon as possible. Talk to you soon </p>`
    });
  } catch (err) {
    console.log("unable to send mail");
  }

  res.status(200).json({
    status: "success",
    newContact
  });
});
