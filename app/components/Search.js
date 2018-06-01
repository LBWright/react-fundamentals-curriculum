import React from 'react';
import getWeather from '../utils/api';

class Search extends React.Component{
	constructor(props){
		super(props)
		this.state =  {
			zipcode: '',
			weatherData: {},
		}
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInput(event){
		this.setState({zipcode: event.target.value});
	}
	handleSubmit(event){
		event.preventDefault();
		getWeather(this.state.zipcode)
		.then((data=>{
			console.log(data.data);
			this.setState({weatherData: data.data})
		}))
		
	}
	render(){
		return(
			<div >
				<form className={this.props.name} 
				onSubmit={this.handleSubmit}>
					<input 
						className="input-field" 
						value={this.state.zipcode} 
						placeholder={this.props.placeholder} 
						onChange={this.handleInput}
					/>
					<button 
						className="btn">
						Search
					</button>
				</form>
			</div>
		)
	}
}

module.exports = Search;