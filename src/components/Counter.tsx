import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-1</button>
      <span data-testid="count">{count}</span>
      <button onClick={handleIncrease}>+1</button>
    </div>
  );
}

export default Counter;
