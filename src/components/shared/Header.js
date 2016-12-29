import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
	render() {
		return (
			<header>
				<Link to="/home">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/location">Location</Link>
			</header>
		);
	}
}



export default Header;
