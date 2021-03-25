import React from "react";
import "./buttons.css";

const Defaultbutton = ({action,text}) => (
  <button onClick={action} className="btn btn-default">
    {text}
  </button>
)

export default Defaultbutton;