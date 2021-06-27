const shopping_cart = [];

function to_cart(item){
    alert("Item added to cart!")
    shopping_cart.push(item);
    console.log(shopping_cart);
    total_price()
}

function total_price(){
    var total_cart_price;
    total_cart_price = shopping_cart.filter()
    console.log(total_cart_price)
}
