import React, { Component, PropTypes } from "react";

const Counter = ({ value, onIncrement }) => 
(
  <div>
    <button onClick ={onIncrement}> incr </button >)
    </div>
)

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,

// };

export default Counter;
