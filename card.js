import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

let button = {
	borderRadius: "10px",
	width: "150px",
	background: "white"

}
const CardComp = (props) => {
	
	return (
		
		<Card>
			<h1> price: {props.price} </h1> 
			<h1> quantity: {props.quantity} </h1>
			<img src={props.src}/>
			<button onClick={()=>{props.onClick(props.id)}} style={button} type="text" id={props.id}> <h2>Add</h2> </button> 
		</Card> 
		
	);

};

export default CardComp;