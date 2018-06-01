import React from 'react';
import Search from './Search';

class App extends React.Component{
	render(){
		return(
			<div className="container">
				<div className="navbar">
					<h1 className="title">Weather App</h1>
					<Search name="nav-search" placeholder="Houston, Texas"/>
				</div>
				<div className="content-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
					<h1 className="header">Enter a City and State</h1>
					<Search name="main-search" placeholder="Houston, Texas"/>
				</div>
			</div> //container
		)
	}
}

module.exports = App;