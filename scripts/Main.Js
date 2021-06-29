const shopping_cart = [];

function to_cart(item){
    alert("Item added to cart!")
}

function total_price(){ //i literally have no idea what this does but it works so dont touch it :)
    return shopping_cart.reduce((a, c) => {
        if (!a[c]) a[c] = 1;
        else a[c]++;
        return a;
    }, {});
}

function checkout_price(){
    checkout_price = total_price()
    return test = checkout_price.length()
}

