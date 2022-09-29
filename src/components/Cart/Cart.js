import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Cart.css';
const Cart = props => {
  const { cart } = props;
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(10);
  const increaseCount20 = () => setCount(20);
  const increaseCount30 = () => setCount(30);
  const increaseCount40 = () => setCount(40);
  // console.log(count);
  localStorage.setItem('Break Time', JSON.stringify(count));

  const getStoredCount = () => {
    let count = {};

    const storedCount = localStorage.getItem('break-field');
    if (storedCount) {
      count = JSON.parse(storedCount);
    }
    return count;
  };
  useEffect(() => {
    const storedCount = getStoredCount();
    console.log(storedCount);
  }, []);
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
          <button onClick={increaseCount}>10s</button>
          <button onClick={increaseCount20}>20s</button>
          <button onClick={increaseCount30}>30s</button>
          <button onClick={increaseCount40}>40s</button>
        </div>
      </div>

      <h2>Exercise Details</h2>
      <h3 className='exercise-field'>Exercise time : {total} seconds</h3>
      <h3 className='break-field'>Break time : {count} seconds </h3>
      <button onClick={notify} className='btn-active'>
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default Cart;
