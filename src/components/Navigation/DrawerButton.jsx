import React from "react";
import "./Button.css"
const DrawerButton = props =>(
<button className="ToggleButton" onClick={props.click}>
<div className="Button"></div>
<div className="Button"></div>
<div className="Button"></div>
</button>
);


export default DrawerButton;