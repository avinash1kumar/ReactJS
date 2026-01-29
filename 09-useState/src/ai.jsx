import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(0);

  const increment = () => {
    setCount(prev => {
      const newVal = prev + 1;
      setDisplay(newVal);
      return newVal;
    });
  };

  const decrement = () => {
    setCount(prev => {
      const newVal = prev - 1;
      setDisplay(newVal);
      return newVal;
    });
  };

  const showEven = () => {
    if (count < 0) {
      setDisplay("❌ -ve no is not even");
    } else if (count % 2 === 0 && count >= 0) {
      setDisplay(count+2);
    }
  };

  const showOdd = () => {
    if (count < 0) {
      setDisplay("❌ -ve no is not odd");
    } else if (count % 2 !== 0) {
      setDisplay(count);
    } else {
      setDisplay("❌ Not an odd number");
    }
  };

  const reset = () => {
    setCount(0);
    setDisplay(0);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter</h2>
      <h3>{display}</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={showEven}>Even</button>
      <button onClick={showOdd}>Odd</button>
      <br /><br />

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
