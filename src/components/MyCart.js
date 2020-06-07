import React from 'react';
import Header from './Header';
import bookcover from '../img/bookcover.jpg';
import Base_Header from '../Hooks/Base_header';

export default class MyCart extends React.Component {
	render() {
		return (
			<div>
				<Heading />
			</div>
		);
	}
}

class Payment_tab extends React.Component {
	constructor(props) {
		super(props);

		this.Total_Value = this.Total_Value.bind(this);
		this.Total = this.Total.bind(this);
		this.state = {
			Cart_Product: [],
			coins: null
		};

		fetch('/api/user/Cart', {
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
						return {
							Cart_Product: data
						};
					});
				}
			});

		fetch('/api/user', {
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
						return {
							coins: data.Coins
						};
					});
				}
			});
	}
	Total_Value(data) {
		let total = 0;
		for (let i = 0; i < data.length; i++) {
			total = total + data[i].Value;
		}
		return total;
	}

	Total(coins) {
		if (this.Total_Value(this.state.Cart_Product) < coins) {
			return 0;
		}
		let overall = this.Total_Value(this.state.Cart_Product) - coins;
		return overall;
	}

	render() {
		return (
			<div className="payment_tab">
				<div className="payment_tab_heading">ORDER SUMMARY</div>
				<hr />
				<div>
					<input placeholder="HAVE A PROMOCODE?" type="text" className="payment_promo" />
				</div>
				<div className="prod_det">
					{this.state.Cart_Product.map((product) => {
						return (
							<Title_div title={product.BookName} Value={product.Value} cover_img={product.cover_img} />
						);
					})}
				</div>

				<hr />
				<div>
					<div className="title_tab_total">
						Total Value
						<div className="title_ab_total_value">${this.Total_Value(this.state.Cart_Product)}</div>
					</div>
					<div className="user_coins">
						Your Coins
						<span className="user_coins_value">- ${this.state.coins}</span>
					</div>
					<div className="user_coins">
						Order Total
						<div className="order_total">${this.Total(this.state.coins)}</div>
					</div>
					<div className="checkout_div">
						<button className="checkout_btn">Proceed To Checkout</button>
					</div>
					<div className="checkout_div">
						<button className="checkout_btn_pay">Pay with PayTM</button>
					</div>
				</div>
			</div>
		);
	}
}

class Heading extends React.Component {
	constructor(props) {
		super(props);

		fetch('/api/user/Cart', {
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
						return {
							Cart_Product: data,
							count: data.length
						};
					});
				}
			});
		this.state = {
			Cart_Product: [],
			count: 0
		};
	}

	render() {
		return (
			<div>
				<div className="heading_cart">
					<h1 className="heading_left_cart">Your Cart({this.state.count})</h1>
				</div>
				<div className="content_div">
					<Payment_tab />
					<hr className="hidden_hr" />
					<div className="product_row_div">
						{this.state.Cart_Product.map((product) => {
							return (
								<Product_cart
									key={product.refrenceId}
									BookName={product.BookName}
									BookAuthor={product.BookAuthor}
									Value={product.Value}
									tag={product.tag}
									refrenceId={product.refrenceId}
									total={this.Total_Value}
									bookimg={`http://localhost:4444/covers/${product.cover_img}`}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

class Product_cart extends React.Component {
	constructor(props) {
		super(props);
		this.RemoveFromcart = this.RemoveFromcart.bind(this);
	}
	RemoveFromcart(refId) {
		let data = { refrenceId: refId };
		postData('/api/products/RemoveFromCart', data);
	}
	render() {
		return (
			<div className="product_cart_cont">
				<div className="product_cart">
					<div
						className="img_cart"
						onClick={() => {
							window.location.href = `/productpage/${this.props.refrenceId}`;
						}}
					>
						<img className="product_img_cart" src={this.props.bookimg} alt=" " />
					</div>

					<div className="details_cart">
						<h3
							onClick={() => {
								window.location.href = `/productpage/${this.props.refrenceId}`;
							}}
						>
							{this.props.BookName}
						</h3>
						<h6>{this.props.BookAuthor}</h6>
						<span />

						<div className="type_product_cart">
							Type : <span className="type_value">{this.props.tag}</span>
						</div>
						<div className="cart_product_price_mob">${this.props.Value}</div>
						<div
							className="btn_cart_div"
							onClick={() => {
								this.RemoveFromcart(this.props.refrenceId);
							}}
						>
							<button className="cart_remove_button">Remove</button>
						</div>
					</div>
				</div>
				<br />
				<hr className="hr_cart" />
			</div>
		);
	}
}

const Title_div = (props) => {
	return (
		<div className="title_div">
			<div className="title_div_name">
				{props.title}
				<div className="title_div_price">${props.Value}</div>
			</div>
		</div>
	);
};

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
	window.location.reload();
	return response.json(); // parses JSON response into native JavaScript objects
}
