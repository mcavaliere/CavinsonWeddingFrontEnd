import React, {PropTypes} from 'react';

const PageList = ({pages}) => {
	return (
		<div className="row">
			{pages.map(page =>
				<div className="col-xs-12" key={page.id}>
					{page.body}
				</div>
			)}
		</div>
	);
}

export default PageList;
