import actionTypes from "./actionTypes.js";

function logIn(logInStatus){
	return {type: actionTypes.LOG_IN, payload:logInStatus}
}
function incrementQuantity(id){
	console.log("Inside actionCreator.js line 7");
	return {type: actionTypes.INCREMENT_QUANTITY, payload:id}
}
function checkout(){
	return {type: actionTypes.CHECKOUT}
}

export default {logIn, incrementQuantity, checkout}; 