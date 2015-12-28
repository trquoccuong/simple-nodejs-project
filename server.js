"use strict";

var express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    helmet = require("helmet"),
    mongoose = require("mongoose");

var config = require("./config");
var connstring = "mongodb://" + config.username +  ":" + config.password + "@" + config.host + ":" + config.port + "/" + config.database;
var db = mongoose.connect(connstring);

var app = express();

app.listen(3333);


