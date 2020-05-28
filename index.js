require("dotenv").config();
const cors = require("cors");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

const routes = require("./routes/routes");
const auth = require("./middlewares/auth");
const jwtStategy = require("./configs/passport").jwtStrategy;
const googleStrategy = require("./configs/passport").googleStrategy;
const facebookStrategy = require("./configs/passport").facebookStrategy;
const linkedinStrategy = require("./configs/passport").linkedinStrategy;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("./public"));

passport.use(jwtStategy);
passport.use(facebookStrategy);
passport.use(googleStrategy);
passport.use(linkedinStrategy);

app.use(passport.initialize());

mongoose.connect(process.env.DATA_BASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.once("open", () => {
    routes(app, auth);

    if (process.env.NODE_ENV === "production") {
      app.use(express.static("client/build"));
      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
    }

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Оно живо! PORT=${PORT}`));
  })
  .on("error", (err) => {
    console.log("Connection error:", err);
  });
