import React from "react";
import "./buttons.css";

const Agreebutton = ({action,text}) => (
  <div className="btn-container">
    <button onClick={action} className=" btn btn-agree">
      {text}
    </button>
    <span>Acept everything</span>
  </div>
)

export default Agreebutton;