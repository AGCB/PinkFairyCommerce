console.log("Inside app.js: Line 1");
import React from "react"; 
import ReactDom from "react-dom"; 
import {Provider} from "react-redux";
import BrowserRouter from "react-router"; 
// import Main from relevant file ******************** 
console.log("Inside app.js: Line 7");

ReactDom.render(
	<Provider store={store}>
		{console.log("Inside app.js: Line 11")}
		<BrowserRouter>
			{/* <div> */}
				<Route path ="/" component = {Main} /> 
			{/* </div> */}
		</BrowserRouter>
	</Provider>, 
	document.getElementById("app");
);