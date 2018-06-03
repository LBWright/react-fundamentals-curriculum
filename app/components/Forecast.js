import React from 'react';
import api from '../utils/api';
import queryString from 'query-string';
import Weekly from './Weekly';

class Forecast extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			weather : null,
			zipcode: props.location.state.search
		}
	}
	componentDidMount() {
		console.log('Logging Props:', this.props);
		api.getWeather(this.state.zipcode)
		.then((weather=>{
			//console.log(weather.data);
			this.setState({weather: weather.data})
		})).catch(error => {
			console.log(error);
		})
	}
	render() {
		return(
			<div>
				{!this.state.weather ?
				<p>Loading...</p> :
				<Weekly weatherData={this.state.weather}/>
				}
			</div>
		);
	}
}

module.exports = Forecast;