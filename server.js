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
    service: 'gmail',
    auth: {
      user: 'rjsanti13@gmail.com',
      pass: '002Darling'
    }
  }
  );

  const mailOptions = {
    from: req.body.email,
    to: 'rjsanti13@gmail.com',
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(error);
      res.send('Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
