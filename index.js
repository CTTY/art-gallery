const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account)=>{
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>From: ${req.body.from}</li>
            <li>Title: ${req.body.title}</li>
        </ul>
        <h3>Content</h3>
        <p>${req.body.content}</p>
        `

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: 'testlululu123@gmail.com',
                   pass: 'Secretpassword'
               }
        })

        const mailOptions = {
            from: 'sender@email.com', // sender address
            to: 'to@email.com', // list of receivers
            subject: 'Subject of your email', // Subject line
            html: '<p>Your html here</p>'// plain text body
          };

          transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

