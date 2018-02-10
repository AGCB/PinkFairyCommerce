import React, {Component} from "react";
import Card from "./card.js";
import {connect} from "react-redux";
import actionCreator from "./actionCreator.js";

const mapStateToProps = store => ({
	cardContainer: store.products
});

const mapDispatchInProps = dispatch => ({
	incrementQuantity: (id)=>{ console.log("Inside cardcontainer line 11"); dispatch(actionCreator.incrementQuantity(id)); }
});

class CardContainer extends Component{
	constructor(){
		super();
		this.onClick = this.onClick.bind(this);
	}

onClick(id){
	console.log("Inside carcontainer.js line 21");
	this.props.incrementQuantity(id);
}

render(){
	let arrayOfCard = [];
	for(let cardIndex in this.props.cardContainer){
		arrayOfCard.push(<Card onClick={this.onClick} key={cardIndex} id={cardIndex} price={this.props.cardContainer[cardIndex].price} quantity={this.props.cardContainer[cardIndex].quantity} src={this.props.cardContainer[cardIndex].src}/>); 
	}

	return (
		<div> 
			{arrayOfCard}
		</div>
	)
}


}

export default connect(mapStateToProps, mapDispatchInProps)(CardContainer);