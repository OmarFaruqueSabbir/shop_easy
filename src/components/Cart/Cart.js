import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let selectItem = []
    for (const product of cart){
        selectItem.push(product)
    }

    // getting random number
    const [item,setItem] = useState([selectItem])

    const handleCart = (selectItem) =>{
        const randomItem = selectItem[Math.floor(Math.random()*selectItem.length)];
        setItem(randomItem);
    }
    const {name} = item;
    return (
        <div className='cart'>
            <h4>Order Summary: </h4>
            <p>Selected items: 
                <ol>
                    {selectItem.map((product) => ( 
                        <li> {product.name}</li>
                    ))}
                </ol>
            </p>

            <button className='btn' onClick={()=> handleCart(selectItem)}>choose one</button>
            <h5>Randomly Selected: </h5>
            <p> {name? name : 'select your meal'}</p>
        </div>
    );
};

export default Cart;