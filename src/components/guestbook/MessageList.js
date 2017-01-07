import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

const MessageList = ({pages}) => {
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
				{pages.map(page =>
					<tr key={page.id}>
						<td>{page.created_at_formatted}</td>
						<td>

						</td>
						<td>
							<Link to="/guestbook">
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
