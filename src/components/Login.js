import React, { PropTypes as T } from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import AuthService from '../lib/AuthService';

export class Login extends React.Component {
  render() {
    const auth = this.props.route.auth;
	console.warn("PROPS: ", this.props.route.auth);
    return (
		<div className="route route-login">
			<div className="container-fluid">
				<h1>
					Login
				</h1>
				<ButtonToolbar>
		          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
		        </ButtonToolbar>
			</div>
		</div>
    )
  }
}

Login.PropTypes = {
  location: T.object,
  auth: T.instanceOf(AuthService)
}

export default Login;
