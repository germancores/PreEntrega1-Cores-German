import React from 'react'
import './CounterStyle.css';
import { useState, useEffect } from 'react';

function Counter() {
    const [valor, setValor] = useState(0);
    useEffect(() => {
      console.log('montaje');
      console.log(`El componente se actualizo ${valor}`);
      return () => {
        console.log('se desmonto el componente');
      };
    }, [valor]);
  
    const add = () => {
      setValor(valor + 1);
    };
    const subtraction = () => {
      setValor(valor - 1);
    };
  
    return (
      <div className="counter">
        <p>{valor}</p>
        <button onClick={subtraction}>-</button>
        <button onClick={add}>+</button>
      </div>
    );
  }

export default Counter