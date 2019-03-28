var express = require("express");
var path = require("path");
var db = require("./models");

var app = express;

app.use(express.static(path.join(_dirname, "public")));