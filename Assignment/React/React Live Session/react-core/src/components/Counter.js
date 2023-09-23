import React from "react";
import { increment, decrement } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../store/store";
// import {useS}

function Counter() {
  const { count } = useSelector((store) => store.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count={count}</h2>
      <button
        style={{ marginRight: "50px" }}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
