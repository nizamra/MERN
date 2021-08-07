// "use strict";

// async..await is not allowed in global scope, must use a wrapper
// async function main() {
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
// let testAccount = await nodemailer.createTestAccount();

// create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport(transport[, defaults])








import React from 'react';
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: 'gmail',
  // host: "smtp.ethereal.email",
  // port: 587,
  // secure: false, // true for 465, false for other ports
  auth: {
    user: 'pharma.khoubezeh@gmail.com',
    pass: 'dmxsksndedzsaavi',
  },
});

let mailOptions = {
  from: 'pharma.khoubezeh@gmail.com',
  to: 'nizamra_95@hotmail.com',
  subject: 'Testing Testing',
  text: "See if it's working"
}

// const senddd = transporter.sendMail(mailOptions, function (err, data) {
//   if (err) {
//     console.log('Error with something');
//   } else {
//     console.log('Email sent!!!');
//   }
// });


const containerStyle = {
  border: '3px solid #73AD21',
  width: '70%',
  height: '50%'
}
export default class Mailage extends React.Component {
  dramas = () => {
    transporter.sendMail(mailOptions)
      .then(function (response) {
        console.log('Email sent!!!');
      })
      .catch(function (error) {
        console.log('Err!!!', error);
      });
  }
  render() {
    return (
      <div style={containerStyle}>
        <p>fragments</p>
        <button onClick={this.dramas} >Activate Lasers</button>
      </div>
    );
  }
}





  // // send mail with defined transport object
  // let info = await transporter.sendMail({
  //   from: '"Fred Foo 👻" <foo@example.com>', // sender address
  //   to: "bar@example.com, baz@example.com", // list of receivers
  //   subject: "Hello ✔", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: "<b>Hello world?</b>", // html body
  // });

  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
