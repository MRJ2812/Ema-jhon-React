import React from 'react';
import './Product.css'

// It's an alternative of props
const Product = ({ product, buttonClicked }) => {

    // There are a function and a object
    // const {product,buttonClicked} = props
    // Object distrucuring
    const { name, seller, ratings, img, price } = product


    return (
        <div className='product'>

            <img src={img} alt="" />

            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} </small></p>
            </div>

            {/* Send product object in shop file. lift up */}
            <button onClick={() => buttonClicked(product)} className='button'>Add to Cart <i className="fa-sharp fa-solid fa-cart-arrow-down"></i> </button>

        </div>
    );
};

export default Product;