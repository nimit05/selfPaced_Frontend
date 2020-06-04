import React, { useState } from 'react';
// import homePage from './HomePage';
import pblogo from '../img/pblogo.png';
import cart from '../img/cart.svg';
import lib from '../img/lib.svg';
import plus from '../img/plus.svg';
import propic from '../img/propic.svg';
import OutsideAlerter from '../Hooks/OutsideAlerter';

class Header extends React.Component {
	findName = () => {
		let c = document.getElementById('main_search_inp').value;
		if (c === '') {
			// eslint-disable-next-line
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
		// eslint-disable-next-line
		this.state.searchNames = arr;

		this.setState(() => {
			return {
				serachNames: arr
			};
		});
	};

	constructor(props) {
		super(props);

		fetch('/api/user', {
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
			// body: JSON.stringify(data) // body data type must match "Content-Type" header
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data) {
					this.setState(() => {
						return {
							islogin: true,
							username: data.username
						};
					});
				}
			});

		this.state = {
			islogin: false,
			username: null,
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
									return false;
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
								<img
									onClick={() => {
										window.location.href = '/sell-your-product';
									}}
									src={plus}
									alt=" "
								/>
								<span class="tooltiptext">Sell Items</span>
							</div>
							<div
								class="tooltip"
								onClick={() => {
									window.location.href = '/myCart';
								}}
							>
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
									<Navbar>
										<Navitem icon={<img src={propic} alt=" " />} name={this.state.username}>
											<Dropdown />
										</Navitem>
									</Navbar>
								</div>
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

const Navbar = (props) => {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">{props.children}</ul>
		</nav>
	);
};

const Navitem = (props) => {
const {ref,open,setOpen} = OutsideAlerter(false)


const handleClick = () => {
	setOpen((prevState) => !prevState)
}
  return(
      <li className = "nav-item" onClick = {handleClick} id = "nav-item" >
      
        <a href ="#" className = "icon-button" >
            {props.icon}
        </a>
        
		{open && <div ref = {ref} className = "ref">
			{props.children}
		</div>}
        <span className= "name" >{props.name}</span>
      </li>
  )
}

const Dropdown = () => {
	function Dropdownitem(props) {
		return <a className="menu-item">{props.children}</a>;
	}

	return (
		<div className="dropdown">
			<div onClick={() => (window.location.href = '/myprofile')}>
				<Dropdownitem>
					<span className="span_dd">My Profile</span>
				</Dropdownitem>
			</div>
			<div>
				<Dropdownitem>
					<span className = "span_dd">My Products</span>
				</Dropdownitem>
			</div>
			<Dropdownitem>
				<span
					onClick={() => {
						fetch('/api/login/out', {
							method: 'DELETE'
						});
						window.location.reload();
					}}
					className="span_dd"
				>
					Log Out
				</span>
			</Dropdownitem>
		</div>
	);
};

export default Header;
