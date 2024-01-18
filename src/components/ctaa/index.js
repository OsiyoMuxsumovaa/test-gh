const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;



const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sizningemail@gmail.com',
        pass: 'sizningemailparolingiz'
    }
});

const mailOptions = {
    from: 'sizningemail@gmail.com',
    to: 'sizningemailga@gmail.com',
    subject: 'Veb-saytizdan xabar',
    text: 'Foydalanuvchidan kelgan xabar: ' + message
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email yuborildi: ' + info.response);
    }
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
    const email = req.body.email;
    const message = req.body.message;

    // Xabarni olish va emailga jo'natish o'rinlari
    // ...

    res.send('Xabar muvaffaqiyatli jo\'natildi!');
});

app.listen(port, () => {
    console.log(`Server ishga tushdi: http://localhost:${port}`);
});
