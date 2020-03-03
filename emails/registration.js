require('dotenv').config()

module.exports = email => ({
    to: email,
    from: process.env.EMAIL_FROM,
    subject: 'Регістрація на Jobseek',
    html: `
    <h1>Вітаємо на Jobseek!</h1>
    <p>Ви успішно створили профіль.</p>
    `
})