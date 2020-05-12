import React from 'react';
import bookcover from '../img/bookcover.jpg';

// props to send are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}

export default class Productbox extends React.Component {
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
			<div className="productcont">
				<div className="tag">
					<strong>{this.props.tag}</strong>
				</div>
				<div className="product_img">
					<img className="bookcover" src={bookcover} alt=" " />
				</div>
				<div className="product_body">
					<h3>{this.props.title}</h3>
					<h6>({this.props.stitle})</h6>
					<p>{this.props.short_des}</p>
					<h1>{this.props.price}</h1>
					<button onClick={this.addToCart} className="add_to_cart_btn" style={c}>
						{this.state.addedToCart ? 'Added To Cart' : 'Add To Cart'}
					</button>
				</div>
			</div>
		);
	}
}
