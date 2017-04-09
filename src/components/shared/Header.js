import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import smoothScroll from '../../../node_modules/smoothscroll';
import Hamburger from './Hamburger';
import AppConstants from '../../lib/Constants';

class Header extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		var internal = document.querySelectorAll('#main-nav a[href^="#"]:not([href="#"])'), a;
	    for(var i=internal.length; a=internal[--i];){
	        a.addEventListener("click", this.linkHandler, false);
	    }
	}

	componentWillUnmount() {
		var internal = document.querySelectorAll('#main-nav a[href^="#"]:not([href="#"])'), a;
	    for(var i=internal.length; a=internal[--i];){
	        a.removeEventListener("click", this.linkHandler, false);
	    }
	}

	render() {
		let navItems = Object.keys(AppConstants.NAV_MENU_ITEMS).map((key, i) => {
			return <NavItem href={key} eventKey={i}>{ AppConstants.NAV_MENU_ITEMS[key] }</NavItem>
		});

		return (
			<Navbar staticTop={true} toggleNavKey={1} id="main-nav">
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="#app">#CavinsonsGetHitched</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						{navItems}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

	linkHandler(e) {
		e.preventDefault();

	    if (location.hash !== this.hash) {
			window.history.pushState(null, null, this.hash)
		}
	    // using the history api to solve issue #1 - back doesn't work
	    // most browser don't update :target when the history api is used:
	    // THIS IS A BUG FROM THE BROWSERS.
	    // change the scrolling duration in this call
	    var node = document.getElementById(this.hash.substring(1))

		console.log("checking node: ", node);

	    if(!node) {
			console.warn("node doesn't exist!");
			return;
		}; // Do not scroll to non-existing node

	    smoothScroll(node, 500, function(el) {
	        location.replace('#' + el.id)
	        // this will cause the :target to be activated.
	    });
	}
}



export default Header;
