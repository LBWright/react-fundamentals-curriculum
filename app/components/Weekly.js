import React from 'react';
import PropTypes from 'prop-types';
import getIcon from '../utils/icon';
import { Link } from 'react-router-dom';

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
			return (
				<DailyGlance daily={daily} />
			)
		})
	}
	
	render(){
		return (
			<div>
				<ul className="weather-list">
					{this.getDaily(this.state.weatherArray)}
				</ul>
			</div>
		)
	}
	
}

const DailyGlance = (props) =>{
	let iconCode = props.daily.weather[0].icon;
	let displayedIcon = getIcon(iconCode);
	return (
		<div>
			<Link to={{
				pathname: '/forecast/daily',
				state: {
					daily: props.daily,
					icon: displayedIcon
				}			
			}}>
				<li key={props.daily.dt}>
					<img height="250" width="250" src={displayedIcon} alt="icon depicting current weather" />
				</li>
			</Link>
		</div>
	)
}

module.exports = Weekly;