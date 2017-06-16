import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

	return(
		<ul className="header__navbar">
			<li>
				<NavLink exact activeClassName="active" to="/" >
					Home
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName="active" to="/battle">
					Battle
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName="active" to="/popular">
					Popular
				</NavLink>
			</li>
		</ul>
	)
};

export default NavBar;
