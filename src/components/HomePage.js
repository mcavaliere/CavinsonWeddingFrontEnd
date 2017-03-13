import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import {TweenMax, TimelineMax} from 'gsap';

var ScrollMagic = require('scrollmagic/scrollmagic/uncompressed/ScrollMagic');
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

import hero from '../images/134Aug01-2016.jpg';
import hero2 from '../images/439Aug01-2016.jpg';
import hero3 from '../images/15Aug01-2016.jpg';

class HomePage extends React.Component {
	componentDidMount() {
		let controller = new ScrollMagic.Controller();
		let slides = document.querySelectorAll(".parallax-img");

		// Parallax background image effect when scrolling.
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

		// Fade in the text content as we scroll to each large image.
		slides.forEach(function (slide, index) {
		    // make scene
		    var headerScene = new ScrollMagic.Scene({
		        triggerElement: slide.querySelector('.hero-content'), // trigger CSS animation when header is in the middle of the viewport
		        offset: -50 // offset triggers the animation 95 earlier then middle of the viewport, adjust to your liking
		    })
		    .setClassToggle(slide, 'is-active') // set class to active slide
		    //.addIndicators() // add indicators (requires plugin), use for debugging
		    .addTo(controller);
		});

		// change behaviour of controller to animate scroll instead of jump
		controller.scrollTo(function (newpos) {
		    TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
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
						<div className="row">
							<div className="col-xs-12 col-md-6 col-md-offset-3">
								<h2>Curabitur lobortis id lorem. </h2>

								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
							</div>
						</div>
					</div>
				</section>
				<section className="container-fluid component-hero parallax-img">
					<div className="bg" style={{ backgroundImage: `url(${hero2})` }} />
					<div className="inner">

					<div className="hero-content">
						<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
						<h2>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
					</div>

					</div>
				</section>
				<section className="container-fluid component-img-2-col">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-sm-offset-3">
							<div className="row">
								<div className="col-xs-12 col-sm-6">
									<img src={require('../images/330Aug01-2016.jpg')} className="img-responsive" />
								</div>
								<div className="col-xs-12 col-sm-6">
									<img src={require('../images/252Aug01-2016.jpg')} className="img-responsive" />
								</div>
							</div>
						</div>

					</div>
				</section>

				<section className="container-fluid component-content-band" id="sticky1">
					<div className="inner">
						<div className="row">
							<div className="col-xs-12 col-md-6 col-md-offset-3">
								<h2>Curabitur lobortis id lorem. </h2>

								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
							</div>
						</div>
					</div>
				</section>
				<section className="container-fluid component-hero parallax-img">
					<div className="bg" style={{ backgroundImage: `url(${hero3})` }} />
					<div className="inner">
						<div className="hero-content">
							<h1>Lorem ipsum dolor sit amet.</h1>
							<h2>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default HomePage;
