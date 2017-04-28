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
				email: "",
				firstName: "",
				lastName: "",
				willAttend: false,
				numGuests: false,
				afterParty: false
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
		return (
			<Modal dialogClassName="component-rsvp-modal" show={this.state.show} onHide={this.hide.bind(this)}>
			  <Modal.Header closeButton>
				<Modal.Title>RSVP</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
			  	<Alert>
					<strong>RSVPS: </strong> <span>{util.inspect(this.state.rsvps)}</span>
				</Alert>

				<Form horizontal onSubmit={this.onSubmit.bind(this)}>
					<FormGroup controlId="formBasicText" className="basic-info" validationState={this.getRsvpValidationState()}>
						<div className="row">
							<Col sm={6}>
								<FormControl className="name" type="text" placeholder="First name" ref="first_name" name="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)} />
							</Col>
							<Col sm={6}>
								<FormControl className="name" type="text" placeholder="Last name" ref="last_name" value={this.state.lastName} onChange={this.handleChange.bind(this)} />
							</Col>
						</div>
						<div className="row">
							<Col sm={12}>
								<FormControl type="email" placeholder="Email" ref="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
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
								<Radio name="willAttend" inline checked={this.state.rsvp.willAttend} onChange={this.handleChange.bind(this)} >Yes</Radio>
								<Radio name="willAttend" inline checked={this.state.rsvp.willAttend} onChange={this.handleChange.bind(this)} >No</Radio>
							</Col>
						</div>
						<div className="row">
							<Col sm={6}>
								<ControlLabel># of Guests</ControlLabel>
							</Col>
							<Col sm={6}>
								<FormControl type="text" placeholder="0" ref="num_guests" name="numGuests" value={this.state.rsvp.numGuests} onChange={this.handleChange.bind(this)} />
							</Col>
						</div>
					</FormGroup>
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

	onSubmit(e) {
		e.preventDefault();

		this.props.onSubmit(this.state.rsvp);
	}

	getRsvpValidationState() {

	}
}

export default RsvpModal;
