var express = require("express");

var Router = express.Router();

Router.route('/')
.get((req, res) => {
    res.send("Welcome at Shopping App - check out https://github.com/iamvikasthakur/shoppingServer for how to use");
})
.put((req, res) => {
    res.send("Not allowed");
})
.post((req, res) => {
    res.send("Not allowed");
})
.delete((req, res) => {
    res.send("Not allowed");
})

module.exports = Router;