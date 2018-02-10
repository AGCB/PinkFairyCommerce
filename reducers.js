import actionTypes from "./actionTypes.js";

function getInitialState(){
	return {
		loggedInStatus: "HI",
		products:[
		{
			price: 39.99,
			quantity: 0, 
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Ratio-Eight-Three-Quarter-Silver-Poly-Tank-300x300.jpg"
		}, 
		{
			price: 49.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Ratio-Eight-Three-Quarter-Cobalt-Poly-Tank-300x300.jpg"
		},
		{
			price: 29.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Package-Ratio-Thermal-Carafe-Dripper-Black-Brushed-300x300.jpg"
		},
		{
			price: 19.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/Thermal-Carafe-Profile-Brushed-Stainless-300x300.jpg"
		},
		{
			price: 69.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/p-2466-baratza_encore_2-300x300.jpg"
		},
		{
			price: 49.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/able-kone-top-gray-300x300.jpg"
		},
		{
			price: 79.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/ratio-carafe-300x300.jpg"
		},
		{
			price: 109.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/p-1878-jennings-scale-300x300.jpg"
		},
		{
			price: 129.99,
			quantity: 0,
			src: "https://19wzwz1i4unl15n0ux1rqxbb-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/p-344-baratza-virtuoso-thumb-300x300.jpg"
		}
		]
	}
}

const initialState = getInitialState();

const reducers = (state=initialState, action) => {
	console.log("!!!!!!!Init State", initialState.products);
	switch(action.type){
		case actionTypes.LOG_IN:{
			let newState = Object.assign({}, state, {loggedInStatus: action.payload});
			return newState; 
			}	
			break; 
		case actionTypes.INCREMENT_QUANTITY:{
			//console.log("Action Types Initial State: ", initialState.products);
			let newProductsArr = state.products.slice(); 
			newProductsArr[action.payload].quantity++; 
			let newState = Object.assign({}, state, {products:newProductsArr});
			console.log()
			return newState;
			}
			break;
		case actionTypes.CHECKOUT:{
			let newState = JSON.parse(JSON.stringify(state)); 
			newState.products.forEach(function(item){
				item.quantity=0;
			});
			return newState; 
			}
		break; 

		default:
			return state; 
	}
}

export default reducers; 