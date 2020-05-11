import React from 'react'
import homePage from '../components/HomePage'


const Header = () => {
   return (
       <div>
       <div className = "titlebtn">
       <button className = "title" onClick = {homePage}>PuraniBooks<b className = "com">.com</b></button>
       </div>
       <h2 className = "subtitle">
       Login 
       </h2>
       </div>
   )
}

export default Header