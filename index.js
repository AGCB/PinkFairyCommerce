import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app.js";
import {BrowserRouter} from "react-router-dom"; 
import {Provider} from "react-redux";
import store  from "./store.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			 <MuiThemeProvider>
    			<App/>
    		 </MuiThemeProvider>	
    	</BrowserRouter>
    </Provider>,
    document.getElementById('app')
)