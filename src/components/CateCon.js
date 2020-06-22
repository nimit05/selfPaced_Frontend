import React from 'react';
import Productbox from './Productbox';

// props to send to productbox are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}

export default class CateCon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			proArray: [],
			addedtocartArr: []
		};

		postData('/api/user/CartRefId')
			.then((data) => {
				console.log(data);

				this.setState(() => {
					return {
						addedtocartArr: data
					};
				});
				postData('/api/products').then((data) => {
					console.log(data);

					this.setState(() => {
						return { proArray: data.products };
					});
				});
			})
			.catch(() => {
				postData('/api/products').then((data) => {
					console.log(data);

					this.setState(() => {
						return { proArray: data.products };
					});
				});
			});
	}
	render() {
		return (
			<div className="CateCon">
				<div className="cate_head">
					<h1>BEST SELLER</h1>
					<h3>See More -></h3>
				</div>

				<div className="cate_body">
					{this.state.proArray.map((e) => {
						let a = this.state.addedtocartArr.indexOf(e.refrenceId);
						console.log(a);
						let isadded;
						if (a == -1) {
							isadded = false;
						} else {
							isadded = true;
						}

						return (
							<Productbox
								title={e.title}
								tag={e.tag}
								stitle={e.s_title}
								short_des={e.short_des}
								price={e.Value}
								refId={e.refrenceId}
								isAdded={isadded}
								bookimg={`/covers/${e.cover_img}`}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

async function postData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	});
	return response.json(); // parses JSON response into native JavaScript objects
}
