import actionTypes from "./actionTypes.js";

let initialState = {
	loggedInStatus: "HI"
}


const reducers = (state=initialState, action) => {
	switch(action.type){
		case actionTypes.LOG_IN:  
			let newState = Object.assign({}, state, {loggedInStatus: action.payload});
			return newState; 
		default: 
			return state; 
	}
}

export default reducers; 