import React from 'react';
import bookcover from '../img/bookcover.jpg';

// props to send are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}

export default class Productbox extends React.Component {
	addToCart = (refId) => {
		if (this.state.addedToCart === false) {
			let data = { refrenceId: refId };
			postData('/api/products/AddToCart', data);
		}
		this.setState((prev) => {
			return {
				addedToCart: true
			};
		});
	};

	constructor(props) {
		super(props);
		console.log(this.props.isAdded);
		this.state = {
			addedToCart: this.props.isAdded
		};
	}

	// product_pg(refId){
	// 	data = {refrenceId : refId}
	// 	postData2('/api/')
	// }

	render() {
		let c;

		if (this.state.addedToCart) {
			c = {
				backgroundColor: 'green'
			};
		} else {
			c = {
				backgroundColor: '#fa255e'
			};
		}

		return (
			<div className="productcont">
				<div className="tag">
					<strong>{this.props.tag}</strong>
				</div>
				<div
					className="product_img"
					onClick={() => {
						window.location.href = `/productpage/${this.props.refId}`;
					}}
				>
					<img className="bookcover" src={this.props.bookimg ? this.props.bookimg : bookcover} alt=" " />
				</div>
				<div className="product_body">
					<h3 onClick={this.buy}>{this.props.title}</h3>
					<h6>({this.props.stitle})</h6>
					<p>{this.props.short_des}</p>
					<h1>
						{this.props.price} <span>coins</span>
					</h1>
					<button
						onClick={() => {
							this.addToCart(this.props.refId);
						}}
						className="add_to_cart_btn"
						style={c}
					>
						{this.state.addedToCart ? 'Added To Cart' : 'Add To Cart'}
					</button>
				</div>
			</div>
		);
	}
}

async function postData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

