const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9000;

const home = require('./routes/home');
const addProducts = require('./routes/addProducts');
const listProducts = require('./routes/listProducts');
const addItemsToCart = require('./routes/addItemsToCart');
const updateCartItemQuantity = require('./routes/updateCartItemQuantity');
const listCartItems = require('./routes/listCartItems');
const signUp = require('./routes/signUp');
const signIn = require('./routes/signIn');

require('dotenv').config();
require('./handlers/mongoose');
require('./handlers/multer');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.use('/', home);
app.use('/add-products', addProducts);
app.use('/list-products', listProducts);
app.use('/add-items-to-cart', addItemsToCart);
app.use('/list-cart-items', listCartItems);
app.use('/update-cart-item-quantity', updateCartItemQuantity);
app.use('/signup', signUp);
app.use('/signin', signIn);


app.get('*', (req, res) => {
  res.send('Page Not Found');
})

if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'));
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})