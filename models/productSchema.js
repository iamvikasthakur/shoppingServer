const Mongoose = require("mongoose")

const productSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
      type: Number,
      required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Product = Mongoose.model("Product", productSchema)

module.exports = Product;