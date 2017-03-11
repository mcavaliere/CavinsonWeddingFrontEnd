import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
	render() {
		return (
			<Navbar staticTop={true} toggleNavKey={1}>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">#CavinsonsGetHitched</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
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
				</Navbar.Collapse>
			</Navbar>
		);
	}
}



export default Header;
