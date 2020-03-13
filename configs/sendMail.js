const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
require('dotenv').config();

const transporter = nodemailer.createTransport(sendgrid({
    auth: {api_key: process.env.EMAIL_KEY}
}))

module.exports = transporter;