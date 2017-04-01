import React from 'react';
import {TweenMax, TimelineMax} from 'gsap';

var ScrollMagic = require('scrollmagic/scrollmagic/uncompressed/ScrollMagic');
// require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

class ParallaxImg extends React.Component {
	render() {
		return (
			<section className="container-fluid component-hero parallax-img">
				<div className="bg">
					<img src={this.props.img}
						 className="responsify-me"
						 data-focus-left="0.38"
						 data-focus-top="0.28"
						 data-focus-right="0.65"
						 data-focus-bottom="1.01"
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

export default ParallaxImg;
