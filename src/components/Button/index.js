import React from "react";
import "./style.css";

function Button(props) {
  return (
    <div className="buttonDiv">
      <p>Click to order last names alphabetically </p>
      <button className="btn btn-primary" onClick={() => props.handleOrder}>
        Reorder
      </button>
    </div>
  );
}

export default Button;
