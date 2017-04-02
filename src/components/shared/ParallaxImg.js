import React, { PropTypes } from 'react';
import { TweenMax, TimelineMax } from 'gsap';
import Utils from '../../lib/Utils';

var ScrollMagic = require('scrollmagic/scrollmagic/uncompressed/ScrollMagic');
// require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

class ParallaxImg extends React.Component {
	render() {
		let focusParams = (this.props.focus ? Utils.focusParams(this.props.focus) : {})
		let textAlign = (this.props.textAlign ? 'text-align-' + this.props.textAlign : '')

		return (
			<section id={this.props.id} className={"container-fluid component-hero parallax-img " + textAlign}>
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
