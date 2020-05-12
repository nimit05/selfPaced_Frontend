import React from 'react';
import Productbox from './Productbox';

export default class CateCon extends React.Component {
	render() {
		return (
			<div className="CateCon">
				<div className="cate_head">
					<h1>BEST SELLER</h1>
					<h3>See More -></h3>
				</div>

				<div className="cate_body">
					<Productbox />
					<Productbox />
					<Productbox />
					<Productbox />
					<Productbox />
					<Productbox />
					<Productbox />
					<Productbox />
				</div>
			</div>
		);
	}
}
