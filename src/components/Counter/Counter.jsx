import React from 'react';
import './CounterStyle.css';
import { useCount } from '../../hooks/useCount';

function Counter() {

const { add, subtraction, valor } = useCount (0,0,10);

  return (
    <div className="counter">
      <p>{valor}</p>
      <button onClick={subtraction}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
}

export default Counter;
