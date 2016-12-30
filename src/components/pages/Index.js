import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as pageActions from '../../actions/pageActions';
import PageList from './PageList';

class PagesIndex extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1>Pages</h1>
				<PageList pages={this.props.pages} />
			</div>
		);
	}
}

PagesIndex.proptypes = {

};

function mapStateToProps(state, ownProps) {
	// state = {pages: }
	return {
		pages: state.pages
	}
}

export default connect(mapStateToProps)(PagesIndex);
