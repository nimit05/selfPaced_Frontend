import React from 'react';
import bookcover from '../img/bookcover.jpg';

// props to send to productbox are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}

export default class CateCon_for_profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			proArray: []
		};

		fetch('/api/user/products', {
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
			if(data){
			this.setState(() => {
				return { proArray: data };
			});
		}
		});
	
	}
	render() {
		return (
			<div className="CateCon">
				<div className="cate_head">
					<h1 className="heading_mob_pp">My Products</h1>
					<h3 className="see_mob_pp">See More -></h3>
				</div>

				<div className="cate_body">
					{this.state.proArray.map((e) => {
						return (
							<Productbox
								title={e.BookName}
								tag={e.tag}
								stitle={e.BookAuthor}
								short_des={e.Edition}
								price={e.Value}
								refId={e.refrenceId}
								bookimg={`/covers/${e.cover_img}`}
							/>
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
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

// props to send are {1 title 2 tag 3 bookimg 4 stitle 5 short_des 6 price}
class Productbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product_file : null
		}
	}

	render() {
		return (
			<div className="productcont_for_profile">
				<div className="tag_for_profile">
					<strong>{this.props.tag}</strong>
				</div>
				<div
					className="product_img"
					onClick={() => {
						window.location.href = `/productpage/${this.props.refId}`
					}}
				>
					<img className="bookcover" src={this.props.bookimg ? this.props.bookimg : bookcover} alt=" " />
				</div>
				<div className="product_body_for_profile">
					<h3>{this.props.title}</h3>
					<h6>({this.props.stitle})</h6>
					<p>{this.props.short_des}</p>
					<h1>
						{this.props.price} <span>coins</span>
					</h1>
				</div>
			</div>
		);
	}
}
