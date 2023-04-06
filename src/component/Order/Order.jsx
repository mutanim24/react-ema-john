import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Order.css"
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const cart = useLoaderData();
    console.log(cart);
    const [cartArray, setCartArray] = useState(cart);

    const removeItem = (id) => {
        const remaining = cartArray.filter(item => item.id !== id)
        setCartArray(remaining)
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cartArray.map(pd => <ReviewItem
                        key={pd.id}
                        pd={pd}
                        removeItem={removeItem}
                    ></ReviewItem>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cartArray}></Cart>
            </div>
        </div>
    );
};

export default Order;