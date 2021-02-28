const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
  name : {
      type: String,
      required: true
  },
  email : {
      type : String,
      required: true
  },
  password : {
      type : String,
      required : true
  },
  cartItems : [{
      item : {
        type : Mongoose.Schema.Types.ObjectId,
        ref : "Product"
      },
      quantity : Number
  }],
  date : {
      type : String,
      default : Date.now()
  }
});

const User = Mongoose.model("User", userSchema);

module.exports = User;