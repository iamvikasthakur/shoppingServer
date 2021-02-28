var express = require("express");
var Router = express.Router();
const Product = require("../models/productSchema");

Router.route('/')
.get((req, res) => {
    Product.find({})
    .then(product => {
        res.json(product);
    })
    .catch(err => console.log(err));
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