import React from 'react';
import { getShoppingCart, SetLocal } from '../../utilities/fakedb';
import './Cart.css'

const Cart = ({ cart }) => {

    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0
    for (const tempProducts of cart) {
        total += tempProducts.price * tempProducts.quantity
        shipping += tempProducts.shipping;
        quantity += tempProducts.quantity
    }

    const tax = (total * 0.1).toFixed(2)
    let grandTotal = total + shipping + parseInt(tax)


    return (
        <div className='Cart'>
            <h3>Order Summary</h3>

            <p>Selected items: {quantity}</p>
            <p>Total Price :${total}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button >Clear Cart</button>
            <button onClick={getShoppingCart}>Reveiw Order</button>
        </div>
    );
};

export default Cart;