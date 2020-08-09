import React from 'react';
import cancel from '../img/cancel.svg'
import Payment_tab from './Payment_Page'

export default class MyCart extends React.Component {


	constructor(props) {
		super(props);

		fetch('/api/user/Cart', {})
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
			<div className = "my_cart">
				<div>
					<Heading 
					count = {this.state.count}
					cartTotal = {this.cartTotal}
					Cart_Product = {this.state.Cart_Product}
				 	/> 
				 </div>
				<div>
					<div className="content_div">
						<div className="product_row_div">
							{this.state.Cart_Product.map((product) => {
								return (
									<Product_cart
										key={product.refrenceId}
										title={product.title}
										s_title={product.s_title}
										tag={product.tag}
										refrenceId={product.refrenceId}
										bookimg={`/covers/${product.cover_img}`}

									/>
								);
							})}
						</div>
						{this.state.Cart_Product.length != 0 && (
							<div className = "grand_total">
								<div className="details_cart">
									<div className="img_cart">
									</div>

								<div className = "book_title_cart">
								</div>
								
								<div className="type_product_cart">
									Grand Total :
								</div>

						

							<div
							className="btn_cart_div"
							>
							</div>
						</div>
					
									</div>
						)}
						<div> 
							
						 </div>
					</div>
					{this.state.Cart_Product.length != 0 && (
					<div className = "mob_cart_pay">
							<Payment_tab />
					</div>
					)}
				</div>
			</div>
		);
	}
}



class Heading extends React.Component {

	constructor(props) {
		super(props);

	
	}



	render() {
		return (
			<div>
				<div className="heading_cart">
					<div>
						<h1 className="heading_left_cart">Items({this.props.count})</h1>
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
				<div className="product_cart">

					<div className="details_cart">

								<div
								className="img_cart"
								onClick={() => {
									window.location.href = `/productpage/${this.props.refrenceId}`;
								}}
							>
								<img className="product_img_cart" src={this.props.bookimg} alt=" " />
							</div>
							<div className = "book_title_cart">
								<span onClick={() => {
									window.location.href = `/productpage/${this.props.refrenceId}`;
								}} >{this.props.title}</span>
								<h6>{this.props.s_title}</h6>
								
								
								<div className="type_product_cart_mob">
									Type : <span className="type_value">{this.props.tag}</span>
								</div>
								<br />
	
								<div
									className="btn_cart_div_mob"
									onClick={() => {
									this.RemoveFromcart(this.props.refrenceId);
									}}
									>
										<button className = "cart_remove_button" >Remove</button>
							</div>
							</div>
							
							<div className="type_product_cart">
								Type : <span className="type_value">{this.props.tag}</span>
							</div>
							
					

						<div
							className="btn_cart_div"
							onClick={() => {
								this.RemoveFromcart(this.props.refrenceId);
							}}
						>
							<img className = 'cart_remove_button' src = {cancel} />
						</div>
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
	window.location.reload();
	return response.json(); // parses JSON response into native JavaScript objects
}

