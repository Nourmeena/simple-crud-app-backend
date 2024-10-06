//for express 
const express = require('express'); //import express
const app = express();

//for static files
app.use("/public", express.static(__dirname + "/public"));

//to use .env 
require('dotenv').config();

//database connection 
require("./models/connect.js");

//listening to port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));

//routes 
app.use(express.json());
const routes = require('./routes/weddingRoutes.js');// get the page that stores routes
app.use('/', routes);

//to add without json formate only 
app.use(express.urlencoded({ extended: false }));