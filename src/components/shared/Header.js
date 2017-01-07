import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Meet The Cavinsons</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<LinkContainer to="/about">
						<NavItem eventKey={2}>About</NavItem>
					</LinkContainer>
					<LinkContainer to="/location">
						<NavItem eventKey={3}>Location</NavItem>
					</LinkContainer>
					<LinkContainer to="/guestbook">
						<NavItem eventKey={4}>Guestbook</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		);
	}
}



export default Header;
