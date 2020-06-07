import React from 'react';
import home_icon from '../img/icon.svg'
import cart from '../img/cart.svg'
import plus from '../img/plus.svg'
import lib from '../img/lib.svg'
import picpro from '../img/propic.svg';
import { GoogleLogin } from 'react-google-login';


export default class Base_Header extends React.Component {
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
				}
			});
	};

    constructor(props){
        super(props)

        fetch('/api/user').then((res) => res.json()).then((data) => {
			console.log(data);
			if (data) {
				this.setState(() => {
					return {
						islogin: true,
					};
				});
			}
		});

        this.state = {
            islogin : false
        }
    }


    render(){
    return(
        <div className = "base_header">
        <div className = "img_cont_bh">
        {this.state.islogin?(<div className = "icon_bh"> <img   onClick = {() => {
            window.location.href = "/"
        }}  
        className = "home_svg "
        src = {home_icon} 
        alt = " " />

        <img   onClick = {() => {
            window.location.href = "/myCart"
        }}  
        
        src = {cart} 
        alt = " " />

        <img   onClick = {() => {
            window.location.href = "/sell-your-product"
        }}  
        src = {plus} 
        alt = " " />

        <img   onClick = {() => {
            window.location.href = "/My-Library"
        }}  
        src = {lib} 
        alt = " " />

        <img   onClick = {() => {
            window.location.href = "/myprofile"
        }}  
        src = {picpro} 
        alt = " " />
        
    </div>):(<div className = "reg_btn_div">
                <button
                                        id="reg_btn_bh"
                                        onClick={() => {
                                            window.location.href = '/regis.html';
                                        }}
                                    >
                                        Register/Login
                                    </button>
                                    <GoogleLogin
                                    clientId="462910295856-266vqnfa4rummelmbin515fqa070eo7j.apps.googleusercontent.com"
                                    buttonText="Continue with Google"
                                    style={{ backgroundColor: 'blue' }}
                                    className="gbtn"
                                    onSuccess={this.responseGoogle}
                                    onFailure={() => {
                                        alert('Error in google login ');
                                    }}
                                    cookiePolicy={'single_host_origin'}
                                />
                </div>)}
               
        </div>
        </div>
    )
            }
}

