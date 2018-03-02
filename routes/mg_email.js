function mailguner(req, res) {
  var mailgun = require("mailgun-js");
  var api_key = '';
  var DOMAIN = '';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

  var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.message
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if (!error) {
      res.send("MG email sent :)");
    }
    else {
      res.send("MG email not sent :(");
    }
  });
}

module.exports = mailguner;