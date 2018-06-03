import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './Search';
import Home from './Home';
import Navbar from './Navbar';
import Forecast from './Forecast';

class App extends React.Component{
	render(){
		return(
			<Router>
				<div className="container">
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/forecast' component={Forecast} />
					</Switch>
				</div> 
			</Router>
		)
	}
}

module.exports = App;