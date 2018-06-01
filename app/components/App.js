import React from 'react';
import Search from './Search';

class App extends React.Component{
	render(){
		return(
			<div className="container">
				<div className="navbar">
					<h1 className="title">Weather App</h1>
					<Search name="nav-search" placeholder="i.e. 77535"/>
				</div>
				<div className="content-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
					<h1 className="header">Search by ZipCode</h1>
					<Search name="main-search" placeholder="i.e. 77535"/>
				</div>
			</div> //container
		)
	}
}

module.exports = App;