import React from "react";
import "./SideDrawer.css";
const SideDrawer = props =>{
   let drawerClasses ='SideDrawer';
   if(props.show){
       drawerClasses ='SideDrawer open';
   }
   return(
   <nav className={drawerClasses}>
        <ul>
            <li><a href="/">OFFERS</a></li>
            <li><a href="/">USER INFO</a></li>
        </ul>
    </nav>);
};
export default  SideDrawer;