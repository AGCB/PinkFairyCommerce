import React, {Component} from "react";
import Card from "./card.js";

const mapStateToProps = store => ({
	cardContainer: store.products
});

const mapDispatchInProps = dispatch => ({
	
});

class CardContainer extends Component{
	constructor(){
		
	}

render(){
	return (
		<div> 
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	)
}


}