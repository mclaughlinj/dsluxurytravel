var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', {pageTitle: 'DS Luxury Travel Private Driver Services'});
});

module.exports = router;
