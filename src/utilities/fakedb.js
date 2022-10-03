const SetLocal = (_id) => {
    console.log(_id)


    // If cart not exist then after this line --> the last line work (Others will not work) 
    let shopping_cart = {};

    // Get the shopping cart (if exist) as stringify form. Other wise declared "shopping-cart" work
    const storeCart = localStorage.getItem('shopping_cart');

    // If shopping cart exist
    if (storeCart) {
        shopping_cart = JSON.parse(storeCart)                       // covert to JSON 
    }

    // Now in "shopping cart" we have javascript file
    // Get object value (if already given)
    const quantity = shopping_cart[_id]

    if (quantity) {
        const newQuantity = quantity + 1
        shopping_cart[_id] = newQuantity

    }
    else {
        shopping_cart[_id] = 1
    }

    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))
}


const getShoppingCart = () => {

    let shopping_cart = {};

    const storeCart = localStorage.getItem('shopping_cart');

    if (storeCart) {
        shopping_cart = JSON.parse(storeCart)                       // covert to JSON 
    }

    return shopping_cart;
}


const Remove_cart = (_id) => {

    const storeCart = localStorage.getItem('shopping_cart');

    // Check if the quantity exist
    if (storeCart) {
        const shopping_cart = JSON.parse(storeCart);

        // If exist. Then check if the "id" exist in object.
        if (_id in shopping_cart) {
            delete shopping_cart[_id]
            localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))
        }
    }


}


const DeleteShoppingCart = () => {
    console.log('yes')
    localStorage.removeItem('shopping_cart')
}

export { SetLocal, Remove_cart, DeleteShoppingCart, getShoppingCart }