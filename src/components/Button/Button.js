import React from 'react';
import classNames from 'classname';

function Button({ children, className, ...props }){
  return (
    <button
      className={classNames("App-button", className)}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button;