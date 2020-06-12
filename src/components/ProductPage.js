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
			refId: null,
<<<<<<< HEAD
			id : null
=======
			inLibrary: false
>>>>>>> 900917b039c721aaf2e2129c5e3f57db77a3a305
		};
	}

	componentDidMount() {
		const { refId } = this.props.match.params;

		fetch(`/api/products/specific/${refId}`).then((res) => res.json()).then((data) => {
			console.log(data);
			if (data) {
				this.setState(() => {
					return {
						id : data.id,
						BookName: data.BookName,
						BookAuthor: data.BookAuthor,
						Value: data.Value,
						cover_img: data.cover_img,
						description: data.Description,
						refId: data.refrenceId,
					};
				});
			}
		});
<<<<<<< HEAD
		
=======

		let data4 = {
			refrenceId: refId
		};

		fetch(`/api/products/search_item/${refId}`).then((data) => {
			if (data) {
				this.setState(() => {
					return {
						inLibrary: true
					};
				});
			}
		});
>>>>>>> 900917b039c721aaf2e2129c5e3f57db77a3a305
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
						BookName={this.state.BookName}
						BookAuthor={this.state.BookAuthor}
						Value={this.state.Value}
						description={this.state.description}
						buy={this.buy}
						refId={this.state.refId}
						addToCart={this.addToCart}
<<<<<<< HEAD
						id = {this.state.id}
=======
						inLibrary={this.state.inLibrary}
>>>>>>> 900917b039c721aaf2e2129c5e3f57db77a3a305
					/>
					<Comments 
					id = {this.state.id}
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
class Content extends React.Component{
constructor(props){
	super(props)

	this.state = {
		inLibrary : true
	}

	let data = {
		id : this.props.id
	}

	  postData('/api/products/search_item' ,data ).then((data) => {
		if(data){
			this.setState(() => {
				return{
					inLibrary : false
				}
			})
		}
	})
}
	render(){
	return (
		<div className="Main_CT">
			<div>
				{this.props.BookName}
				<div className="author">
					<span className="by">By</span> {this.props.BookAuthor}
					<hr className="hr" />
				</div>
				<div className="price_pp">
					Price :<span className="price_val">{this.props.Value} coins</span>
				</div>
			</div>

			<div>
<<<<<<< HEAD
			{this.state.inLibrary ? (<div className="buy_pp ">
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
		</div>) : (<div>
			
				<button>See in Library</button>
			</div>)}
=======
				{props.inLibrary ? (
					<div className="buy_pp ">
						<button className="buy_btn_pp" onClick={props.buy}>
							Buy Now
						</button>
						<button
							className="adc_btn_pp "
							onClick={() => {
								props.addToCart(props.refId);
							}}
						>
							Add to Cart
						</button>
					</div>
				) : (
					<div>
						<button>See in Library</button>
					</div>
				)}
>>>>>>> 900917b039c721aaf2e2129c5e3f57db77a3a305
			</div>
			<br />
			<div className="des_pp">
				About
				<div className="des_cont">{this.props.description}</div>
			</div>
		</div>
	);
		}
};

class Comments extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			body : null,
			username : null
		}

		let data = {
			Product_id : this.props.id
		}
		postData('/api/comment/all' , data).then((data) => {
			if(data){
				this.setState(() => {
					return{
						body : data.body,
						username : data.userId
					}
				})
			}
		})

	}
	render(){
		return(
			<div>
				<div>
				<h1>{this.state.username} : {this.state.body}</h1>
				</div>
			</div>
		)
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
	return response.json(); // parses JSON response into native JavaScript objects
}
<<<<<<< HEAD
=======
async function postData2(url = '', data = {}) {
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
		referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		// body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}
>>>>>>> 900917b039c721aaf2e2129c5e3f57db77a3a305
