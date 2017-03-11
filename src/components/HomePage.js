import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import {TweenMax, TimelineMax} from 'gsap';

var ScrollMagic = require('scrollmagic/scrollmagic/uncompressed/ScrollMagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

import hero from '../images/134Aug01-2016.jpg';

class HomePage extends React.Component {
	componentDidMount() {
		// init controller
		let controller = new ScrollMagic.Controller();
		let slides = document.querySelectorAll(".parallax-img");

		slides.forEach(function (slide, index) {
		    var $bcg = slide.querySelector('.bg');

		    var slideParallaxScene = new ScrollMagic.Scene({
		        triggerElement: slide,
		        triggerHook: 1,
		        duration: "100%"
		    })
		    .setTween(TweenMax.from($bcg, 1, {y: '-40%', ease:Power0.easeNone}))
		    .addTo(controller);
		});
	}

	render() {


		return (
			<div className="route route-home">
				<section className="container-fluid component-hero parallax-img">
					<div className="bg" style={{ backgroundImage: `url(${hero})` }} />
					<div className="inner">

					<div className="hero-content">
						<h1>Mike & Kelli's Wedding</h1>
						<h2>Sept 23, 2017</h2>
					</div>

					</div>
				</section>
				<section className="container-fluid component-content-band" id="sticky1">
					<div className="inner">
						<h2>Curabitur lobortis id lorem. </h2>

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. </p>
					</div>
				</section>
				<section className="container-fluid component-hero parallax-img">
					<div className="bg" style={{ backgroundImage: `url(${hero})` }} />
					<div className="inner">

					<div className="hero-content">
						<h1>Mike & Kelli's Wedding</h1>
						<h2>Sept 23, 2017</h2>
					</div>

					</div>
				</section>
			</div>
		);
	}
}

export default HomePage;
