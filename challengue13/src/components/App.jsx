import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByValue } from "../store/counterSlice";

const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByValue = () => {
    const value = parseInt(prompt("Enter value to increment by:"));
    if (isNaN(value)) {
      alert("Invalid value");
      return;
    }
    dispatch(incrementByValue(value));
  };

  return (
    <>
      <h1>App</h1>
      <hr />
      <span>counter is: {counter}</span>
      <button className="btn btn-primary" onClick={handleIncrement}>
        +1
      </button>
      <button className="btn btn-primary" onClick={handleDecrement}>
        -1
      </button>
      <button className="btn btn-primary" onClick={handleIncrementByValue}>
        Increment by value
      </button>
    </>
  );
};

export default App;
