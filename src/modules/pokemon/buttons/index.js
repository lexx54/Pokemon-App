import React from "react";
import Defaultbutton from "./DefaultButton";
import Agreebutton from "./AgreeButton";

const Button = 
    ({type,...others}) => {
      switch(type){
        case "agree":
          return <Agreebutton {...others} /> ;
        default:
          return <Defaultbutton {...others}/>;
      }
    }

export default Button;