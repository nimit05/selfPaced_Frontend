import React from 'react';
import bookcover from '../img/bookcover.jpg';

// <div className = "condition">Condition : <span className = "good">{this.state.isgood ?  "good" : "poor" } </span></div>

export default class Productbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isgood: true,
			old: true
		};
	}
	render() {
		return (
			<div className="productcont">
				<div className="tag">
					<strong>OLD</strong>
				</div>
				<div className="product_img">
					<img className="bookcover" src={bookcover} alt=" " />
				</div>
				<div className="product_body">
					<h3>H.C. VERMA</h3>
					<h6>(E-book)</h6>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					<h1>₹50</h1>
					<button className="add_to_cart_btn">Add to Cart</button>
				</div>
			</div>
		);
	}
}
