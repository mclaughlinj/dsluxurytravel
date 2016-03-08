var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', {pageTitle: 'DS Luxury Travel Private Driver Services'});
});

router.post('/', function(req, res){

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport(sendmailTransport({
    path: '/usr/sbin/sendmail'
  }));

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: req.body.email, // sender address
      to: 'mclaughlinj@mac.com', // list of receivers
      subject: 'DS Luxury Travel Web Enquiry TEST', // Subject line
      text: 'Client name: ' + req.body.name
       + '\nClient email:' + req.body.email
       + '\nClient email:' + req.body.email
       + '\r(R)Client email:' + req.body.email
       + '\nClient email:' + req.body.email
       + '\nClient email:' + req.body.email
       + '\nClient email:' + req.body.email
  };

          console.log(mailOptions);

  transporter.sendMail(mailOptions, function (error, response) {
      //Email not sent
      if (error) {
          var success = {success: false};
          console.log(response);
          res.json(success);
      }
      //Yay!! Email sent
      else {
          var success = {success: true};
          console.log(response);
          res.json(success);
      }
  });
});

module.exports = router;
