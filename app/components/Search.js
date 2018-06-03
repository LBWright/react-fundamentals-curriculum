import React from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
//WOULD BE BETTER TO LINK TO A NEW COMPONENT AND MAKE AXIOS REQUEST COMPONENT MOUNT
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
					<Link
						to={{
							pathname: '/forecast',
							state: {
								search: + this.state.zipcode
							}
						}}
						className="btn">
						Search
					</Link>
				</form>
			</div>
		)
	}
}

module.exports = Search;