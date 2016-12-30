import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

const PageList = ({pages}) => {
	return (
		<table className="table table-striped table-bordered">
			<thead>
				<tr>
					<th>Post Date</th>
					<th>Post Excerpt</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{pages.map(page =>
					<tr key={page.id}>
						<td>{page.created_at_formatted}</td>
						<td>
							{page.body_truncated}
						</td>
						<td>
							<Link to="/pages/new">
								View
							</Link>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}

export default PageList;
