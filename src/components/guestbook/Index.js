import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as messageActions from '../../actions/messageActions';
import MessageList from './MessageList';
import {Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class GuestBookIndex extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			messages: []
		}
	}

	componentWillMount() {
		console.warn("componentWillMount");
	}

	componentDidMount() {
		console.warn("componentDidMount. this: ", this.props);
		this.props.actions.load();
	}

	componentWillUpdate() {
		console.warn("componentWillUpdate");
	}

	render() {
		const messages = this.props.messages;
		return (
			<div className="container-fluid">
				<h1>Guestbook</h1>
				<LinkContainer to="/guestbook/new">
					<Button bsStyle="primary">Leave a Message!</Button>
				</LinkContainer>
				<MessageList messages={messages} />
			</div>
		);
	}
}

GuestBookIndex.propTypes = {

};
GuestBookIndex.defaultProps = {
	messages: []
};

function mapStateToProps(state, ownProps) {
	// state = {pages: }
	return {
		messages: state.messages
	}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
	actions: bindActionCreators(messageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestBookIndex);
