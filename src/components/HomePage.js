import React from 'react';
import { Jumbotron } from 'react-bootstrap';





// import TimelineMax from 'TimelineMax';
// import TweenMax from 'TweenMax';
import {TweenMax, TimelineMax} from 'gsap';

var ScrollMagic = require('scrollmagic/scrollmagic/uncompressed/ScrollMagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
// console.warn("TweenMax: ", TweenMax);
// import {TweenMax} from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

import hero from '../images/134Aug01-2016.jpg';

import GlobalStyles from '../scss/main.scss'

import css from '../scss/routes/home.scss';

class HomePage extends React.Component {
	componentDidMount() {
		// init controller
		let controller = new ScrollMagic.Controller();
		//
		// create a scene
		// new ScrollMagic.Scene({
	    //     duration: 300,  // the scene should last for a scroll distance of 100px
	    //     offset: 300      // start this scene after scrolling for 50px
	    // })
	    // .setPin("#sticky1") // pins the element for the the scene's duration
	    // .addTo(controller); // assign the scene to the controller
		//
		// new ScrollMagic.Scene({
		// 	duration: 300,
		// 	offset: 800
		// })
		// .setPin("#sticky2")
		// .addTo(controller)

		// let slides = document.querySelectorAll("div.scene");
		//
		// slides.forEach(function (slide, index) {
		//     var container = slide.children[0];
		//
		// 	// console.warn("container: ", container);
		//
		//     var slideParallaxScene = new ScrollMagic.Scene({
		//         triggerElement: slide,
		//         triggerHook: 1,
		//         duration: "100%"
		//     })
		//     .setTween(TweenMax.from(container, 1, {y: '-40%', autoAlpha: 0.3, ease:Power0.easeNone}))
		//     .addTo(controller);
		// });
	}

	render() {
		return (
			<div className="route route-home">
				<div className="container-fluid component-hero">
					<img className="hero-image img-responsive" src={hero} />
					<div className="hero-content">
						<h1>Mike & Kelli's Wedding</h1>
						<p>Come join the Cavinsons as they tie the knot</p>
					</div>
				</div>
				<div className="container-fluid scene" id="sticky1">
					<Jumbotron>
						<h1>Scene Name 1</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
				<div className="container-fluid scene" id="sticky2">
					<Jumbotron>
						<h1>Scene Name 2</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
				<div className="container-fluid scene" id="sticky3">
					<Jumbotron>
						<h1>Scene Name 3</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
				<div className="container-fluid scene">
					<Jumbotron>
						<h1>Scene Name 4</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
				<div className="container-fluid scene">
					<Jumbotron>
						<h1>Scene Name 5</h1>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Jumbotron>
				</div>
			</div>
		);
	}
}

export default HomePage;
