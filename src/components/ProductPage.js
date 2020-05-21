import React from 'react';
// import Header from './Header'
import Header from './Header';
import cart from '../img/cart.svg';
import bookcover from '../img/bookcover.jpg';

import pblogo from '../img/pblogo.png';

export default class ProductPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="main_body_pro_page">
					<BookImg />
					<Content />
				</div>
			</div>
		);
	}
}

const BookImg = () => {
	return (
		<div className="Main_BI">
			<div className="book_cont">
				<img className="product_img_pp" src={bookcover} alt=" " />
			</div>
		</div>
	);
};
const Content = () => {
	return (
		<div className="Main_CT">
			<div>
				Concept of Physics
				<div className="author">
					<span className="by">By</span> H.C Verma
					<hr className="hr" />
				</div>
				<div className="price_pp">
					Price :<span className="price_val">50 coins</span>
				</div>
			</div>
			<div className="buy_pp ">
				<button className="buy_btn_pp">Buy Now</button>
				<button className="adc_btn_pp ">Add to Cart</button>
			</div>
			<br />
			<div className="des_pp">
				About
				<div className="des_cont">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</div>
			</div>
		</div>
	);
};
