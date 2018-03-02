function mailGuner(req, callback) {
  var mailgun = require("mailgun-js");
  var api_key = '';
  var DOMAIN = '';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

  var data = {
    from: 'YAS queen mg here <me@samples.mailgun.org>',
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.message
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      callback(false);
    } else {
      callback(true);
    }
  });
}

module.exports = mailGuner;