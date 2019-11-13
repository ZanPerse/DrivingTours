import React from "react";
import "./Nav.css";
import  DrawerButoon from "./DrawerButton";
const Nav = props =>(
<header className="toolbar">
    <nav className="toolbar-navigation">
        <div className="Drawer__button">
            <DrawerButoon click={props.drawerClickHandler} />
        </div>
        <div className="toolbar-logo"><a href="/">DrivingTours</a></div>
        <div className="spacer"></div>
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">USER INFO</a></li>
                <li><a href="/">OFFERS</a></li>
            </ul>
        </div>
    </nav>
</header>
);


export default Nav;
