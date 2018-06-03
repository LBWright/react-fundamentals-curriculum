import React from 'react';
import Search from './Search';

const Home = () => {
		return(
			<div className="content-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
				<h1 className="header">Search by ZipCode</h1>
				<Search name="main-search" placeholder="i.e. 77535"/>
			</div>
		)					
}

module.exports = Home;