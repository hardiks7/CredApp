import React from 'react';
import "./button.css";

const Button = ({buttonTaxt, onClick, customClass, prefix}) => {
  return (
<div className={`flex absolute-center button-wrapper ${customClass}`} 
onClick={onClick}
>
    {prefix} {buttonTaxt}
</div> 
  );  
}; 
export default Button;
