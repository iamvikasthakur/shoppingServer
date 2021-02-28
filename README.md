# shoppingServer

https://shopany.herokuapp.com/ - landing page

https://shopany.herokuapp.com/signin - post 
body : {email, password}

https://shopany.herokuapp.com/signup - post
body : {name, email, password}

https://shopany.herokuapp.com/list-products - get

below are protected routes - need authorization token
header : {authorization : Bearer token}

https://shopany.herokuapp.com/add-products - post
body : {name, description, price, quantity, image} in formdata

https://shopany.herokuapp.com/add-items-to-cart - post
body : {item(it's id), quantity}

https://shopany.herokuapp.com/list-cart-items - get

https://shopany.herokuapp.com/update-cart-item-quantity - patch
body : {item(it's id), quantity}
