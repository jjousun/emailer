function sendmailer(req, res) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: req.body.email,
    from: '',
    subject: req.body.subject,
    text: req.body.message,
  };
  sgMail.send(msg, (error, result) => {
    if (error) {
      res.send("SG email not sent aw");
    } else {
      res.send("SG email sent successfully! Check your email woot");
    }
  });
}

module.exports = sendmailer;