import React, { useState } from "react";

function Toggle() {

  const [isOn, buttonChange] = useState(false)

  function handleClick() {
    buttonChange(isOn => isOn = !isOn)
  }

  const color = isOn ? 'red' : 'white'

  return <button onClick={handleClick} style={ {background: color} }>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
