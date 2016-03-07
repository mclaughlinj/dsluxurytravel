var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', {pageTitle: 'DS Luxury Travel Private Driver Services'});
});

router.post('/', function(req,res){
  console.log(mailOptions);

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport(sendmailTransport({
    path: '/usr/sbin/sendmail'
  }));

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: req.body.email, // sender address
      to: 'mclaughlinj@mac.com', // list of receivers
      subject: 'DS Luxury Travel Web Enquiry', // Subject line
      text: req.body.special + '/r' + req.body.name // plaintext body
  };

  transporter.sendMail(mailOptions, function (error, response) {
      //Email not sent
      if (error) {
          console.log(error);
          res.render('home', { pageTitle: 'Fail', msg: 'Error occured, message not sent.', err: true, page: 'contact' });

      }
      //Yay!! Email sent
      else {
          console.log(response);
          res.render('home', { pageTitle: 'Success', msg: 'Message sent! Thank you.', err: false, page: 'contact' });
      }
  });
});

module.exports = router;
