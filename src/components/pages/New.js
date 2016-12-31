import React from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

class NewPagePage extends React.Component {
	constructor(props) {
	  super(props);

      this.state = {
        value: ''
      };
    }

	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		
	}

	render() {
		return (
			<div className="container-fluid">
				<h1>Create New Post: </h1>
				<form action="" onSubmit={this.handleSubmit}>
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
	// state = {pages: }
	return {

	}
}

export default connect(mapStateToProps)(NewPagePage);
