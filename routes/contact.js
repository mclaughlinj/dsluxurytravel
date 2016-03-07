var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');

/* GET about page. */
router.post('/', function(req,res){

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport(sendmailTransport({
    path: '/usr/sbin/sendmail'
  }));

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'mclaughlinj@modpsy.co.uk', // sender address
      to: 'mclaughlinj@mac.com', // list of receivers
      subject: 'DS Luxury started', // Subject line
      text: 'DS Luxury started', // plaintext body
      html: '<b>DS Luxury</b>  started' // html body
  };


  console.log(mailOptions);
  console.log('um');


  transporter.sendMail(mailOptions, function (error, response) {
      console.log('sending');
      //Email not sent
      if (error) {
          res.render('home', { pageTitle: 'Fail', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      }
      //Yay!! Email sent
      else {
          res.render('home', { pageTitle: 'Success', msg: 'Message sent! Thank you.', err: false, page: 'contact' });
          res.end('sent');
      }
  });
});

module.exports = router;
