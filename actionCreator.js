import actionTypes from "./actionTypes.js";
// logInObj should contain two propeties: username and password
function logIn(logInStatus){
	return {type: actionTypes.LOG_IN, payload:logInStatus}
}

export default {logIn}; 