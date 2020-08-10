import React from 'react';
import bookcover from '../img/bookcover.jpg';

export default class MyOrders extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			orders: []
		};

		fetch('/api/user/products').then((res) => res.json()).then((data) => {
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
								<div className="order_det">
									<div>Ordered on</div>
									<div className="order_date">{e.createdAt}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		)
	}
}


