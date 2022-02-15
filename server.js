requre('dotenv').config();
const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);

  // if using gmail
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service: 'yahoo',
    secure: false,
    auth: {
      user: 'process.env.EMAIL',
      pass: 'process.env.PASSWORD'
    },
    debug: false,
    logger: true
  }
  );

  const mailOptions = {
    from: req.body.email,
    to: 'rsjames13@yahoo.com',
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
  }

  const sendMail = transporter.sendMail(mailOptions, (err, data) => {
    if(err) {
      console.log(err);
      res.send('Error');
    } else {
      console.log('Email sent: ' + data.response);
      res.send('Success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
