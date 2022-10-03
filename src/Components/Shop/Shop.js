import React, { useEffect, useState } from 'react';
import { getShoppingCart, SetLocal } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    // Load data form API (Now proucts is API data)
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setproducts(data))
    }, [])

    useEffect(() => {
        // Get the local storage Object
        const LocalStoreValue = getShoppingCart();

        const savedarray = []

        // Get the id's of local storage object
        for (const localStoreId in LocalStoreValue) {

            // Find "real API specific Object" with  "local storage id"  
            // Return real API  object
            const addedproduct = products.find(product => product.id == localStoreId)


            // If find the specific Object (value matched),
            //1. First  take the local storage object "quantity" by "value"
            if (addedproduct) {
                const quantity = LocalStoreValue[localStoreId]
                // get local storage quantity and set it in an array by  temporary variable
                addedproduct.quantity = quantity
                savedarray.push(addedproduct)

            }
        }
        setCart(savedarray)
    }, [products])



    // Take an empty array
    const [cart, setCart] = useState([])
    // "product is coming from another file"  --> lifting
    // Add new object with privious object in array 
    const Buttonclicked = (Selectedproduct) => {
        // Check is the clicked product exist in real API.
        const exist = cart.find(product => product.id == Selectedproduct.id);
        let newCart = [];
        // if not exist
        if (!exist) {
            // Increase selected product quantity to 1 and add in temporary array.
            Selectedproduct.quantity = 1
            newCart = [...cart, Selectedproduct]
        }
        // if exist
        else {
            // take the object which are already in API
            const rest = cart.filter(product => product.id != Selectedproduct.id);
            // Increase exist product quantity.
            exist.quantity += 1;
            newCart = [...rest, exist];

        }

        setCart(newCart)
        SetLocal(Selectedproduct.id)
    }


    return (
        <div className='Shop-container'>
            <div className='product-container'>
                {
                    // API product send data to product folder . (Confusion --> The buttonclicked is not called here, just send as a perameter)                        
                    products.map(product => <Product key={product.id} product={product} buttonClicked={Buttonclicked}></Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;