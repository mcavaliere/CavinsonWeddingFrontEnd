import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import messagesApi from '../../api/messagesApi';



class ShowMessagePage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			message: {
				body: ""
			}
		}
	}

	componentDidMount() {
		messagesApi.find(this.props.params.messageId).then(function(message) {
			this.setState({
				message: message
			});
		}.bind(this));
	}

	render() {
		return (
			<div className="route route-guestbook-show">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12">
						Message DATE:

						{this.state.message.created_at_formatted}

						</div>
						<div className="col-xs-12">
						Message BODY:

						{this.state.message.body}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ShowMessagePage.defaultProps = {
	message: {

	}
};

function mapStateToProps(state, ownProps) {
	return {
		message: state.message
	}
}

export default connect(mapStateToProps)(ShowMessagePage);
