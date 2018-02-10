import React from "react";
import {Route} from "react-router";
import InitialImages from "./initialimages.js";
import Login from "./login.js"; 
import Profile from "./profile.js"; 
import ShoppingCart from "./shoppingcart.js";
import {Link} from "react-router-dom";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import MenuItem from "material-ui/MenuItem";
console.log("FlatButttttttton", FlatButton);
let link = {
	margin: "0px 10px 0px 10px"
}


class App extends React.Component {
  render() {
    return (
        <div>
        <AppBar>
          	<Link to="/" style={link}> <MenuItem primaryText="Main"></MenuItem> </Link> 	
          	<Link to="/login" style={link}> <MenuItem primaryText="Log In"></MenuItem> </Link>
          	<Link to="/profile" style={link}> <MenuItem primaryText="Profile"></MenuItem> </Link>
          	<Link to="/shoppingcart" style={link}> <MenuItem primaryText="Cart"></MenuItem> </Link>       
        </AppBar>   
          <Route exact path = "/" component = {InitialImages} />
          <Route path = "/login" component = {Login} />
          <Route path = "/profile" component = {Profile} />
          <Route path = "/shoppingcart" component = {ShoppingCart} />

        </div>
    )
  }
}

export default App; 