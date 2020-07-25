import React from 'react';
import bookcover from '../img/bookcover.jpg';
import Productbox from './Productbox'
// props to send to productbox are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}

export default class CateCon_for_profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			proArray: []
		};

		fetch('/api/user/products', {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache',
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer'
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data) {
					this.setState(() => {
						return { proArray: data };
					});
				}
			});
	}
	render() {
		return (
			<div className="CateCon_profile">
			
				<div className="cate_body">
					{this.state.proArray.map((e) => {
						return (
							<Productbox
								title={e.title}
								tag={e.tag}
								stitle={e.s_title}
								short_des={e.short_des}
								price={e.Value}
								refId={e.refrenceId}
								bookimg={`/covers/${e.cover_img}`}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}


