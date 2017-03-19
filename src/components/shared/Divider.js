import React from 'react';

class Divider extends React.Component {
	render() {
		return (
			<div className="component-divider">
				<span className="icon">
					<span className="icon-inner">
						{this.props.children}
					</span>
				</span>
			</div>
		);
	}
}

export default Divider;
