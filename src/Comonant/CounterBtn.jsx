
import React, { useState } from 'react';

const CounterBtn = ({ initialCount, onCountChange }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <button onClick={handleIncrement}>
      Click me! Current count: {count}
    </button>
  );
};

export default CounterBtn;
