import React from 'react';
import Productbox from './Productbox';
import CateCon from './CateCon';
import Base_Header from '../Hooks/Base_header';

export default class Search_items extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			addedtocartArr: []
		};

		postData('/api/user/CartRefId').then((data) => {
			if (data) {
				this.setState(() => {
					return {
						addedtocartArr: data
					};
				});
			}
		});
		const { name } = this.props.match.params;

		fetch(`/api/products/search/${name}`).then((res) => res.json()).then((data) => {
			if (data) {
				this.setState(() => {
					return {
						products: data
					};
				});
			}
		});
	}

	componentDidMount() {}
	render() {
		return (
			<div>
				<div className="heading_cart">
					<h1 className="heading_left_cart">Search({this.state.products.length})</h1>
				</div>
				<div className = "SearchPage">
					{this.state.products.length ? (
						<div className="search_items">
							{this.state.products.map((e) => {
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
					) : (
						<div className="search_error">
							<h2>Sorry! NO such product found.😁😁</h2>
						</div>
					)}
				</div>
				<br />
				<br />
				<hr className="hr_divider" />
				<div className = "cart_catecon">
					<CateCon />	
				</div>
			
				<Base_Header />
			</div>
		);
	}
}

async function postData(url = '') {
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
		// body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}
