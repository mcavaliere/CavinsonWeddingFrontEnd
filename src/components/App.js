import React, {PropTypes} from 'react';
import Header from './shared/Header.js'
import Hamburger from './shared/Hamburger.js'

class App extends React.Component {
	render() {
		return (
			<div className="app-container">
				<Header />
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
