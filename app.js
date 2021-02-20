const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const app = express();
const passport = require('passport');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize())
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
app.listen(port, () => console.log(`Server is running on port ${port}`));
