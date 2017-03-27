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
					<img src={this.props.img} />
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
