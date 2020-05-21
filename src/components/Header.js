import React from 'react';
// import homePage from './HomePage';
import pblogo from '../img/pblogo.png';
import cart from '../img/cart.svg';
import lib from '../img/lib.svg';
import plus from '../img/plus.svg';
import propic from '../img/propic.svg';

class Header extends React.Component {
	findName = () => {
		let c = document.getElementById('main_search_inp').value;
		if (c === '') {
			this.state.searchNames = [];
			this.setState(() => {
				return {
					serachNames: []
				};
			});
			return;
		}
		let arr = this.state.allItemsName.filter((str) => {
			if (str.indexOf(c) > -1) {
				return true;
			} else {
				return false;
			}
		});

		this.state.searchNames = arr;

		this.setState(() => {
			return {
				serachNames: arr
			};
		});
	};

	constructor(props) {
		super(props);

		this.state = {
			islogin: true,
			allItemsName: [
				'tushar',
				'tushar',
				'tushcsdcadscdas fd kfjkladsjf eir dalcilaejclelcjsdjkc dfjar',
				'tushar',
				'tushar',
				'tushar',
				'tushar',
				'tushar',
				'tushar',
				'bahfd',
				'nimit ',
				'nashedi'
			],
			searchNames: []
		};
	}

	render() {
		return (
			<div className="header_cont">
				<div
					className="header_left"
					onClick={() => {
						window.location.href = '/';
					}}
				>
					<img src={pblogo} alt=" " />
					<b>PuraniBooks</b>
					<span>.com</span>
				</div>

				<div className="header_center">
					<span />
				</div>
				<div className="user_btn_con frse">
					<div className="parent">
						<input onChange={this.findName} id="main_search_inp" placeholder="Search" type="text" />
						<div className="searchRe">
							{this.state.searchNames.map((e, i) => {
								if (i > 5) {
									return;
								} else {
									return <li key={i}>{e}</li>;
								}
							})}
						</div>
					</div>

					{this.state.islogin ? (
						<div className="frse logindet">
							<div class="tooltip">
								{' '}
								<img src={plus} alt=" " />
								<span class="tooltiptext">Sell Items</span>
							</div>
							<div class="tooltip">
								{' '}
								<img src={cart} alt=" " />
								<span class="tooltiptext">Cart</span>
							</div>
							<div class="tooltip">
								{' '}
								<img src={lib} alt=" " />
								<span class="tooltiptext">My Library</span>
							</div>
							<div class="tooltip">
								{' '}
								<div className="profile">
									<h1>1231 coins</h1>
									<img src={propic} alt=" " />
								</div>
								<span class="tooltiptext">My Profile</span>
							</div>
						</div>
					) : (
						<div>
							{' '}
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
					)}
				</div>
			</div>
		);
	}
}

export default Header;
