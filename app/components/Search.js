import React from 'react';

class Search extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className={this.props.name}>
				<input className="input-field" placeholder={this.props.placeholder}/>
				<button className="btn">Search</button>
			</div>
		)
	}
}

module.exports = Search;