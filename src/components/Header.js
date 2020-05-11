import React from 'react';
import homePage from './HomePage';
import pblogo from './';

const Header = () => {
<<<<<<< HEAD
	return (
		<div className="header_cont">
			<img src={pblogo} alt=" " />
			<span>PuraniBooks</span>
			<span>.com</span>
		</div>
	);
};
=======
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
>>>>>>> 91b06242c000cac3995403a857d076e1c8f4dbd2

export default Header;
