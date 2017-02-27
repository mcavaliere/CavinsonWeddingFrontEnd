import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ScrollMagic from 'scrollmagic';

import hero from '../images/134Aug01-2016.jpg';

class HomePage extends React.Component {
	componentDidMount() {
		// init controller
		let controller = new ScrollMagic.Controller();

		// create a scene
		new ScrollMagic.Scene({
	        duration: 300,  // the scene should last for a scroll distance of 100px
	        offset: 100      // start this scene after scrolling for 50px
	    })
	    .setPin("#sticky1") // pins the element for the the scene's duration
	    .addTo(controller); // assign the scene to the controller

		new ScrollMagic.Scene({
			duration: 300,
			offset: 500
		})
		.setPin("#sticky2")
		.addTo(controller)
	}

	render() {
		return (
			<div className="route route-home">
				<img className="hero-image" src={hero} />
				<div className="container-fluid">
					<Jumbotron>
						<h1>Site Title Here</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
				<div className="container-fluid" id="sticky1">
					<Jumbotron>
						<h1>Site Title Here</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
				<div className="container-fluid" id="sticky2">
					<Jumbotron>
						<h1>Site Title Here</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
				<div className="container-fluid">
					<Jumbotron>
						<h1>Site Title Here</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
				<div className="container-fluid">
					<Jumbotron>
						<h1>Site Title Here</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
				<div className="container-fluid">
					<Jumbotron>
						<h1>Site Title Here</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
			</div>
		);
	}
}

export default HomePage;
