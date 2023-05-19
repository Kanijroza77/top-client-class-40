import React from 'react';

import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, ratings } = product


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price:{price}</p>
                <p><small> seller:{seller}</small></p>
                <p><small> ratings :{ratings}</small></p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className='ms-3'> Add to cart</span>
            </button>

        </div>
    );
};

export default Product;