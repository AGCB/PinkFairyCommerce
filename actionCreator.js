import actionTypes from "./actionTypes.js";

function logIn(logInStatus){
	return {type: actionTypes.LOG_IN, payload:logInStatus}
}

export default {logIn}; 