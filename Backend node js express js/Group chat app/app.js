const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

//importing the respective routes
const loginRoutes = require("./routes/login.js");
const messageRoutes = require("./routes/message.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//route to handle /login case
app.use(loginRoutes);

//route to handle post request on "/"
app.use(messageRoutes);

//route to handle get request on "/"
app.use(messageRoutes);


app.listen(3000, () => { console.log("Server is live...") });