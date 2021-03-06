var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');
var smtpTransport = require("nodemailer-smtp-transport");
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/dsluxury';

var app = express();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', {pageTitle: 'DS Luxury Travel: Executive Private Car Driver & Chauffeur Services'});
});

var mailUser = 'dslt.mailer@gmail.com';
var mailPass = '';

var findMailUsers = function(db, callback) {
   var cursor =db.collection('mailUsers').find( { "user": mailUser } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         mailPass = doc.password;
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findMailUsers(db, function() {
      db.close();
  });
});

router.post('/', function(req, res){

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport(sendmailTransport({
    path: '/usr/sbin/sendmail'
  }));

  var transporterSmpt = nodemailer.createTransport((smtpTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: mailUser,
        pass: mailPass
    }
  })));

  // setup e-mail data with unicode symbols
  var mailOptions = {};
  console.log(app.get('env'));
  mailOptions = {
    from: 'dslt.mailer@gmail.com', // sender address
    to: 'dsluxurytravel@gmail.com, mclaughlinj@mac.com', // list of receivers
    subject: 'DS Luxury Travel Web Enquiry', // Subject line
    text: 'Client name: ' + req.body.name
     + '\nClient email: ' + req.body.email
     + '\nClient address: ' + req.body.address
     + '\nClient phone (daytime): ' + req.body.phoneDay
     + '\nClient phone (evening): ' + req.body.phoneEve
     + '\n\nPick-up location: ' + req.body.pickUp
     + '\nPick-up date: ' + req.body.date
     + '\nPick-up time: ' + req.body.time
     + '\n\nDrop-off location: ' + req.body.dropOff
     + '\n\nTotal number of passengers: ' + req.body.number
     + '\n\nIncludes children: ' + req.body.kids
     + '\nNumber of children: ' + req.body.kidsNumber
     + '\nAges of children: ' + req.body.kidsAges
     + '\n\nMessage: ' + req.body.special
  };
  if (app.get('env') === 'development') {
    mailOptions.to = 'development@modpsy.co.uk';
  }

  console.log(mailOptions);

  transporterSmpt.sendMail(mailOptions, function (error, response) {
      //Email not sent
      if (error) {
          var success = {success: false};
          console.log(error);
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
