var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arthursilvajorge347@gmail.com',
    pass: 'altickfonqjbfioz'
  }
});

var mailOptions = {
  from: 'arthursilvajorge347@gmail.com',
  to: 'igymorboe@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});