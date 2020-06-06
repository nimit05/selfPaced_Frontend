import React from 'react';
import bookcover from '../img/bookcover.jpg';
import CateCon from './CateCon';

export default class ProductPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			BookName: null,
			BookAuthor: null,
			Value: null,
			cover_img: null,
			description: null
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
						description: data.Description
					};
				});
			}
		});
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
				<button className="buy_btn_pp">Buy Now</button>
				<button className="adc_btn_pp ">Add to Cart</button>
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
