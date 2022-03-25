import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {img,name,price} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-detail'>
                <h1 className='product-name'>{name}</h1>
                <p> Price: {price} tk.</p>
                
            </div>

            
        </div>
    );
};

export default Product;