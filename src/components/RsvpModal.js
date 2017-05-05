import React from 'react';
import { Alert, Button, Checkbox, Col, ControlLabel, Form, FormGroup, FormControl, HelpBlock, Modal, Radio } from 'react-bootstrap';
import util from 'util'

class RsvpModal extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			show: false,
			rsvps: {

			},
			rsvp: {
				email: '',
				fieldErrors: null,
				willAttend: false,
				numGuests: 0,
				numOlderChildren: 0,
				numYoungerChildren: 0,
				afterParty: false,
				people_attributes: [
					{
						firstName: '',
						lastName: '',
					},
					{
						firstName: '',
						lastName: '',
					}
				]
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		var nextState = Object.assign({}, this.state);
		console.log("------componentWillReceiveProps: ", nextProps);

		if (typeof nextProps.show !== 'undefined') {
			nextState.show = nextProps.show;
		}

		if (typeof nextProps.rsvps !== 'undefined') {
			nextState.rsvps = nextProps.rsvps;
		}

		this.setState(nextState);
	}

	render() {
		var $additionalPeople = [];

		for (var i = 1; i < parseInt(this.state.rsvp.numGuests, 10) + 1; i++) {
			$additionalPeople.push(this.renderPersonFields(i));
		}

		return (
			<Modal dialogClassName="component-rsvp-modal" show={this.state.show} onHide={this.hide.bind(this)}>
			  <Modal.Header closeButton>
				<Modal.Title>RSVP</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
				<Alert bsStyle="success">
					<strong>RSVPS: </strong> <span>{util.inspect(this.state.rsvp)}</span>
				</Alert>

				<Alert bsStyle="success">
					<strong>RSVP field errors: : </strong> <span>{util.inspect(this.props.rsvps.fieldErrors)}</span>
				</Alert>

				<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
					{this.renderPersonFields(0, false, "Who's coming?")}
					{this.renderPersonFields(1)}
					<FormGroup validationState={this.getValidationState('email')}>
						<div className="row">
							<Col sm={12}>
								<FormControl type="email" name="email" placeholder="Email" value={this.state.rsvp.email} onChange={this.handleChange.bind(this)} />
								<FormControl.Feedback />
							</Col>
						</div>
					</FormGroup>
					<FormGroup validationState={this.getValidationState('willAttend')}>
						<div className="row">
							<Col sm={6}>
								<ControlLabel>Will you be attending the wedding? </ControlLabel>
							</Col>
							<Col sm={6}>
								<Radio name="willAttend" value={1} inline checked={this.state.rsvp.willAttend === true}  onChange={this.handleChange.bind(this)}>Yes</Radio>
								<Radio name="willAttend" value={0} inline checked={this.state.rsvp.willAttend === false} onChange={this.handleChange.bind(this)}>No</Radio>
							</Col>
						</div>
					</FormGroup>
					<FormGroup validationState={this.getValidationState('numYoungerChildren')}>
						<div className="row">
							<Col sm={6}>
								<ControlLabel># of Chidren under 12:</ControlLabel>
							</Col>
							<Col sm={6}>
								<Radio name="numYoungerChildren" value={0} inline checked={this.state.rsvp.numYoungerChildren === 0} onChange={this.handleChange.bind(this)}>0</Radio>
								<Radio name="numYoungerChildren" value={1} inline checked={this.state.rsvp.numYoungerChildren === 1} onChange={this.handleChange.bind(this)}>1</Radio>
								<Radio name="numYoungerChildren" value={2} inline checked={this.state.rsvp.numYoungerChildren === 2} onChange={this.handleChange.bind(this)}>2</Radio>
								<Radio name="numYoungerChildren" value={3} inline checked={this.state.rsvp.numYoungerChildren === 3} onChange={this.handleChange.bind(this)}>3</Radio>
							</Col>
						</div>
					</FormGroup>
					<FormGroup validationState={this.getValidationState('numOlderChildren')}>
						<div className="row">
							<Col sm={6}>
								<ControlLabel># of Chidren 12 or older:</ControlLabel>
							</Col>
							<Col sm={6}>
								<Radio name="numOlderChildren" value={0} inline checked={this.state.rsvp.numOlderChildren === 0} onChange={this.handleChange.bind(this)}>0</Radio>
								<Radio name="numOlderChildren" value={1} inline checked={this.state.rsvp.numOlderChildren === 1} onChange={this.handleChange.bind(this)}>1</Radio>
								<Radio name="numOlderChildren" value={2} inline checked={this.state.rsvp.numOlderChildren === 2} onChange={this.handleChange.bind(this)}>2</Radio>
								<Radio name="numOlderChildren" value={3} inline checked={this.state.rsvp.numOlderChildren === 3} onChange={this.handleChange.bind(this)}>3</Radio>
							</Col>
						</div>
					</FormGroup>

					{$additionalPeople}

					<FormGroup>
						<div className="row">
							<Col xs={12}>
								<Checkbox checked={this.state.rsvp.welcomeDinner} value={false} onChange={this.handleChange.bind(this)}>I/we will also attend the <b>Welcome Dinner</b> on Friday, 9/22.</Checkbox>
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

	renderPersonFields(key, email=false, label=false) {
		return (
			<FormGroup controlId={`person-fields-${key}`} className="basic-info" key={key}>
				<div className="row">
					{label &&
						<Col xs={12}>
							<ControlLabel>{label}</ControlLabel>
						</Col>
					}
					<Col sm={6}>
						<FormControl className="name" type="text" placeholder="First name" data-key={key} data-field-type="firstName" value={this.state.rsvp.people_attributes[key].firstName} onChange={this.handleGuestInfoChange.bind(this)} />
					</Col>
					<Col sm={6}>
						<FormControl className="name" type="text" placeholder="Last name" data-key={key} data-field-type="lastName" value={this.state.rsvp.people_attributes[key].lastName} onChange={this.handleGuestInfoChange.bind(this)} />
					</Col>
				</div>
				{email &&
					<div className="row">
						<Col sm={12}>
							<FormControl type="email" placeholder="Email" data-key={key} data-field-type="email" value={this.state.rsvp.people_attributes[key].email} onChange={this.handleGuestInfoChange.bind(this)} />
						</Col>
					</div>
				}
				<FormControl.Feedback />
			</FormGroup>
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

	getValidationState(fieldName) {
		if (Object.keys(this.props.rsvps.fieldErrors).indexOf(fieldName) !== -1) {
			return 'error';
		}

		return null;
	}

	handleChange(e) {
		let newRsvpState = Object.assign({}, this.state.rsvp);
		let newVal;

		// Enforce typing.
		switch (e.target.name) {
			case 'willAttend':
			case 'afterParty':
				newVal = !!parseInt(e.target.value, 10);
				break;

			case 'numGuests':
			case 'numOlderChildren':
			case 'numYoungerChildren':
				newVal = parseInt(e.target.value, 10);
				break;

			default:
				newVal = e.target.value;
		}



		newRsvpState[e.target.name] = newVal;

		this.setState({
			rsvp: newRsvpState
		});
	}

	handleGuestInfoChange(e) {
		let newRsvpState = Object.assign({}, this.state.rsvp);
		// Where in the people_attributes array is this guest?
		let key = parseInt(e.target.attributes['data-key'].value, 10);
		// Which field are we updating?
		let fieldType = e.target.attributes['data-field-type'].value;
		let value = e.target.value;

		newRsvpState.people_attributes[key][fieldType] = value;

		this.setState({
			rsvp: newRsvpState
		});
	}

	handleNumGuestsChange(e) {
		let newRsvpState = Object.assign({}, this.state.rsvp);
		newRsvpState[e.target.name] = e.target.value;

		// Ensure that there are at least numGuest elements in the people array.
		for (var i = this.state.rsvp.people_attributes.length; i < parseInt(newRsvpState.numGuests) + 1; i++) {
			newRsvpState.people_attributes.push({
				firstName: '',
				lastName: '',
				email: ''
			});
		}

		this.setState({
			rsvp: newRsvpState
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.onSubmit(this.state.rsvp);
	}

	getRsvpValidationState() {

	}
}

export default RsvpModal;
