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
            host: 'smtp.gmail.com',
            port: '465',
            auth:{
                user: 'testlululu123@gmail.com',
                pass: 'Secretpassword'
            }
        })

        transporter.sendMail((err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

