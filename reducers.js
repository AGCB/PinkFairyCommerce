import actionTypes from "./actionTypes.js";

let initialState = {
	loggedInStatus: "HI",
	products:{
		1:{
			price: 39.99,
			quantity: 0, 
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Ratio-Eight-Three-Quarter-Silver-Poly-Tank-300x300.jpg"
		}, 
		2:{
			price: 49.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Ratio-Eight-Three-Quarter-Cobalt-Poly-Tank-300x300.jpg"
		},
		3:{
			price: 29.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Package-Ratio-Thermal-Carafe-Dripper-Black-Brushed-300x300.jpg"
		},
		4:{
			price: 19.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/Thermal-Carafe-Profile-Brushed-Stainless-300x300.jpg"
		},
		5:{
			price: 69.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/p-2466-baratza_encore_2-300x300.jpg"
		},
		6:{
			price: 49.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/able-kone-top-gray-300x300.jpg"
		},
		7:{
			price: 79.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/ratio-carafe-300x300.jpg"
		},
		8:{
			price: 109.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/p-1878-jennings-scale-300x300.jpg"
		},
		9:{
			price: 129.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/p-344-baratza-virtuoso-thumb-300x300.jpg"
		}
	},
	checkout: {
		
	}
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