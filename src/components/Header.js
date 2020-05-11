import React from 'react';
import homePage from './HomePage';
// import pblogo from './';

const Header = () => {
   return (
       <div>
       <div className = "titlebtn">
       <button className = "titl" onClick = {homePage}>PuraniBooks<b className = "com">.com</b></button>
       </div>
       <h2 className = "subtitle">
       Login 
       </h2>
       </div>
   )
}

export default Header;
