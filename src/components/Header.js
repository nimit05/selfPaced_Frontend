import React, { useRef , useState , useEffect} from 'react';
// import homePage from './HomePage';
import mainLOGO from '../img/name-logo.png';
import cart from '../img/cart.svg';
import lib from '../img/lib.svg';
import plus from '../img/plus.svg';
import propic from '../img/propic.svg';
import money from '../img/money.svg';
import OutsideAlerter from '../Hooks/OutsideAlerter';
import { GoogleLogin } from 'react-google-login';

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
	responseGoogle = (response) => {
		fetch('/api/register/google', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ tokenId: response.tokenId })
		})
			.then((res) => res.json())
			.then((parJson) => {
				if (parJson.email) {
					window.location.href = '/';
				} else if (parJson.error) {
					alert('error occured');
				}
			});
	};

	findbook() {
		if (document.getElementById('main_search_inp').value != null) {
			var input = document.getElementById('main_search_inp');
			input.addEventListener('keyup', function(event) {
				if (event.keyCode == 13) {
					event.preventDefault();
					if (!document.getElementById('main_search_inp').value.trim()) {
						window.location.href = '/';
					} else {
						window.location.href = `/Search_items/${document
							.getElementById('main_search_inp')
							.value.trim()}`;
					}
				}
			});
		}
	}

	constructor(props) {
		super(props);

		fetch('/api/user').then((res) => res.json()).then((data) => {
			console.log(data);
			if (data) {
				this.setState(() => {
					return {
						islogin: true,
						username: data.username,
						coins: data.Coins,
						pro_pic: data.pro_img
					};
				});
			}
		});

		fetch('/api/login/isAdmin').then((res) => res.json()).then((data) => {
			if (data == true) {
				this.setState(() => {
					return {
						isAdmin: true
					};
				});
			}
		});

		this.state = {
			islogin: false,
			username: null,
			pro_pic: null,
			allItemsName: [],
			searchNames: [],
			isAdmin: false
		};
	}

	render() {
		return (
			<div className="header_cont">
				<div className = "header_logo">
					<div
						className="header_left"
						onClick={() => {
							window.location.href = '/';
						}}
					>
						<img src={mainLOGO} alt=" " />
					</div>
				</div>

				<div className="parent search_con">
				
					<input
						onChange={this.findName}
						id="main_search_inp"
						placeholder="Search"
						type="text"
						onClick={this.findbook}
					/>
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

				<div className="user_btn_con frse">
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
							<div
								class="tooltip"
								onClick={() => {
									window.location.href = '/My-Library';
								}}
							>
								{' '}
								<img src={lib} alt=" " />
								<span class="tooltiptext">My Library</span>
							</div>
						
							<div class="tooltip">
								{' '}
								<div className="profile" >
									<Navbar>
										<Navitem
											icon={
												<img
													id="pro_pic"
													src={this.state.pro_pic ? this.state.pro_pic : propic}
													alt=" "
												/>
											}
											coins={this.state.coins}
											
										>
											<Dropdown isAdmin = {this.state.isAdmin} />
										</Navitem>
									</Navbar>
								</div>
							</div>
						</div>
					) : (
						<div className="fr">
							<button
								id="reg_btn"
								onClick={() => {
									window.location.href = '/regis.html';
								}}
							>
								Register/Login
							</button>
							<GoogleLogin
								clientId="1059529825547-aplj58mp67dhb9j5smat7g5jjf3flgl2.apps.googleusercontent.com"
								buttonText="Continue with Google"
								style={{ backgroundColor: 'blue' }}
								className="gbtn"
								onSuccess={this.responseGoogle}
								// onFailure={() => {
								// 	alert('Error in google login ');
								// }}
								cookiePolicy={'single_host_origin'}
							/>
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




    const ref = useRef(null)
	const [open, setOpen ] = useState(false);

	const handleOutsideClick = (event) => {
		if(ref.current && !ref.current.contains(event.target)){
		setOpen((prevState) => !prevState);
		}
	}

	
		document.addEventListener("click",handleOutsideClick ,true)
	
	return (
		<li className="nav-item" onClick={() => {
		setOpen((prevState) => !prevState);
		}} id="nav-item">
		<span className="name" id="coins">
				<img src={money} alt="" />
				{props.coins}
			</span>
			<a href="#" className="icon-button" id = 'helo' >
				{props.icon}
			</a>

			{open && (
				<div ref={ref} className="ref">
					{props.children}
				</div>
			)}
		</li>
	);
};

const Dropdown = (props) => {
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
			<div />
			<div
				onClick={() => {
					window.location.href = '/myorders';
				}}
			>
				<Dropdownitem>
					<span className="span_dd">My orders</span>
				</Dropdownitem>
			</div>
			{props.isAdmin && (	
				<Dropdownitem>
				<span
					onClick={() => {
						window.location.href = '/Admin_Panel';
					}}
					className="span_dd"
				>
					Admin Pannel
				</span>
			</Dropdownitem>)}
		
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
