import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import * as messageActions from '../../actions/messageActions';

class NewMessagePage extends React.Component {
	constructor(props, context) {
	  super(props, context);

      this.state = {
        value: this.props.value || ''
      };
    }

	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.actions.create({ body: this.state.value }).then(() => {
			browserHistory.push('/guestbook');
		})
	}

	render() {
		return (
			<div className="container-fluid">
				<h1>Leave a Message </h1>
				<form action="" onSubmit={this.handleSubmit.bind(this)}>
					<FormGroup controlId="formControlsTextarea">
						<ControlLabel>Enter a message:</ControlLabel>
						<FormControl
						  componentClass="textarea"
						  placeholder="textarea"
						  onChange={this.handleChange.bind(this)}
						  value={this.state.value}
			            />
					</FormGroup>
					<Button type="submit">
				      Submit
				    </Button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		value: state.value
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessagePage);
