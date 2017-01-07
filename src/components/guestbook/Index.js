import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as messageActions from '../../actions/messageActions';
import MessageList from './MessageList';


class GuestBookIndex extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1>Guestbook</h1>

			</div>
		);
	}
}

//<MessageList messages={this.props.messages} />

GuestBookIndex.proptypes = {

};

function mapStateToProps(state, ownProps) {
	// state = {pages: }
	return {
		messages: state.messages
	}
}

export default connect(mapStateToProps)(GuestBookIndex);
