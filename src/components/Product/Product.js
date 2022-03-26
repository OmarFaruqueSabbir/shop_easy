import React from 'react';
import './Product.css'
import { MdShoppingCart } from 'react-icons/md'

const Product = ({product,handleCart}) => {
    const {img,name,price} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-detail'>
                <h1 className='product-name'>{name}</h1>
                <p> Price: {price} tk.</p>
                <button onClick={()=> handleCart(product)} className='btn'>Add to Cart  <MdShoppingCart className='icon' /></button>
            </div>

            
        </div>
    );
};

export default Product;