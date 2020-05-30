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
        
        this.Total_Value = this.Total_Value.bind(this)
        this.Total = this.Total.bind(this)

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

            fetch('/api/user', {
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
                               coins : data.Coins
                            };
                        });
                    }
                });

            this.state = {
                Cart_Product : [],
                coins : null
                        }
        }
        Total_Value(data){
            let total = 0
            for(let i=0;i<data.length;i++){
              total = total + data[0].Value
            }
            return total
         }

         Total(coins){
             let overall = this.Total_Value(this.state.Cart_Product) - coins
             return overall;
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
                <br />
                <hr />
                <div>
                <div className = "title_tab_total">
                            Total Value  
                        <div className = "title_ab_total_value">
                            ${this.Total_Value(this.state.Cart_Product)}
                        </div>
                    </div>
                    <div className = "user_coins">
                        Your Coins  
                        <span className = "user_coins_value">
                            - ${this.state.coins}
                        </span>
                    </div>
                    <div className = "user_coins">
                         Order Total  
                        <div className = "user_coins_value">
                            ${this.Total(this.state.coins)}
                        </div>
                    </div>
                        <div className = "checkout_div">
                            <button className = "checkout_btn">
                                Proceed To Checkout
                            </button>
                        </div>
                        <div className = "checkout_div">
                        <button className = "checkout_btn_pay">
                            Pay with PayTM
                        </button>
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
                Cart_Product : []            }
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
                    total = {this.Total_Value}
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
                ${props.Value}
            </div>
            </div>
            </div>
    )
}
