import React from 'react';
import bookcover from '../img/bookcover.jpg';
import bin from '../img/bin.svg'
import { FaStar } from 'react-icons/fa';

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
			{this.state.orders.map((e) =>(
					<div className="order_det">
						<div className = "bookDet">
							<div className = "cover">
								<img src = {`/covers/${e.cover_img}`} alt = " " />
							</div>
							<div className = "bookName">
								<div className = "title">
									{e.title} - {e.s_title}
								</div>
								<div className = "branch">
									{e.branch}
						 	  </div>
								<div className="price_pp">
								Rating : 
								<span>
									{[ ...Array(5) ].map((star, i) => {
										const ratingValue = i + 1;
		
										return (
											<label>
											<span className = "for_pc">
												<FaStar
													color={ratingValue <= e.rating ? '#ffc107' : '#D3D3D3'}
													size={20}
												/>
												</span>
												<span className = "for_mob">
												<FaStar
													color={ratingValue <= e.rating ? '#ffc107' : '#D3D3D3'}
													size={10}
												/>
												</span>
											</label>
										);
									})}
								</span>
							</div>
							<div className = "copies">
								Copies Sold : {e.copies}
							</div>
							<div className = "btn">
								<button>See in Library</button>
							</div>	
							</div>
						</div>		
						<div className = "delete">
							<div>
								Delete
							</div>
						
						</div>
					</div>		
			))}
				</div>
		)
	}
}


