const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require('./routes/routes');
const db = require('./configs/db').mongoURI;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'));

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
    routes(app);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Оно живо! PORT=${PORT}`)
    });
})



