import React from 'react';
import home_icon from '../img/icon.svg'
import cart from '../img/cart.svg'
import plus from '../img/plus.svg'
import lib from '../img/lib.svg'
import picpro from '../img/propic.svg';

export default class Base_Header extends React.Component {

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
        {this.state.islogin?(<div> <img   onClick = {() => {
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
                </div>)}
               
        </div>
        </div>
    )
            }
}

