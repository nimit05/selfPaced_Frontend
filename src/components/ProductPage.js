import React from 'react';
import bookcover from '../img/bookcover.jpg';
import CateCon from './CateCon';

export default class ProductPage extends React.Component {
	buy = async () => {
		let data = {
			refrenceId: this.props.match.params.refId
		};
		let pro = await postData('/api/products/Buy', data);
		console.log(pro);
		if (pro) {
			alert('buyed');
		}
	};

	constructor(props) {
		super(props);

		this.state = {
			BookName: null,
			BookAuthor: null,
			Value: null,
			cover_img: null,
			description: null,
			refId : null
		};
	}

	componentDidMount() {
		const { refId } = this.props.match.params;

		fetch(`/api/products/specific/${refId}`).then((res) => res.json()).then((data) => {
			console.log(data);
			if (data) {
				this.setState(() => {
					return {
						BookName: data.BookName,
						BookAuthor: data.BookAuthor,
						Value: data.Value,
						cover_img: data.cover_img,
						description: data.Description,
						refId : data.refrenceId
					};
				});
			}
		});
	}
	addToCart = (refId) => {
		let data = { refrenceId: refId };
		postData('/api/products/AddToCart', data);

}

	render() {
		return (
			<div>
				<div className="main_body_pro_page">
					<BookImg cover_img={this.state.cover_img} />
					<Content
						BookName={this.state.BookName}
						BookAuthor={this.state.BookAuthor}
						Value={this.state.Value}
						description={this.state.description}
						buy={this.buy}
						refId = {this.state.refId}
						addToCart = {this.addToCart}
					/>
				</div>
				<CateCon />
				<CateCon />
				<CateCon />
			</div>
		);
	}
}

const BookImg = (props) => {
	return (
		<div className="Main_BI">
			<img className="product_img_pp" src={`/covers/${props.cover_img}`} alt=" " />
		</div>
	);
};
const Content = (props) => {
	return (
		<div className="Main_CT">
			<div>
				{props.BookName}
				<div className="author">
					<span className="by">By</span> {props.BookAuthor}
					<hr className="hr" />
				</div>
				<div className="price_pp">
					Price :<span className="price_val">{props.Value} coins</span>
				</div>
			</div>
			<div className="buy_pp ">
				<button className="buy_btn_pp" onClick={props.buy}>
					Buy Now
				</button>
				<button className="adc_btn_pp " onClick = {() => {
					props.addToCart(props.refId)
				}}>Add to Cart</button>
			</div>
			<br />
			<div className="des_pp">
				About
				<div className="des_cont">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				</div>
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
	return response.json(); // parses JSON response into native JavaScript objects
}
