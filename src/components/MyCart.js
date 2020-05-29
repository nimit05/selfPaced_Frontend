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
            <div className = "payment_tab">
                <div className = "payment_tab_heading" >
                    ORDER SUMMARY
                </div>
                <hr />
                <div className = "payment_promo">
                    HAVE A PROMO CODE?
                </div>
                <div>
                    {this.state.Cart_Product.map((product) => {
                        return(
                            <Title_div 
                            title = {product.BookName }
                            Value = {product.Value}
                            />
                            )
                     })}
                </div>
                <br />
                <hr />
                <div>
                Total
                <div className = "total_price">
                  {this.state}
                </div>
                </div>
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
            <div className = "heading_cart" >
                <h1 className = "heading_left_cart" >Your Cart</h1>
                <div >
                {this.state.Cart_Product.map((product) => {
                    return (
                    <Product_cart 
                    BookName = {product.BookName}
                    BookAuthor = {product.BookAuthor}
                    Value = {product.Value}
                    tag = {product.tag}
                    refrenceId = {product.refrenceId}
                    />
                    )
                })}
                </div>
            </div>
        )
    }
}

class Product_cart extends React.Component {
    render(){
    return(
        <div className = "product_cart_cont">
        <div className = "product_cart">
        <div className = "img_cart">
         
        </div>
        <div className = "details_cart">
            <span>{this.props.BookName} -</span>
             <span>{this.props.BookAuthor}</span>
             
            <div className = "type_product_cart">
          Type : <span className = "type_value">{this.props.tag}</span>
        </div>
        <div className = "cart_product_price">
             ${this.props.Value} <span className = "cart_coins">coins</span>
            </div>
            <div className = "btn_cart_div">
            <button className = "cart_remove_button" >
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
}

const Title_div = (props) => {
    return(
        <div className = "title_div">
            <div className = "title_div_name">
                {props.title}  
                 <div className = "title_div_price">
                {props.Value}
            </div>
            </div>
            </div>
    )
}
