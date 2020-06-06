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
                
            
        </div>
        </div>
    )
}

export default Base_Header;