import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import * as pageActions from '../../actions/pageActions'

class NewPagePage extends React.Component {
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

		this.props.actions.createPage({ body: this.state.value })
	}

	render() {
		return (
			<div className="container-fluid">
				<h1>Create New Post: </h1>
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
    actions: bindActionCreators(pageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPagePage);
