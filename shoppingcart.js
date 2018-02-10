import React from "react";
import {connect} from "react-redux";
import Card from "./card.js";
import actionCreator from "./actionCreator.js";

let style4Total = {
	border: "1px solid blue",
	borderRadius: "10px"
}
const mapPropToState = store => ({
	productsArray: store.products	
})
const mapDispatchToState = dispatch => ({
	checkout: ()=>{
		// go through products array inside initial state and reset all quantities back to zero
		console.log("Inside on checkout");
		dispatch(actionCreator.checkout()); 
	}
});

class ShoppingCart extends React.Component {
  
  constructor(){
  	super(); 
  	this.onCheckout = this.onCheckout.bind(this);
  }

  onCheckout(){
  	console.log("Inside onCheckout");
  	this.props.checkout(); 
  }	

  render() {
  	let incrementedItems = this.props.productsArray.filter((product) => product.quantity > 0);
  	let arrayOfCards = incrementedItems.map((item, index)=>{
  		return <Card key={index} price={item.price} quantity={item.quantity} src={item.src} /> 
  	});
  	let totalPrice = incrementedItems.reduce( (acc, product)=>{
  		return acc += (product.price*product.quantity); 
  	}, 0);

    return (
        <div>
          {arrayOfCards}
          <div style={style4Total}> 
          	<h2> Total Price: </h2> <h2> {(totalPrice).toFixed(2)} </h2>  
          </div>
          <button type="button" onClick={this.onCheckout} > CheckOut </button>
        </div>
    )
  }
}

export default connect(mapPropToState, mapDispatchToState)(ShoppingCart); 