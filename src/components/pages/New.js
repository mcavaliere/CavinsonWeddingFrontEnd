import React from 'react';
import {connect} from 'react-redux';

class NewPagePage extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1>Create New Post: </h1>

			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	// state = {pages: }
	return {

	}
}

export default connect(mapStateToProps)(NewPagePage);
