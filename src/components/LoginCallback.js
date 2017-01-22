import React, { PropTypes as T } from 'react';
import AuthService from '../lib/AuthService';

export class LoginCallback extends React.Component {

  render() {
    const auth = this.props.route.auth;
	console.warn("PROPS: ", this.props.route.auth);
    return (
		<div className="route route-login-callback">
			<h1>Login callback</h1>
		</div>
    )
  }
}


export default LoginCallback;
