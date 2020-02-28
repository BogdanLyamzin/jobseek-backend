const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwtStategy = require('./configs/passport').jwtStrategy
const facebookStrategy =  require('./configs/passport').facebookStrategy
const googleStrategy = require('./configs/passport').googleStrategy
const linkedinStrategy = require('./configs/passport').linkedinStrategy
const passport = require('passport')
const auth = require("./middlewares/auth");


const routes = require('./routes/routes');
const db = require('./configs/db').mongoURI;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));

//passport init
passport.use(jwtStategy)
passport.use(facebookStrategy)
passport.use(googleStrategy)
passport.use(linkedinStrategy)

app.use(passport.initialize())

// Database connect
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.on('error', (err) => {
  console.log('Connection error:', err)
})

// Если подключение в БД прошло успешно
mongoose.connection.once('open', () => {
    console.log('Connect to MongoDB success')
    routes(app, auth);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Оно живо! PORT=${PORT}`)
    });
})



