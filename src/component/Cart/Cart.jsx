import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;

        // console.log(product)
    }
    const tax = total/100*7;
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Shipping Charge: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;