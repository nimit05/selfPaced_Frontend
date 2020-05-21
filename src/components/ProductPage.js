import React from 'react'
// import Header from './Header'
// import MainHeader from './MainHeader'
import cart from '../img/cart.svg';
import down from '../img/down.svg';
import pblogo from '../img/pblogo.png';

export default class ProductPage extends React.Component{
 
    
    render(){
        return(
            <div>
            <Header />
            <MainHeader />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
            <div className="header_left_PP">
            <img src={pblogo} alt=" " />
            <b>PuraniBooks</b>
            <span>.com</span>
        </div>
            </div>
        )
    }
}

const MainHeader = (props) => {
	
		return (
            
            <div className="MainHeader_PP">
				<div className="cat_btn_con frse">
					<button id="cat_btn_drop" onClick = {props.ListItem} >
						<span>CATEGORIES</span> <img src={down} alt="" />
					</button>
					<button className="bestseller_btn">Best Seller</button>
					<button className="new_books_btn">New Books</button>
					<button className="old_books_btn">Old Books</button>
					<button className="ebooks_btn">E-books</button>
				</div>
				<div className="user_btn_con frse">
					<img src={cart} alt=" " />
					<button id="login_btn" onClick = {() => {
						window.location.href = "/login.html";

					}}>Login</button>
					<button id="reg_btn" onClick = {() => {
                 window.location.href = "/regis.html";

					}}>Register</button>
				</div>
			</div>
		);
	}
