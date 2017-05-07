import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Checkbox, Col, ControlLabel, Form, FormGroup, FormControl, HelpBlock, Modal, Radio } from 'react-bootstrap';
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
import RsvpModal from '../components/RsvpModal';

import * as rsvpActions from '../actions/rsvpActions';

import humps from 'humps';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showHotelModal: false,
			showRsvpModal: false
		}
	}
	componentDidMount() {
		window.addEventListener("load", function () {
			this.initScenes();
			this.initResponsify();
			this.initMenuScroll();
		}.bind(this));
	}

	componentWillUnmount() {
		console.log("------componentWillUnmount");
		console.log("------controller: ", this.controller);
	}

	render() {
		return (
			<div className="route route-home">
				<ParallaxImg img={hero} textAlign={'top'} focus={{
					"left": "0.38",
					"top": "0.28",
					"right": "0.65",
					"bottom": "1.01"
				}} id="hero">
					<h1>Mike & Kelli's Wedding</h1>
					<h2>Sept 23, 2017</h2>
				</ParallaxImg>

				<section className="container-fluid component-content-band parallax-content" id="sticky1">
					<div className="inner">
						<div className="row">
							<div className="col-xs-12 col-md-6 col-md-offset-3">
								<h2>These two kids are crazy about each other!</h2>

								<p>Come join them in the most special of occasions as they tie the knot.</p>
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


				<section className="container component-content-band component-date-location constrained" id="location">
					<div className="row">
						<div className="col-xs-12 col-md-6 col-md-offset-3">
							<h2>Date &amp; Location</h2>
						</div>
					</div>
					<div className="row table-row">
						<div className="col-xs-12 col-md-6">
							<div className="date">
								<div><b>September 23rd, 2017</b></div>
								<div>Ceremony at 12:30pm</div>
								<div>Brunch reception shortly thereafter</div>
							</div>
							<address>
								<b>Roton Point Association</b><br />
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

							<p>Group rates are available at the Courtyard Marriott and the Doubletree Hilton. Both are located within a few minutes drive of the wedding location.</p>


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

				<Divider>
					<i className="glyphicon glyphicon-cutlery gi-2x"></i>
				</Divider>

				<section className="container component-content-band constrained" id="welcome-dinner">
					<div className="row">
						<div className="col-xs-12 col-md-6 col-md-offset-3">
							<h2>Welcome Dinner</h2>

							<p>You're invited to come join us after wedding rehearsal on the evening of <b>Friday, September 22nd</b> at Roton Point. </p>

							<p>When you RSVP for the wedding, please let us know if you'll be attending the welcome dinner as well. </p>

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

							<p>After the reception, there will be a few hours to go back to the hotel, put your feet up and take a disco nap.</p>

							<p>For those who want to continue the festivities, join us around 8pm for a casual after party at Roton Point. </p>

							<p>Guests will be invited to "roast or toast" Kelli or Mike. Bring your A game.  </p>
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

							<p>Our registry is conveniently hosted on Zola.com, so you won't have to lug a heavy bottle of aged scotch to Connecticut - unless you want to.</p>

							<a href="https://www.zola.com/registry/cavinsonwedding" className="btn btn-default btn-cta" target="_blank">View our Registry</a>
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
					<i className="glyphicon glyphicon-envelope gi-2x"></i>
				</Divider>

				<section className="container component-content-band constrained" id="rsvp">
					<div className="row">
						<div className="col-xs-12 col-md-6 col-md-offset-3">
							<h2>RSVP</h2>


							<p>Kindly confirm your RSVP by xx/xx/2017 using the link below. </p>

							<a id="rsvp-link" href="#" className="btn btn-default btn-cta" onClick={this.showRsvpModal.bind(this)}>RSVP Now</a>

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


				<ParallaxImg id="bye" img={hero3} focus={{
						 left: "0.34",
						 top: "0.00",
						 right: "0.84",
						 bottom: "1.00"
					}}>
					<h3>SEE YOU AT THE WEDDING!</h3>
				</ParallaxImg>

				<Modal dialogClassName="component-hotel-modal" show={this.state.showHotelModal === 'courtyard'} onHide={this.hideHotelModal.bind(this)}>
		          <Modal.Header closeButton>
		            <Modal.Title>Courtyard by Marriott, Norwalk</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
					<img className="img-responsive" src={require('../images/courtyard.jpeg')} />

		            <table className="table table-bordered">
						<tbody>
							<tr>
								<th colSpan="2" className="active">Group Rates for Cavaliere / Robinson Wedding</th>
							</tr>
							<tr>
								<th>1 King Bed</th>
								<td>$105 per room/night</td>
							</tr>
							<tr>
								<th>2 Queen Beds</th>
								<td>$120 per room/night</td>
							</tr>
							<tr>
								<th>Cutoff Date</th>
								<td>September 1st</td>
							</tr>
							<tr>
								<th>Distance to Wedding</th>
								<td>9 miles</td>
							</tr>

							<tr>
								<th>Full Hotel Details</th>
								<td>
									<Button bsStyle="info" href="https://hiskipper.com/hotels/Courtyard-by-Marriott-Norwalk-119065" target="_blank">
										View
									</Button>
								</td>
							</tr>
						</tbody>
		            </table>


		            <hr />

		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={this.hideHotelModal.bind(this)}>Close</Button>
		          </Modal.Footer>
		        </Modal>

				<Modal dialogClassName="component-hotel-modal" show={this.state.showHotelModal === 'doubletree'} onHide={this.hideHotelModal.bind(this)}>
		          <Modal.Header closeButton>
		            <Modal.Title>Doubletree Hilton, Norwalk</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
					<img className="img-responsive" src={require('../images/doubletree.jpeg')} />

						<table className="table table-bordered">
							<tbody>
								<tr>
									<th colSpan="2" className="active">Group Rates for Cavaliere / Robinson Wedding</th>
								</tr>
								<tr>
									<th>1 King Bed</th>
									<td>$99 per room/night</td>
								</tr>
								<tr>
									<th>2 Queen Beds</th>
									<td>$99 per room/night</td>
								</tr>
								<tr>
									<th>Cutoff Date</th>
									<td>August 22nd</td>
								</tr>
								<tr>
									<th>Distance to Wedding</th>
									<td>3.3 miles</td>
								</tr>

								<tr>
									<th>Full Hotel Details</th>
									<td>
										<Button bsStyle="info" href="https://hiskipper.com/hotels/DoubleTree-by-Hilton-Norwalk-108291" target="_blank">
											View
										</Button>
									</td>
								</tr>
							</tbody>
			            </table>
		            <hr />

		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={this.hideHotelModal.bind(this)}>Close</Button>
		          </Modal.Footer>
		        </Modal>

				<RsvpModal
					show={this.state.showRsvpModal}
					rsvps={this.props.rsvps}
					onSubmit={this.handleRsvpSubmit.bind(this)}
					onClose={this.handleRsvpModalClose.bind(this)}
				/>
			</div>
		);
	}

	showHotelModal(name) {
		this.setState({
			showHotelModal: name
		})
	}

	showRsvpModal(e) {
		e.preventDefault();

		this.setState({
			showRsvpModal: true
		})
	}

	handleRsvpModalClose() {
		this.setState({
			showRsvpModal: false
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

	handleRsvpSubmit(rsvp) {
		var cleanedRsvp = this.preprocessRsvp(rsvp);
		this.props.rsvpActions.create(humps.decamelizeKeys(cleanedRsvp));
	}

	initMenuScroll() {
		this.mainNav = document.getElementById('main-nav');

		window.addEventListener('scroll', function () {
			if (window.scrollY > 200) {
				this.mainNav.classList.add('scrolled');
			} else {
				this.mainNav.classList.remove('scrolled');
			}
		}.bind(this));
	}

	initResponsify() {
		this.$img = $("img.responsify-me").not('[data-responsify-initialized]');

		this.$img.responsify();

		// Flag the element, so we don't initialize it twice.
		this.$img.attr("data-responsify-initialized", "true");

		// TODO: Quick fix -DP
		setTimeout(function () {
			this.$img.responsify();
		}.bind(this), 20);

		// When window is resizing...
		window.addEventListener('resize', function () {
			// Retrigger responsify.js
			this.$img.responsify();
		}.bind(this));
	}

	initScenes() {
		this.controller = new ScrollMagic.Controller();
		let slides = document.querySelectorAll(".parallax-img");
		let bands = document.querySelectorAll(".parallax-content");

		// Parallax background image effect when scrolling.
		slides.forEach(function (slide, index) {
			var $bg = slide.querySelector('.bg');

			var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement: slide,
				triggerHook: 1,
				duration: "100%"
			})
			.setTween(TweenMax.from($bg, 1, {y: '-40%', ease:Power0.easeNone}))
			.addTo(this.controller);
		}.bind(this));

		// bands.forEach((band, i) => {
		// 	var scene = new ScrollMagic.Scene({
		// 		triggerElement: band,
		// 		triggerHook: 1,
		// 		duration: "100%"
		// 	})
		// 	.setTween(TweenMax.to(band, 1, {y: '-40%', ease: Power0.easeNone}))
		// 	.addTo(this.controller);
		// })

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
		.addTo(this.controller)
	}

	preprocessRsvp(rsvp) {
		// Make a copy.
		var newRsvp = JSON.parse(JSON.stringify(rsvp));

		// Remove any people without first or last names.
		if (newRsvp.people_attributes.length > 1) {
			for (let i=newRsvp.people_attributes.length; i>=1; i--) {
				if (!newRsvp.people_attributes.firstName && !newRsvp.people_attributes.lastName) {
					newRsvp.people_attributes.pop();
				}
			}
		}

		return newRsvp;
	}

}

function mapStateToProps(state, ownProps) {
	return {
		rsvps: state.rsvps
	}
}

function mapDispatchToProps(dispatch) {
	return {
		rsvpActions: bindActionCreators(rsvpActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
