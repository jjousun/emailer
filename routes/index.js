var express = require('express');
var router = express.Router();
var sendGridMailer = require('./sg_email');
var mailGuner = require('./mg_email');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Emailer app' });
});

router.post('/api/email', function(req, res, next) {
  sendGridMailer(req, function(result) {
    if (result) {
      console.log('Sent via SendGrid');
      res.send('SG mail SENT!');
    } else {
      mailGuner(req, function(result) {
        if (result) {
          console.log('Sent via Mailgun');
          res.send('MG mail SENT');
        } else {
          console.log('Both SG and MG APIs failed');
          res.send('Something went wrong!');
        }
      });
    }
  });
});

// Sendmail email
// router.post('/email', sendGridMailer);

// // Mailgun email
// router.post('/', mailguner);

// // About page route.
// router.get('/about', function (req, res, next) {
//   res.send('About this app');
// })

module.exports = router;
