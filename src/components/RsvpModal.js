import React from 'react';
import { Button, Checkbox, Col, ControlLabel, Form, FormGroup, FormControl, HelpBlock, Modal, Radio } from 'react-bootstrap';

class RsvpModal extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			show: false
		}
	}

	componentWillReceiveProps(nextProps) {
		if (typeof nextProps.show !== 'undefined') {
			this.setState({
				show: nextProps.show
			});
		}
	}

	render() {
		return (
			<Modal dialogClassName="component-rsvp-modal" show={this.state.show} onHide={this.hide.bind(this)}>
			  <Modal.Header closeButton>
				<Modal.Title>RSVP</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>

				<Form horizontal onSubmit={this.props.onSubmit}>
					<FormGroup controlId="formBasicText" className="basic-info" validationState={this.getRsvpValidationState()}>
						<div className="row">
							<Col sm={6}>
								<FormControl className="name" type="text" placeholder="First name" ref="first_name" />
							</Col>
							<Col sm={6}>
								<FormControl className="name" type="text" placeholder="Last name" ref="last_name" />
							</Col>
						</div>
						<div className="row">
							<Col sm={12}>
								<FormControl type="email" placeholder="Email" ref="email" />
							</Col>
						</div>
						<FormControl.Feedback />
					</FormGroup>
					<FormGroup>
						<div className="row">
							<Col sm={6}>
								<ControlLabel>Will you be attending the wedding? </ControlLabel>
							</Col>
							<Col sm={6}>
								<Radio inline>Yes</Radio>
								<Radio inline>No</Radio>
							</Col>
						</div>
						<div className="row">
							<Col sm={6}>
								<ControlLabel># of Guests</ControlLabel>
							</Col>
							<Col sm={6}>
								<FormControl type="text" placeholder="0" ref="num_guests" />
							</Col>
						</div>
						<div className="row">
							<Col sm={6}>
								<ControlLabel># of Children</ControlLabel>
							</Col>
							<Col sm={6}>
								<FormControl type="text" placeholder="0" ref="num_children" />
							</Col>
						</div>
					</FormGroup>
					<FormGroup>
						<div className="row">
							<Col xs={12}>
								<Checkbox>I/we will also attend the <b>Welcome Dinner</b> on Friday, 9/22.</Checkbox>
							</Col>
							<Col xs={12}>
								<Checkbox>I/we will also attend the <b>After Party</b> after the wedding.</Checkbox>
							</Col>
						</div>
					</FormGroup>
					<hr />
					<FormGroup className="button-row">
						<div className="row">
							<div className="col-xs-12 col">
								<Button onClick={this.hide.bind(this)}>Cancel</Button>
								<Button type="submit" className="btn-primary">Submit</Button>
							</div>
						</div>
					</FormGroup>


				</Form>

			  </Modal.Body>
			</Modal>
		);
	}

	show() {
		this.setState({
			show: true
		});
	}

	hide() {
		this.setState({
			show: false
		});
	}

	getRsvpValidationState() {

	}
}

export default RsvpModal;
