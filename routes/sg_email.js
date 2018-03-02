function sendGridMailer(req, callback) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey();
  const msg = {
    to: req.body.email,
    from: 'test@example.com',
    subject: req.body.subject,
    text: req.body.message,
  };
  sgMail.send(msg, (error, result) => {
    if (error) {
      callback(false);
    } else {
      callback(true);
    }
  });
}

module.exports = sendGridMailer;