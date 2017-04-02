import React, { PropTypes } from 'react';
import { TweenMax, TimelineMax } from 'gsap';
import Utils from '../../lib/Utils';

var ScrollMagic = require('scrollmagic/scrollmagic/uncompressed/ScrollMagic');
// require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

class ParallaxImg extends React.Component {
	render() {
		// let focus = {
		// 	"data-focus-left": "0.38",
		// 	"data-focus-top": "0.28",
		// 	"data-focus-right": "0.65",
		// 	"data-focus-bottom": "1.01"
		// }
		// 
		// let focus = Utils.focusParams()
		let focusParams = (this.props.focus ? Utils.focusParams(this.props.focus) : {})

		return (
			<section className="container-fluid component-hero parallax-img">
				<div className="bg">
					<img src={this.props.img}
						 className="responsify-me"
						 {...focusParams}
					/>
				</div>

				<div className="inner">
					<div className="hero-content">
						{this.props.children}
					</div>
				</div>
			</section>
		);
	}
}

ParallaxImg.propTypes = {
	img: PropTypes.string.isRequired,
	focus: PropTypes.object
}

export default ParallaxImg;
