var express = require('express');
var router = express.Router();
var sendmailer = require('./sg_email');
var mailguner = require('./mg_email');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Emailer app' });  
});

// // Sendmail email
// router.post('/', sendmailer);

// Mailgun email
router.post('/', mailguner);

// // About page route.
// router.get('/about', function (req, res, next) {
//   res.send('About this app');
// })

module.exports = router;