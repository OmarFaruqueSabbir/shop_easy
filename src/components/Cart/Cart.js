import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart,handleCart2}) => {
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
    const {name,img} = item;

    return (
        <div className='cart'>
            <h4>Order Summary: </h4>
            <p>Selected items: 
                    {selectItem.map((product) => ( 
                        <div class="card-body d-flex">
                        <img src={product.img} class="card-img-top" className="box"   alt="..."></img>
                        <h5 class="card-title"> {product.name}</h5>
                    </div>
                    ))}
            </p>

            <button className='btn' onClick={()=> handleCart(selectItem)}>choose one</button>
            <h5>Randomly Selected: </h5>
            <div className='card-body'>
                <img className="box1" src={img} alt="" />
            <p> {name? name : 'select your item'}</p>
            </div>

            <button className='btn' onClick={handleCart2}>remove items</button>
        </div>
    );
};

export default Cart;