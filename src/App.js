import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login} from "./components/Login";
import {Screen} from "./components/Cards/Screen";
import Nav from "./components/Navigation/Nav";
import Sidedraw from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/backdrop/Backdrop";

class App extends React.Component {
  state={
    sideDrawerOpen: false
  };
   drawerToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
};

backdropClickHandler = () =>{
  this.setState({sideDrawerOpen:false});
};
render(){

let backdrop;
if(this.state.sideDrawerOpen){
  backdrop= <Backdrop click={this.backdropClickHandler}/>;
}
  return (
 <div style={{height:"100%"}}>
   <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
   <Sidedraw show={this.state.sideDrawerOpen}/>
   {backdrop}
    <main style={{marginTop:"64px"}}></main>
    <Login/>
    <Screen/>
 </div>
  );
}
}


export default App;
