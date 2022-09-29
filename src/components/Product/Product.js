import React from 'react';
import './Product.css';
const Product = props => {
  const { name, img, forAge, timeRequired, para } = props.product;

  return (
    <div className='product'>
      <img src={img} alt='' />
      <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p>{para}</p>
        <p className='p'>For Age : {forAge}</p>
        <p className='p'>Time required : {timeRequired}s</p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className='btn-cart'
      >
        <p>Add to List</p>
      </button>
    </div>
  );
};

export default Product;
