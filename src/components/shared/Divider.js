import React from 'react';

class Divider extends React.Component {
	render() {
		return (
			<div className="component-divider constrained">
				<span className="icon">
					<span className="icon-inner">
						<span className="icon-align">
						{this.props.children}
						</span>
					</span>
				</span>
			</div>
		);
	}
}

export default Divider;
