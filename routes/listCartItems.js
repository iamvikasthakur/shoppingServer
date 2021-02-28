var express = require("express");
var Router = express.Router();
const verifyUser = require('../handlers/verifyUser');

Router.route('/')
.get(verifyUser, (req, res) => {
    const {cartItems} = req.user
    res.json(cartItems);
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