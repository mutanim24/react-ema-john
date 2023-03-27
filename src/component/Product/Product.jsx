import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <h5 className='price'>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
            <button className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default Product;