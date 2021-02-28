var express = require("express");
var Router = express.Router();

const User = require('../models/userSchema');
const verifyUser = require('../handlers/verifyUser');
const Product = require("../models/productSchema");

Router.route('/')
.get((req, res) => {
    res.send("Not allowed");
})
.patch(verifyUser, (req, res) => {
    const {item, quantity} = req.body
    const{_id, cartItems} = req.user;

    let itemPresent = cartItems.find(cartItem => cartItem.item.equals(item))

    if(!itemPresent){
        res.json({message : "No such item in the cart"});
    } else {
        Product.findOne({"_id" : item})
        .then(product => {
            if(product.quantity < quantity){
                res.json({message : "quantity out of stock"});
            } else {
                User.updateOne({_id, "cartItems.item" : item}, {$set : {"cartItems.$.quantity" : quantity}})
                .then(response => {
                    res.json({message : "quantity updated successfully "})
                })
                .catch( err => console.log(err));
            }
        })
    }
        
})
.post((req, res) => {
    res.send("Not allowed");
})
.delete((req, res) => {
    res.send("Not allowed");
})

module.exports = Router;