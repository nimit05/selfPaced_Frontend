import React from 'react';
import Productbox from './Productbox';

// props to send to productbox are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}

export default class CateCon extends React.Component {
	render() {
		return (
			<div className="CateCon">
				<div className="cate_head">
					<h1>BEST SELLER</h1>
					<h3>See More -></h3>
				</div>

				<div className="cate_body">
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'50'}
					/>
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'50'}
					/>
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'50'}
					/>
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'$50'}
					/>
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						bookimg={' '}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'$50'}
					/>
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						bookimg={' '}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'$50'}
					/>
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						bookimg={' '}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'$50'}
					/>
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						bookimg={' '}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'$50'}
					/>
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						bookimg={' '}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'$50'}
					/>
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						bookimg={' '}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'$50'}
					/>
					<Productbox
						title={'H.C. Verma'}
						tag={'OLD'}
						bookimg={' '}
						stitle={'4th edition'}
						short_des={'lorem ispsnem lorem ispsem'}
						price={'$50'}
					/>
				</div>
			</div>
		);
	}
}
