import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { TweenMax, TimelineMax } from 'gsap';

import $ from '../lib/jquery-with-plugins';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
// require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

import hero from '../images/55Aug01-2016.jpg';
import hero2 from '../images/439Aug01-2016.jpg';
import hero3 from '../images/227Aug01-2016.jpg';

import Divider from '../components/shared/Divider';
import ParallaxImg from '../components/shared/ParallaxImg';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showHotelModal: false
		}
	}
	componentDidMount() {
		window.addEventListener("load", function () {
			this.initScenes();
		}.bind(this));

		window.addEventListener("load", function () {
			this.$img = $("img.responsify-me").not('[data-responsify-initialized]');

			this.$img.responsify();

			// Flag the element, so we don't initialize it twice.
			this.$img.attr("data-responsify-initialized", "true");

			// TODO: Quick fix -DP
			setTimeout(function () {
				this.$img.responsify();
			}, 20);

			// When window is resizing...
			window.addEventListener('resize', function () {
				// Retrigger responsify.js
				this.$img.responsify();
			});
		});
	}

	componentWillUnmount() {
		console.log("------componentWillUnmount");
		console.log("------controller: ", this.controller);
	}

	render() {
		return (
			<div className="route route-home">
				<ParallaxImg img={hero} textAlign={'bottom'} focus={{
					"left": "0.38",
					"top": "0.28",
					"right": "0.65",
					"bottom": "1.01"
				}} id="hero">
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

				<ParallaxImg id="fountain" img={hero2} focus={{
					 left:"0.57",
					 top:"0.00",
					 right:"0.90",
					 bottom:"0.99"
				}}></ParallaxImg>

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

				<section className="container component-content-band constrained component-accommodations" id="accommodations">
					<div className="row">
						<div className="col-xs-12 col-md-6 col-md-offset-3">
							<h2>Accommodations</h2>

							<p>Group rates are available at the Courtyard Marriott and the Doubletree Hilton. Both are located within a few minutes of the wedding location.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-6">
							<a href="#" className="component-hoverable-block" onClick={this.handleHotelClick.bind(this)} data-hotel-name='courtyard'>
								<span className="img-container">
									<img className="img-responsive" src={require('../images/courtyard.jpeg')} />
								</span>
								<h3>Courtyard Marriott</h3>
							</a>
						</div>
						<div className="col-xs-6">
							<a href="#" className="component-hoverable-block" onClick={this.handleHotelClick.bind(this)} data-hotel-name='doubletree'>
								<span className="img-container">
									<img className="img-responsive" src={require('../images/doubletree.jpeg')} />
								</span>
								<h3>Doubletree Hilton</h3>
							</a>
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

				<ParallaxImg id="bye" img={hero3} focus={{
						 left: "0.34",
						 top: "0.00",
						 right: "0.84",
						 bottom: "1.00"
					}}>
					<h3>SEE YOU AT THE WEDDING!</h3>
				</ParallaxImg>

				<Modal show={this.state.showHotelModal === 'courtyard'} onHide={this.hideHotelModal.bind(this)}>
		          <Modal.Header closeButton>
		            <Modal.Title>Courtyard Marriott, Norwalk</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		            <h4>Courtyard Marriott, Norwalk</h4>

					<img className="img-responsive" src={require('../images/courtyard.jpeg')} />

		            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>


		            <hr />

		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={this.hideHotelModal.bind(this)}>Close</Button>
		          </Modal.Footer>
		        </Modal>

				<Modal show={this.state.showHotelModal === 'doubletree'} onHide={this.hideHotelModal.bind(this)}>
		          <Modal.Header closeButton>
		            <Modal.Title>Doubletree Hilton, Norwalk</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		            <h4>Doubletree Hilton, Norwalk</h4>

					<img className="img-responsive" src={require('../images/doubletree.jpeg')} />

		            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>


		            <hr />

		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={this.hideHotelModal.bind(this)}>Close</Button>
		          </Modal.Footer>
		        </Modal>

			</div>
		);
	}

	showHotelModal(name) {
		this.setState({
			showHotelModal: name
		})
	}

	hideHotelModal() {
		this.setState({
		 	showHotelModal: false
		})
	}

	handleHotelClick(e) {
		e.preventDefault();

		let hotelName = e.currentTarget.attributes['data-hotel-name'].value;

		this.showHotelModal(hotelName);
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
		let hero = document.getElementById('hero');
		new ScrollMagic.Scene({
			triggerElement: hero, // trigger CSS animation when header is in the middle of the viewport
		})
		.setClassToggle(hero, 'is-active') // set class to active slide
		.addTo(this.controller);

		let bye = document.getElementById('bye');
		new ScrollMagic.Scene({
			triggerElement: bye
		})
		.setClassToggle(bye, 'is-active')
		.addTo(this.controller)


		// change behaviour of controller to animate scroll instead of jump
		this.controller.scrollTo(function (newpos) {
			TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
		});

		// 2 column images will fade in from sides
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
