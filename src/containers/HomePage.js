import React from 'react';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader';
import Middle from '../components/Middle';
import CateCon from '../components/CateCon';

class HomePage extends React.Component {
	render() {
		return (
			<div className="HomePage">
				<MainHeader />
				<Middle />
				<CateCon />
				<CateCon />
				<CateCon />
			</div>
		);
	}
}

export default HomePage;
