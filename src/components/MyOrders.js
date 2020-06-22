import React from 'react';
import bookcover from '../img/bookcover.jpg';

export default class MyOrders extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			orders: []
		};

		fetch('/api/user/myorders').then((res) => res.json()).then((data) => {
			if (data) {
				this.setState(() => {
					return {
						orders: data
					};
				});
			}
		});
	}
	render() {
		return (
			<div className="my_order_div">
				<div className="ordered_pro">
					{this.state.orders.map((e) => {
						return (
							<div>
								<Productbox
									title={e.item.title}
									tag={e.item.tag}
									stitle={e.item.s_title}
									short_des={e.item.short_des}
									price={e.item.Value}
									refId={e.item.refrenceId}
									bookimg={`/covers/${e.item.cover_img}`}
								/>
								<div className="order_det">
									<div>Ordered on</div>
									<div className="order_date">{e.createdAt}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

class Productbox extends React.Component {
	constructor(props) {
		super(props);
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
						window.location.href = `/productpage/${this.props.refId}`;
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
