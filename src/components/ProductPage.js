import React from 'react';
// import Header from './Header'
// import cart from '../img/cart.svg';
import bookcover from '../img/bookcover.jpg';
import Base_Header from '../Hooks/Base_header'


// import pblogo from '../img/pblogo.png';

export default class ProductPage extends React.Component {
	constructor(props){
		super(props)

		fetch(`/api/products/specific/${window.location.href.substr(34)}`, {
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
							BookName : data.BookName,
							BookAuthor : data.BookAuthor,
							Value : data.Value,
							cover_img : data.cover_img,
							description : data.Description,

						};
					});
				}
			});
	  
		
		this.state = {
			BookName : null,
			BookAuthor : null,
			Value : null,
			cover_img : null,
			description : null,

		}

			
	}
	render() {
		return (
			<div>
				<div className="main_body_pro_page">
					<BookImg cover_img = {this.state.cover_img}  />
					<Content  BookName = {this.state.BookName} BookAuthor = {this.state.BookAuthor} 
					Value = {this.state.Value} description = {this.state.description} />
				</div>
				<Base_Header />
			</div>
		);
	}
}

const BookImg = (props) => {
	return (
		<div className="Main_BI">
			<div className="book_cont">
				<img className="product_img_pp" src={`http://localhost:4444/covers/${props.cover_img}`} alt=" " />
			</div>
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
				<button className="buy_btn_pp">Buy Now</button>
				<button className="adc_btn_pp ">Add to Cart</button>
			</div>
			<br />
			<div className="des_pp">
			
				<div className="des_cont">
					{props.description}
				</div>
			</div>
		</div>
	);
};

async function postData( url = '', data = {}) {
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
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}
