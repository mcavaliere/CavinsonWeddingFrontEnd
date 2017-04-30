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
				willAttend: false,
				numGuests: 0,
				afterParty: false,
				people: [
					{
						firstName: '',
						lastName: '',
						email: ''
					}
				],
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		var nextState = Object.assign({}, this.state);

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
			  	<Alert>
					<strong>RSVPS: </strong> <span>{util.inspect(this.state.rsvps)}</span>
				</Alert>
				<Alert bsStyle="success">
					<strong>RSVPS: </strong> <span>{util.inspect(this.state.rsvp.people)}</span>
				</Alert>

				<Form horizontal onSubmit={this.onSubmit.bind(this)}>
					{this.renderPersonFields(0, true)}
					<FormGroup>
						<div className="row">
							<Col sm={6}>
								<ControlLabel>Will you be attending the wedding? </ControlLabel>
							</Col>
							<Col sm={6}>
								<Radio name="willAttend" inline checked={this.state.rsvp.willAttend} onChange={this.handleChange.bind(this)} >Yes</Radio>
								<Radio name="willAttend" inline checked={this.state.rsvp.willAttend} onChange={this.handleChange.bind(this)} >No</Radio>
							</Col>
						</div>
						<div className="row">
							<Col sm={6}>
								<ControlLabel># of Guests (besides yourself)</ControlLabel>
							</Col>
							<Col sm={6}>
								<Radio name="numGuests" value={0} inline checked={this.state.rsvp.numGuests === "0"} onChange={this.handleNumGuestsChange.bind(this)}>0</Radio>
								<Radio name="numGuests" value={1} inline checked={this.state.rsvp.numGuests === "1"} onChange={this.handleNumGuestsChange.bind(this)}>1</Radio>
								<Radio name="numGuests" value={2} inline checked={this.state.rsvp.numGuests === "2"} onChange={this.handleNumGuestsChange.bind(this)}>2</Radio>
								<Radio name="numGuests" value={3} inline checked={this.state.rsvp.numGuests === "3"} onChange={this.handleNumGuestsChange.bind(this)}>3</Radio>
								<Radio name="numGuests" value={4} inline checked={this.state.rsvp.numGuests === "4"} onChange={this.handleNumGuestsChange.bind(this)}>4</Radio>
								<Radio name="numGuests" value={5} inline checked={this.state.rsvp.numGuests === "5"} onChange={this.handleNumGuestsChange.bind(this)}>5</Radio>
							</Col>
						</div>
					</FormGroup>

					{$additionalPeople}

					<FormGroup>
						<div className="row">
							<Col xs={12}>
								<Checkbox checked={this.state.rsvp.welcomeDinner}>I/we will also attend the <b>Welcome Dinner</b> on Friday, 9/22.</Checkbox>
							</Col>
							<Col xs={12}>
								<Checkbox checked={this.state.rsvp.afterParty}>I/we will also attend the <b>After Party</b> after the wedding.</Checkbox>
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

	renderPersonFields(key, email=false) {
		return (
			<FormGroup controlId={`person-fields-${key}`} className="basic-info" key={key}>
				<div className="row">
					<Col sm={6}>
						<FormControl className="name" type="text" placeholder="First name" data-key={key} data-field-type="firstName" value={this.state.rsvp.people[key].firstName} onChange={this.handleGuestInfoChange.bind(this)} />
					</Col>
					<Col sm={6}>
						<FormControl className="name" type="text" placeholder="Last name" data-key={key} data-field-type="lastName" value={this.state.rsvp.people[key].lastName} onChange={this.handleGuestInfoChange.bind(this)} />
					</Col>
				</div>
				{email &&
					<div className="row">
						<Col sm={12}>
							<FormControl type="email" placeholder="Email" data-key={key} data-field-type="email" value={this.state.rsvp.people[key].email} onChange={this.handleGuestInfoChange.bind(this)} />
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

	handleChange(e) {
		let newRsvpState = Object.assign({}, this.state.rsvp);
		newRsvpState[e.target.name] = e.target.value;

		this.setState({
			rsvp: newRsvpState
		});
	}

	handleGuestInfoChange(e) {
		let newRsvpState = Object.assign({}, this.state.rsvp);
		// Where in the people array is this guest?
		let key = parseInt(e.target.attributes['data-key'].value, 10);
		// Which field are we updating?
		let fieldType = e.target.attributes['data-field-type'].value;
		let value = e.target.value;

		newRsvpState.people[key][fieldType] = value;

		this.setState({
			rsvp: newRsvpState
		});
	}

	handleNumGuestsChange(e) {
		let newRsvpState = Object.assign({}, this.state.rsvp);
		newRsvpState[e.target.name] = e.target.value;

		// Ensure that there are at least numGuest elements in the people array.
		for (var i = this.state.rsvp.people.length; i < parseInt(newRsvpState.numGuests) + 1; i++) {
			newRsvpState.people.push({
				firstName: '',
				lastName: '',
				email: ''
			});
		}

		this.setState({
			rsvp: newRsvpState
		});
	}

	onSubmit(e) {
		e.preventDefault();

		this.props.onSubmit(this.state.rsvp);
	}

	getRsvpValidationState() {

	}
}

export default RsvpModal;
