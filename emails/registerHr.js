require('dotenv').config();

module.exports = (email, password) => ({
    to: email,
    from: process.env.EMAIL_FROM,
    subject: 'Регістрація на Jobseek',
    html: `
    <h1>Вітаємо на Jobseek!</h1>
    <p>Ви успішно створили профіль.</p>
    <p>Дані для входу:</p>
    <p>Email: ${email};</p>
    <p>Password: ${password}</p>
    `
});