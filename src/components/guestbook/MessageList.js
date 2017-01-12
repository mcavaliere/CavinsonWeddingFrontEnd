import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

const MessageList = ({messages}) => {
	// console.warn("MessageList: ", messages);
	return (
		<table className="table table-striped table-bordered">
			<thead>
				<tr>
					<th>Date</th>
					<th>Excerpt</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{messages.map(message =>
					<tr key={message.id}>
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
