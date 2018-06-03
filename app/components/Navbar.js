import React from 'react';
import Search from './Search';
import {Link} from 'react-router-dom';

const Navbar = () => {
		return(
			<div className="navbar">
				<Link to='/'><h1 className="title">Weather App</h1></Link>
				<Search name="nav-search" placeholder="i.e. 77535"/>
			</div>
		)
}

module.exports = Navbar;