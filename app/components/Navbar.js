import React from 'react';
import Search from './Search';

const Navbar = () => {
		return(
			<div className="navbar">
				<h1 className="title">Weather App</h1>
				<Search name="nav-search" placeholder="i.e. 77535"/>
			</div>
		)
}

module.exports = Navbar;