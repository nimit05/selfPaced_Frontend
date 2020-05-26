import React from 'react';
import bookcover from '../img/bookcover.jpg';

// props to send to productbox are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}

export default class CateCon_for_profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			proArray: []
		};

		postData('/api/products/myproducts').then((data) => {
			console.log(data);
			this.setState(() => {
				return { proArray: data.products };
			});
		});
	}
	render() {
		return (
			<div className="CateCon">
				<div className="cate_head">
					<h1>My Products</h1>
					<h3>See More -></h3>
				</div>

				<div className="cate_body">
					{this.state.proArray.map((e) => {
						return (
							<Productbox
								title={e.BookName}
								tag={e.tag}
								stitle={e.BookAuthor}
								short_des={e.Edition}
								price={e.Value}
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

// props to send are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}
class Productbox extends React.Component {
	addToCart = () => {
		// to do req to add to cart

		this.setState((prev) => {
			return {
				addedToCart: !prev.addedToCart
			};
		});
	};

	constructor(props) {
		super(props);
		this.state = {
			addedToCart: false
		};
	}

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
			<div className="productcont_for_profile">
				<div className="tag_for_profile">
					<strong>{this.props.tag}</strong>
				</div>
				<div
					className="product_img"
					onClick={() => {
						window.location.href = '/productpage';
					}}
				>
					<img className="bookcover" src={this.props.bookimg ? this.props.bookimg : bookcover} alt=" " />
				</div>
				<div className="product_body_for_profile">
					<h3>{this.props.title}</h3>
					<h6>({this.props.stitle})</h6>
					<p>{this.props.short_des}</p>
					<h1>
						{this.props.price} <span>coins</span>
					</h1>
					<button onClick={this.addToCart} className="add_to_cart_btn" style={c}>
						{this.state.addedToCart ? 'Added To Cart' : 'Add To Cart'}
					</button>
				</div>
			</div>
		);
	}
}
