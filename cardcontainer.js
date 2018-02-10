import React, {Component} from "react";
import Card from "./card.js";
import {connect} from "react-redux";

const mapStateToProps = store => ({
	cardContainer: store.products
});

const mapDispatchInProps = dispatch => ({

});

class CardContainer extends Component{
	constructor(){
		super();
		this.onClick = this.onClick.bind(this);
	}

onClick(id){
	
	console.log(id);
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