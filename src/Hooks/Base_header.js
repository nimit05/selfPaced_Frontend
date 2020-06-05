import React from 'react';
import home_icon from '../img/icon.svg'
import cart from '../img/cart.svg'
import plus from '../img/plus.svg'
import lib from '../img/lib.svg'
import picpro from '../img/propic.svg';

const Base_Header = () => {
    return(
        <div className = "base_header">
        <div className = "img_cont_bh">

                <img   onClick = {() => {
                    window.location.href = "/"
                }}  
                className = "home_svg home_bh"
                src = {home_icon} 
                alt = " " />

                <img   onClick = {() => {
                    window.location.href = "/myCart"
                }}  
                className = "home_svg"
                src = {cart} 
                alt = " " />

                <img   onClick = {() => {
                    window.location.href = "/sell-your-product"
                }}  
                className = "home_svg"
                src = {plus} 
                alt = " " />

                <img   onClick = {() => {
                    window.location.href = "/My-Library"
                }}  
                className = "home_svg"
                src = {lib} 
                alt = " " />

                <img   onClick = {() => {
                    window.location.href = "/myprofile"
                }}  
                className = "home_svg"
                src = {picpro} 
                alt = " " />
                
            
        </div>
        </div>
    )
}

export default Base_Header;