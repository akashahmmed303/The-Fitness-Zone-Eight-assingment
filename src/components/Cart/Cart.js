import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Cart.css';
const Cart = props => {
  const { cart } = props;

  // const handleClick = () => {
  //   console.log('btn-break');
  // };

  let total = 0;
  for (const product of cart) {
    total = total + product.timeRequired;
  }

  const notify = () => toast('Wow Activity Completed Successfully!');

  return (
    <div className='cart'>
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
      <div className='break-container'>
        <div className='btn-break'>
          <button>10s</button>
          <button>20s</button>
          <button>30s</button>
          <button>40s</button>
        </div>
      </div>

      <h2>Exercise Details</h2>
      <h3 className='exercise-field'>Exercise time : {total} seconds</h3>
      <h3 className='break-field'>Break time :</h3>
      <button onClick={notify} className='btn-active'>
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default Cart;
