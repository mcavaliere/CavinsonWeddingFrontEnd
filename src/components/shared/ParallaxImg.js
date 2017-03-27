import React from 'react';
import {TweenMax, TimelineMax} from 'gsap';

var ScrollMagic = require('scrollmagic/scrollmagic/uncompressed/ScrollMagic');
// require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

class ParallaxImg extends React.Component {
	render() {
		console.warn("--------PArallaxImg render");
		return (
			<section className="container-fluid component-hero parallax-img">
				<div className="bg" style={{ backgroundImage: `url(${this.props.img})` }} />
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
