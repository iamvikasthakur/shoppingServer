var express = require("express");
var Router = express.Router();

const upload = require('../handlers/multer');
const Product = require('../models/productSchema');
const verifyUser = require('../handlers/verifyUser');

Router.route('/')
.get((req, res) => {
    res.send("Not allowed");
})
.put((req, res) => {
    res.send("Not allowed");
})
.post(verifyUser, upload.single('image'), (req, res, next) => {
    const product = new Product ({...req.body, imageUrl : req.file.path})
    product.save()
    .then( response => {
        res.json({message : "Product added successfully"});
    })
    .catch(err => console.log(err));
})
.delete((req, res) => {
    res.send("Not allowed");
})

module.exports = Router;