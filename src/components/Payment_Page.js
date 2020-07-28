import React from 'react'
import CateCon from './CateCon'

export default class Payment_tab extends React.Component {
	constructor(props) {
		super(props);

		this.Total_Value = this.Total_Value.bind(this);
		this.Total = this.Total.bind(this);
		this.state = {
			Cart_Product: [],
            coins: null,
		};

		fetch('/api/user/Cart')
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

		fetch('/api/user')
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
		if (this.Total_Value(this.state.Cart_Product) > coins) {
			return this.Total_Value(this.state.Cart_Product) - coins;
		}
		if (coins < 0) {
			return this.Total_Value(this.state.Cart_Product);
		}
		let overall = coins - this.Total_Value(this.state.Cart_Product);
		return overall;
	}

	isDisable() {
		if (this.state.coins < this.Total_Value(this.state.Cart_Product)) {
			return true;
		}
		return false;
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
						return <Title_div title={product.title} Value={product.Value} cover_img={product.cover_img} />;
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
						<span className="user_coins_value"> ${this.state.coins}</span>
					</div>
					<div className="checkout_div">
						<button
							className={this.isDisable() ? 'checkout_btn_dis' : 'checkout_btn'}
							onClick={() => {
								if (this.state.coins < this.Total_Value(this.state.Cart_Product)) {
									alert('Insufficient Balance');
								}
								else{
								let data = {
									coins: this.state.coins - this.Total_Value(this.state.Cart_Product)
								};
								postData2('/api/user/CheckoutFromCart', data).then((data) => {
									if (!data) {
										alert('error occured');
									}
								});
							}

                            }}
                            disabled = {this.disable}
						>
							Proceed To Checkout
						</button>
					</div>
							<div className="checkout_div">
						<button className="checkout_btn_pay">Add Money To Wallet</button>
				</div>
                </div>

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

async function postData2(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
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