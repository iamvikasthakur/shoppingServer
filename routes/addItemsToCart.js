const { response } = require("express");
var express = require("express");
const Product = require("../models/productSchema");
const User = require("../models/userSchema");
const verifyUser = require("../handlers/verifyUser");

var Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.send("Not allowed");
  })
  .put((req, res) => {
    res.send("Not allowed");
  })
  .post(verifyUser, (req, res) => {
    const { item, quantity } = req.body;
    const { _id, cartItems } = req.user;

    Product.findOne({ "_id": item })
    .then((product) => {
      // console.log(product);
      if (!product) {
        res.json({ message: "Product don't exist" });
      } else if (product.quantity < quantity) {
        res.json({ message: "quantity out of stock" });
      } else {
        let itemPresent = cartItems.find(cartItem => cartItem.item.equals(item))
        if(itemPresent){
            res.json({message : "item already in the cart"});
        } else {
          User.updateOne(
            { _id },
            { $push: { cartItems: { item, quantity } } }
          )
            .then((response) => {
              res.json({ message: "item added successfully " });
            })
            .catch((err) => console.log(err));
        }
      }
    });
  })
  .delete((req, res) => {
    res.send("Not allowed");
  });

module.exports = Router;
