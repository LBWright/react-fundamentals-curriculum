import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './Search';
import Home from './Home';
import Navbar from './Navbar';
import Forecast from './Forecast';
import Daily from './Daily';

class App extends React.Component{
	render(){
		return(
			<Router>
				<div className="container">
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/forecast' component={Forecast} />
						<Route path="/forecast/daily" component={Daily} />
					</Switch>
				</div> 
			</Router>
		)
	}
}

module.exports = App;