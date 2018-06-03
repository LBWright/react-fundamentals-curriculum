import React from 'react';
import PropTypes from 'prop-types';
import getIcon from '../utils/icon'

class Weekly extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			city: props.weatherData.city.name,
			weatherArray: props.weatherData.list
		}
		this.getDaily = this.getDaily.bind(this);
		console.log(props.weatherData)
	}

	getDaily(fiveDayArray){
		return fiveDayArray.map(daily => {
			console.log(daily);
			console.log('temp:', daily.main.temp);
			return (
				<DailyGlance daily={daily} />
			)
		})
	}
	
	render(){
		return (
			<div>
				<ul>
					{this.getDaily(this.state.weatherArray)}
				</ul>
			</div>
		)
	}
	
}

const DailyGlance = (props) =>{
	let iconCode = props.daily.weather[0].icon;
	return (
		<li key={props.daily.dt}><img height="400" width="400" src={getIcon(iconCode)} alt="icon depicting current weather" /></li>
	)

}

module.exports = Weekly;