import React from "react";
import {Route} from "react-router";
import InitialImages from "./initialimages.js";
import Login from "./login.js"; 
import Profile from "./profile.js"; 
import ShoppingCart from "./shoppingcart.js";
import {Link} from "react-router-dom";

let link = {
	borderRadius: "5px",
	border: "2px solid black",
	margin: "0px 10px 0px 10px"
}


class App extends React.Component {
  render() {
    return (
        <div>

          <div id="navbar"> 
          	<Link to="/" style={link}> Main </Link> 
          	<Link to="/login" style={link}> Log In </Link>
          	<Link to="/profile" style={link}> Profile </Link>
          	<Link to="/shoppingcart" style={link}> Shopping Cart </Link> 
          </div>
          <Route exact path = "/" component = {InitialImages} />
          <Route path = "/login" component = {Login} />
          <Route path = "/profile" component = {Profile} />
          <Route path = "/shoppingcart" component = {ShoppingCart} />

        </div>
    )
  }
}

export default App; 