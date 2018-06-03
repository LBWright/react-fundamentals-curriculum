import React from 'react';
import {Link} from 'react-router-dom';
import Weekly from './Weekly'

class Daily extends React.Component{
	constructor(props){
		super(props)
		console.log('daily props', props)
		this.state = {
			weather: props.location.state.daily,
			icon: props.location.state.icon
		}
		console.log('this.state:', this.state)
	}
	render(){
		let weather = this.state.weather
		return(
			<div>
				<div className="daily-container">
				<img height="400" width="400" src={this.state.icon} alt="daily weather image" />
					<h5>Date: {weather.dt_txt}</h5>
					<h3>Temperature: {Math.round(weather.main.temp * 9/5 - 459.67)}F</h3>
					<h3>Weather: {weather.weather[0].description}</h3>
					<h3>Humidity: {weather.main.humidity}</h3>
					<Link className="btn" to='/forecast'>5-day</Link>
				</div>
			</div>
		)
	}
}

module.exports = Daily;