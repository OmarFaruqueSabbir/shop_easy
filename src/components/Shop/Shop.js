import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProduct] = useState([])
    const [cart,setCart] = useState([])

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);

    const handleCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart)
    }

    //removing data triggering 'remove items' button
    const handleCart2 = () =>{
        setCart([])
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleCart2={handleCart2}></Cart>

            </div>
            
        </div>


        
    );
};

export default Shop;