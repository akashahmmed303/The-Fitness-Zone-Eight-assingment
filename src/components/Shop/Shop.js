import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = product => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const notify = () => toast('Wow Activity Completed Successfully!');
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
        <div className='my-info'>
          <h2>Akash Ahmmed</h2>
          <p>
            <b>Jashore, Bangladesh</b>
          </p>
        </div>
        <div className='age-info'>
          <h1>
            75<small>kg</small>
          </h1>
          <h1>5.7</h1>
          <h1>
            18<small>yrs</small>
          </h1>
          <p>Weight</p>
          <p>Height</p>
          <p>Age</p>
        </div>
        <h2>Add A Break</h2>
        <div className='btn-break'>
          <button>10s</button>
          <button>20s</button>
          <button>30s</button>
          <button>40s</button>
        </div>

        <h2>Exercise Details</h2>
        <h3>Exercise time : {cart.length}</h3>
        <h3>Break time :</h3>
        <button onClick={notify} className='btn-active'>
          Activity Completed
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Shop;
