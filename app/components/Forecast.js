import React from 'react';
import api from '../utils/api';
import queryString from 'query-string';

class Forecast extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			weather : {},
			zipcode: props.location.state.search
		}
	}

	componentDidMount() {
		console.log('Logging Props:', this.props);
		api.getWeather(this.state.zipcode)
		.then((weather=>{
			console.log(weather.data);
			this.setState({weather: weather.data})
		}))
	}
	render() {
		return(
			<div>
				<div>Zipcode: {this.state.zipcode}</div>
				<div>Weather: {JSON.stringify(this.state.weather)}</div>
			</div>
		);
	}
}

module.exports = Forecast;