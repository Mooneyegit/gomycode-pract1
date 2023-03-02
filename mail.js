const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'myemail@gmail.com',
    pass: 'mypassword'
  }
});

const mailOptions = {
  from: 'samueldubeonyenankeya@gmail.com',
  to: 'samueldubeonyenankeya@gmail.com',
  subject: 'Sending Email using Node.js',
  text:` hello go my code `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});