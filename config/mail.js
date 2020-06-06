//import nodemailer from "nodemailer"
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'mailcluster.loopia.se',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'admin@acredit.se',
        pass: 'jPuUGmSg73D5KbN'
    },
    tls: {
        rejectUnauthorized: false
    }
})
exports.transporter = transporter;
const getPasswordResetURL = (user, token) =>
    //  `http://app.acredit.se/api/mail/${user._id}/${token}`
    `http://app.acredit.se/api/mail/${user._id}/${token}`
exports.getPasswordResetURL = getPasswordResetURL;

const resetPasswordTemplate = (user, url) => {
    const from = 'admin@acredit.se'
    const to = user.email
    const subject = "🌻 Acredit Password Reset 🌻"
    const html = `
  <p>Hey ${user.name || user.email},</p>
  <p>We heard that you lost your Acredit password. Sorry about that!</p>
  <p>But don’t worry! You can use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>If you don’t use this link within 1 hour, it will expire.</p>
  <p>Do something outside today! </p>
  <p>–Your friends at Acredit</p>
  `

    return { from, to, subject, html }
}

exports.resetPasswordTemplate = resetPasswordTemplate;