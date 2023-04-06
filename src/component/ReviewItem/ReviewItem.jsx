import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import "./ReviewItem.css"

const ReviewItem = ({ pd, removeItem }) => {
    const {id, img, name, price, shipping } = pd;
    return (
        <div className='item'>
            <div className='item-left'>
                <img src={img} alt="" />
                <div>
                    <h3>{name} </h3>
                    <h4>Price: <span className='price'>${price}</span></h4>
                    <p>Shipping: <span className='price'>${shipping}</span></p>
                </div>
            </div>
            <div>
                <button onClick={() => removeItem(id)} className='btn'>
                    <FontAwesomeIcon className='icon' icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;