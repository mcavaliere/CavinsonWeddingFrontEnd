import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { TweenMax, TimelineMax } from 'gsap';

var ScrollMagic = require('scrollmagic/scrollmagic/uncompressed/ScrollMagic');
// require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

import hero from '../images/55Aug01-2016.jpg';
import hero2 from '../images/439Aug01-2016.jpg';
import hero3 from '../images/15Aug01-2016.jpg';

import Divider from '../components/shared/Divider';
import ParallaxImg from '../components/shared/ParallaxImg';

class HomePage extends React.Component {
	componentDidMount() {
		document.addEventListener("DOMContentLoaded", function () {
			this.initScenes();
		}.bind(this));
	}

	componentWillUnmount() {
		console.warn("------componentWillUnmount");
		console.warn("------controller: ", this.controller);
	}

	render() {
		return (
			<div className="route route-home">
				<ParallaxImg img={hero}>
					<h1>Mike & Kelli's Wedding</h1>
					<h2>Sept 23, 2017</h2>
				</ParallaxImg>

				<section className="container-fluid component-content-band " id="sticky1">
					<div className="inner">
						<div className="row">
							<div className="col-xs-12 col-md-6 col-md-offset-3">
								<h2>These two kids are crazy about each other!</h2>

								<p>Come join us in the most special of occasions, as they tie the knot.</p>
							</div>
						</div>
					</div>
				</section>

				<ParallaxImg img={hero2}></ParallaxImg>

				<Divider>
					<i className="glyphicon glyphicon-calendar gi-2x"></i>
				</Divider>


				<section className="container component-content-band constrained" id="location">
					<div className="row">
						<div className="col-xs-12 col-md-6 col-md-offset-3">
							<h2>Date &amp; Location</h2>
						</div>
					</div>
					<div className="row table-row">
						<div className="col-xs-12 col-md-6">
							<address>
								Roton Point Association<br />
								15 Pine Point Rd, Norwalk, CT 06853<br />
								(203) 838-1606<br />
								<a href="http://rotonpoint.org" target="_blank">rotonpoint.org</a>
							</address>
						</div>
						<div className="col-xs-12 col-md-6">
							<a href="https://www.google.com/maps/place/Roton+Point+Association/@41.0568158,-73.4442258,16z/data=!4m5!3m4!1s0x89e81fb817dbc5d7:0x6b8f90972701a442!8m2!3d41.0568158!4d-73.4398484" target="_blank">
							<img src={require('../images/roton-pt-map.png')} className="img-responsive" />
							</a>
						</div>
					</div>
				</section>

				<Divider>
					<i className="glyphicon glyphicon-home gi-2x"></i>
				</Divider>

				<section className="container component-content-band constrained" id="accommodations">
					<div className="row">
						<div className="col-xs-12 col-md-6 col-md-offset-3">
							<h2>Accommodations</h2>

							<p>Group rates available at the [HOTEL NAME] hotel - XYZ rooms in total.</p>
						</div>
					</div>
				</section>

				<section className="container component-img-2-col">
					<div className="row">
						<div className="col-xs-12">
							<div className="row">
								<div className="col-xs-12 col-sm-4 col-sm-offset-1">
									<img src={require('../images/330Aug01-2016.jpg')} className="img-responsive img-left" />
								</div>
								<div className="col-xs-12 col-sm-7">
									<img src={require('../images/252Aug01-2016.jpg')} className="img-responsive img-right" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<Divider>
					<i className="glyphicon glyphicon-glass gi-2x"></i>
				</Divider>

				<section className="container component-content-band constrained" id="after-party">
					<div className="row">
						<div className="col-xs-12 col-md-6 col-md-offset-3">
							<h2>The After Party</h2>

							<p>Festivities will continue at Roton Point after the wedding, for those that wish to stay. You&#39;ll be invited to optionally share stories ("roast or toast") about either or both members of the happy couple. </p>
						</div>
					</div>
				</section>

				<Divider>
					<i className="glyphicon glyphicon-envelope gi-2x"></i>
				</Divider>

				<section className="container component-content-band constrained">
					<div className="row">
						<div className="col-xs-12 col-md-6 col-md-offset-3">
							<h2>RSVP</h2>

							<p>When the official invites are sent out, you'll be able to RSVP here on the official CavinsonWedding website.</p>

						{/*


							<p>Kindly confirm your RSVP by xx/xx/2017 using the link below. </p>

							<a href="javascript:void(0)" className="btn btn-default btn-cta">RSVP Now</a>
						*/}
						</div>
					</div>
				</section>

				<Divider>
					<i className="glyphicon glyphicon-gift gi-2x"></i>
				</Divider>

				<section className="container component-content-band constrained" id="registry">
					<div className="row">
						<div className="col-xs-12 col-md-6 col-md-offset-3">
							<h2>Our Registry</h2>

							<p>Buy us stuff! Or give money - either is appreciated, but of course your presence is most important!</p>
							<p>Our registry is conveniently hosted on Zola.com,
								so you won't have to lug a heavy bottle of aged scotch to Connecticut - unless you want to :)</p>

							<a href="https://www.zola.com/registry/cavinsonwedding" className="btn btn-default btn-cta" target="_blank">View our Registry</a>
						</div>
					</div>
				</section>





{/*
				<section className="container component-img-3-col">
					<div className="row">
						<div className="col-xs-12">
							<div className="row">
								<div className="col-xs-12 col-sm-4">
									<img src={require('../images/Jul_26_8_26_07_PM.jpeg')} className="img-responsive" />
								</div>
								<div className="col-xs-12 col-sm-4">
									<img src={require('../images/2016-08-02_20.27.31.jpg')} className="img-responsive" />
								</div>
								<div className="col-xs-12 col-sm-4">
									<img src={require('../images/2016-07-31_17.11.27.jpg')} className="img-responsive" />
								</div>
							</div>
							<div className="row">
								<div className="col-xs-12 col-sm-4">
									<img src={require('../images/2016-05-12_20.18.42.jpg')} className="img-responsive" />
								</div>
								<div className="col-xs-12 col-sm-4">
									<img src={require('../images/2016-04-30_19.12.00.jpg')} className="img-responsive" />
								</div>
								<div className="col-xs-12 col-sm-4">
									<img src={require('../images/Jul_26_8_26_07_PM.jpeg')} className="img-responsive" />
								</div>
							</div>
						</div>
					</div>
				</section>
*/}
{/*
				<section className="container-fluid component-content-band" id="sticky1">
					<div className="inner">
						<div className="row">
							<div className="col-xs-12 col-md-6 col-md-offset-3">
								<h2>Curabitur lobortis id lorem.</h2>

								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
							</div>
						</div>
					</div>
				</section>
*/}

				<ParallaxImg img={hero3}>
					<h3>SEE YOU AT THE WEDDING!</h3>
				</ParallaxImg>

			</div>
		);
	}

	initScenes() {
		this.controller = new ScrollMagic.Controller();
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
			.addTo(this.controller);
		}.bind(this));

		// Fade in the text content as we scroll to each large image.
		slides.forEach(function (slide, index) {
			// make scene
			var headerScene = new ScrollMagic.Scene({
				triggerElement: slide.querySelector('.hero-content'), // trigger CSS animation when header is in the middle of the viewport
				offset: -50 // offset triggers the animation 95 earlier then middle of the viewport, adjust to your liking
			})
			.setClassToggle(slide, 'is-active') // set class to active slide
			//.addIndicators() // add indicators (requires plugin), use for debugging
			.addTo(this.controller);
		}.bind(this));

		// change behaviour of controller to animate scroll instead of jump
		this.controller.scrollTo(function (newpos) {
			TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
		});

		let img2col = document.querySelectorAll('.component-img-2-col');
		let img2colImages = img2col[0].querySelectorAll('img');

		new ScrollMagic.Scene({
			triggerElement: img2col
		})
		.setClassToggle(img2col[0], 'is-active')
		.setClassToggle(img2col[1], 'is-active')
		.addTo(this.controller)
	}
}

export default HomePage;
