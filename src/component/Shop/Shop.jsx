import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // to get data from local storage
    useEffect(() => {
        const storedCart = getShoppingCart();
        // get id
        for (const id in storedCart) {
            const addedCart = products.find(product => product.id === id);
            let savedCart = [];
            // get quantity of the product
            if (addedCart) {
                const quantity = storedCart[id];
                addedCart.quantity = quantity;
                savedCart.push(addedCart);
                // console.log(addedCart)
            }
            setCart(savedCart);
        }

    }, [products]);
    // add to cart function
    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;