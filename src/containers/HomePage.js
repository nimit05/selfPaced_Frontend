import React from 'react';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
import Middle from '../components/Middle';
import CateCon from '../components/CateCon';
import Base_Header from '../Hooks/Base_header'
import Product_cont from '../components/Product_cont'

class HomePage extends React.Component {
	render() {
		return (
			<div className="HomePage">
				<MainHeader />
				<Middle />
				<Product_cont />
				<Base_Header />
			</div>
		);
	}
}

export default HomePage;
