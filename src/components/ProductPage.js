import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import bookcover from '../img/bookcover.jpg';
import CateCon from './CateCon';
import Modal from 'react-modal';
import propic from '../img/propic.svg';

export default class ProductPage extends React.Component {
	SetRating(ratingValue) {
		this.setState(() => {
			return {
				star_Value: ratingValue
			};
		});
	}

	alugobi = () => {
		this.setState((prevState) => {
			return {
				open: !prevState.open
			};
		});
	};
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
			title: null,
			s_title: null,
			Value: null,
			cover_img: null,
			description: null,
			refId: null,
			inLibrary: true,
			id: null,
			tag: null,
			rating: null,
			open: false,
			cover_img: null,
			star_Value: null,
			sample_file: null
		};
	}

	async componentDidMount() {
		const { refId } = this.props.match.params;

		fetch(`/api/products/specific/${refId}`).then((res) => res.json()).then((data) => {
			console.log(data);
			if (data) {
				this.setState(() => {
					return {
						id: data.id,
						title: data.title,
						s_title: data.s_title,
						Value: data.Value,
						cover_img: data.cover_img,
						description: data.Description,
						refId: data.refrenceId,
						tag: data.tag,
						rating: data.rating,
						cover_img: data.cover_img,

						sample_file: data.sample_pro
					};
				});
			}
		});

		let data = await fetch(`/api/products/search_item/${refId}`);
		let res = await data.json();
		if (res == true) {
			this.setState(() => {
				return {
					inLibrary: false
				};
			});
		}
	}

	addToCart = (refId) => {
		let data = { refrenceId: refId };
		postData('/api/products/AddToCart', data);
	};

	render() {
		return (
			<div>
				<div className="main_body_pro_page">
					<BookImg cover_img={this.state.cover_img} />
					<Content
						title={this.state.title}
						s_title={this.state.s_title}
						Value={this.state.Value}
						description={this.state.description}
						buy={this.buy}
						refId={this.state.refId}
						addToCart={this.addToCart}
						inLibrary={this.state.inLibrary}
						id={this.state.id}
						tag={this.state.tag}
						rating={this.state.rating}
						cover_img={`/covers/${this.state.cover_img}`}
						sample_file={this.state.sample_file}
					/>
				</div>
				<hr />
				<div className="review_pp_heading">
					<h1>Reviews About Product</h1>
					<button className="modal_btn" onClick={this.alugobi}>
						Post your review
					</button>
					{this.state.id && <Reviews pro_id={this.state.id} rating={this.state.rating} />}
				</div>

				<Modal
					isOpen={this.state.open}
					className="modal"
					contentLabel="Selected Option"
					onRequestClose={this.alugobi}
				>
					<div className="pic_modal">
						<img src={`/covers/${this.state.cover_img}`} alt=" " />
						<div className="modal_title">
							{this.state.title} - {this.state.s_title}
						</div>
						<div>
							<h2 className="rate_modal">Rate Product</h2>
							<div className="star_cont">
								{[ ...Array(5) ].map((star, i) => {
									const ratingValue = i + 1;

									return (
										<label>
											<input
												className="inp"
												type="radio"
												value={ratingValue}
												onClick={() => {
													this.SetRating(ratingValue);
												}}
											/>
											<FaStar
												color={ratingValue <= this.state.star_Value ? '#ffc107' : '#D3D3D3'}
												className="star"
												size={20}
											/>
										</label>
									);
								})}
							</div>
						</div>

						<div className="review_body">
							<h2 className="rate_modal">Post Your Review</h2>
							<input type="text" placeholder="Write your review about product" id="body_input" />
						</div>
						<div className="submit_div">
							<button
								className="submit_modal"
								onClick={() => {
									this.alugobi();
									let data3 = {
										comment: document.getElementById('body_input').value,
										rating: this.state.star_Value,
										productId: this.state.id
									};
									postData('/api/review', data3).then((data) => {
										if (!data) {
											alert('internal error');
										}
									});
								}}
							>
								Submit
							</button>
						</div>
					</div>
				</Modal>
				<hr />
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
class Content extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inLibrary: true,
			rating: null
		};

		let data = {
			id: this.props.id
		};

		postData('/api/products/search_item', data).then((data) => {
			if (data) {
				this.setState(() => {
					return {
						inLibrary: false
					};
				});
			}
		});
	}
	render() {
		return (
			<div className="Main_CT">
				<div>
					{this.props.title}
					<div className="author">
						<span className="by">By</span> {this.props.s_title}
						<hr className="hr" />
					</div>
					<div className="price_pp">
						Rating :
						<span>
							{[ ...Array(5) ].map((star, i) => {
								const ratingValue = i + 1;

								return (
									<label>
										<FaStar
											color={ratingValue <= this.props.rating ? '#ffc107' : '#D3D3D3'}
											size={20}
										/>
									</label>
								);
							})}
						</span>
					</div>
					<div className="price_pp">
						Type : <span className="type_value">{this.props.tag}</span>
					</div>
					<div className="price_pp">
						Price :<span className="price_val">{this.props.Value} coins</span>
					</div>
				</div>

				<div>
					{this.props.inLibrary ? (
						<div className="buy_pp ">
							<button className="buy_btn_pp" onClick={this.props.buy}>
								Buy Now
							</button>
							<button
								className="adc_btn_pp "
								onClick={() => {
									this.props.addToCart(this.props.refId);
								}}
							>
								Add to Cart
							</button>
							{this.props.sample_file && (
								<button
									className="adc_btn_pp "
									onClick={() => {
										window.location.href = `/files/${this.props.sample_file}.pdf`;
									}}
								>
									See Sample
								</button>
							)}
						</div>
					) : (
						<div className="buy_pp ">
							<button
								className="buy_btn_pp"
								onClick={() => {
									window.location.href = '/My-Library';
								}}
							>
								See in Library
							</button>
						</div>
					)}
				</div>
				<br />
				<div className="des_pp">
					About
					<div className="des_cont">{this.props.description}</div>
				</div>
			</div>
		);
	}
}

class Reviews extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			reviews: [],
			user_pic: null
		};
		if (this.props.pro_id) {
			const data = {
				username: this.props.username
			};
			fetch(`/api/review/${this.props.pro_id}`, data).then((res) => res.json()).then((data) => {
				if (data) {
					this.setState(() => {
						return {
							reviews: data.reverse()
						};
					});
				}
			});
		}
	}
	render() {
		return (
			<div className="review_section">
				<div className="revsec_con">
					{this.state.reviews.map((review) => {
						return (
							<div className="rev_con">
								<div className="user_det">
									<img src={propic} />
									<span className="review_username">{review.userId}</span>
								</div>
								<div>
									{[ ...Array(5) ].map((star, i) => {
										const ratingValue = i + 1;

										return (
											<label>
												<FaStar
													color={ratingValue <= this.props.rating ? '#ffc107' : '#D3D3D3'}
													size={20}
												/>
											</label>
										);
									})}
								</div>
								<div>{review.comment}</div>

								<br />
								<br />
							</div>
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
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}
