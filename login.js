import React from "react";
import actionCreator from "./actionCreator.js";
import {connect} from "react-redux";
const mapStateToProps = store => ({
	loggedInStatus: store.loggedInStatus
});

const mapDispatchToProps = dispatch => ({
	updateLogInStatus: (status) => {
		console.log("login.js:Inside updateLogInStatus: Line 10");
		dispatch(actionCreator.logIn(status)); 
	}
});

class Login extends React.Component {
  
  constructor(){
  	super();
  	this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(){
  	console.log("login.js:Inside onSubmit: Line 23");
  	let loginInputValue = document.getElementById("logInInput").value;
  	this.props.updateLogInStatus(loginInputValue); 
  }

  render() {
    return (
        <div>
          <h1> {this.props.loggedInStatus} </h1> 
          <input type="text" id="logInInput"/>
          <button onClick={this.onSubmit}> Log In </button> 
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);