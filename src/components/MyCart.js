import React from 'react';
import Header from './Header'

export default class MyCart extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Payment_tab />
                <Heading />
            </div>
        )
    }
} 

 class Payment_tab extends React.Component{
    render(){
        return(
            <div className = "payment_tab">
            
            
            </div>
        )
    }
}

class Heading extends React.Component{
    constructor(props) {
		super(props);

		fetch('/api/user/Cart', {
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
				if (data) {
					this.setState(() => {
						return {
                           Cart_Product : data
						};
					});
				}
            });
            this.state = {
                Cart_Product : []
            }
        }
    render(){
        return(
            <div className = "heading_cart">
                <h1 className = "heading_left_cart" >Your Cart</h1>
                <div >
                {this.state.Cart_Product.map((product) => {
                    return (
                    <Product_cart 
                    BookName = {product.BookName}
                    BookAuthor = {product.BookAuthor}
                    Value = {product.Value}
                    tag = {product.tag}
                    />
                    )
                })}
                </div>
            </div>
        )
    }
}

const Product_cart = (props) => {
    return(
        <div className = "product_cart_cont">
        <div className = "product_cart">
        <div className = "img_cart">
         
        </div>
        <div className = "details_cart">
            <span>{props.BookName} -</span>
             <span>{props.BookAuthor}</span>
             
            <div className = "type_product_cart">
          Type : <span className = "type_value">{props.tag}</span>
        </div>
        <div className = "cart_product_price">
             ${props.Value} <span className = "cart_coins">coins</span>
            </div>
            <div className = "btn_cart_div">
            <button className = "cart_remove_button">
             Remove
            </button>
            </div>
            
        </div> 
    </div>
    <br />
    <br />
    <hr className = "hr_cart" />
   </div>
    )
}