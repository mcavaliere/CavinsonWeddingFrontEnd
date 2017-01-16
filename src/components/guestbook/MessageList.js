import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import Config from '../../lib/Constants';

require('../../scss/components/message-list.scss');

const MessageList = ({messages}) => {
	console.warn("MessageList: ", messages);
	return (
		<table className="table table-striped table-bordered component-message-list">
			<thead>
				<tr>
					<th>Thumb</th>
					<th>Date</th>
					<th>Excerpt</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{messages.map(message =>
					<tr key={message.id}>
						<td className="thumb"><img src={ Config.API_BASE_URL + message.photo } /></td>
						<td>{message.created_at_formatted}</td>
						<td>{message.body}</td>
						<td>
							<Link to={`/guestbook/${message.id}`}>
								View
							</Link>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}

export default MessageList;
