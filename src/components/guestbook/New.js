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
        value: this.props.value || '',
		previewSrc: null,
		showPreview: false
      };
    }

	handleTextChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	handleFileChange(e) {
		console.warn("handleFileChange: ", e.target.files);
		// this.setState({
		// 	file: e.target.value
		// })
		var file   = e.target.files[0];
		var reader = new FileReader();

		reader.addEventListener("load", () => {
			console.warn("LOADED: ", arguments);
			this.setState({
				previewSrc: reader.result,
				showPreview: true
			});

		});

		if (file) {
			reader.readAsDataURL(file);
		}


	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.actions.create({ body: this.state.value }).then(() => {
			browserHistory.push('/guestbook');
		});
	}

	render() {
		let preview = null;

		if (this.state.showPreview === true) {
			preview = <div className="preview well"><img src={this.state.previewSrc} /></div>;
		}




		return (
			<div className="container-fluid">
				<h1>Leave a Message </h1>

				<form action="" onSubmit={this.handleSubmit.bind(this)}>
					<FormGroup controlId="formControlsTextarea">
						<ControlLabel>Enter a message:</ControlLabel>
						<FormControl
						  componentClass="textarea"
						  placeholder="textarea"
						  onChange={this.handleTextChange.bind(this)}
						  value={this.state.value}
			            />
					</FormGroup>
					<FormGroup controlId="formControlsFile">
				      <ControlLabel>Upload a Photo</ControlLabel>
				      <FormControl
						  type="file"
						  id="formControlsFile"
						  onChange={this.handleFileChange.bind(this)}
					  />
				    </FormGroup>

					{preview}

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
