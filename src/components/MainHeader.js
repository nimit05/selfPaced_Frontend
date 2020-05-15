import React from 'react';
import cart from '../img/cart.svg';
import down from '../img/down.svg';

class MainHeader extends React.Component {
	render() {
		return (
			<div className="MainHeader">
				<div className="cat_btn_con frse">
					<button id="cat_btn_drop">
						<span>CATEGORIES</span> <img src={down} alt="" />
					</button>
					{/* <button className="bestseller_btn">Best Seller</button>
					<button className="old_books_btn">Old Books</button>
					<button className="ebooks_btn">E-books</button> */}
				</div>
				<div className="user_btn_con frse">
					<img src={cart} alt=" " />
					<button
						id="login_btn"
						onClick={() => {
							window.location.href = '/login.html';
						}}
					>
						Login
					</button>
					<button
						id="reg_btn"
						onClick={() => {
							window.location.href = '/regis.html';
						}}
					>
						Register
					</button>
				</div>
			</div>
		);
	}
}
export default MainHeader;
