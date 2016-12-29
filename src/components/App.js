import React, {PropTypes} from 'react';
import Header from './shared/Header.js'

class App extends React.Component {
	render() {
		return (
			<div className="app-container">
				<Header />
				<div className="container-fluid">
				{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
