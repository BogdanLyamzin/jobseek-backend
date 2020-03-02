require('dotenv').config()

module.exports = (email, token) => ({
    to: email,
    from: process.env.EMAIL_FROM,
    subject: 'Відновлення пароля',
    html: `
        <h1>Відновлення пароля до профілю ${email}</h1>
        <p>Якщо ви не відновлювали пароль, проігноруйте це повідомлення!</p>
        <p>Для відновлення паролю, перейдіть до посилання <a href='http://jobseel.herokuapp.com/resetpass/${token}'>Відновити пароль</a></p>
        <hr>
        <a href='http://jobseel.herokuapp.com/login'>Перейти в кабінет</a>
    `
})