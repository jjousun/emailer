var express = require('express');
var router = express.Router();

/* GET profile listing. */
router.get('/:id', function(req, res, next) {
  res.render('profile', { id: req.params.id });
  console.log(req);
});

router.post('/:id', function(req, res, next) {
  res.render('profile', { id: req.params.id });
  console.log(req);
});

module.exports = router;