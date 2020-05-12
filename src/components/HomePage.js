import React from 'react';
import Header from './Header';
import MainHeader from './MainHeader';
import MainSearch from './MainSearch';
import CateCon from './CateCon';


class HomePage extends React.Component {
	componentDidMount() {
		window.addEventListener('scroll', this.Scroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.Scroll);
	}

	Scroll = () => {
		let pos = window.scrollY;
		if (pos > 30) {
			let h = document.getElementsByClassName('MainHeader')[0];

			h.style.backgroundImage = 'linear-gradient(#ff6600,#ff115e)';
		} else {
			let h = document.getElementsByClassName('MainHeader')[0];

			h.style.backgroundImage = 'none';
		}
	};

	render() {
		return (
			<div className="HomePage">
				<Header />
				<MainHeader />
				<MainSearch />
				<CateCon />
				<CateCon />
				<CateCon />
			</div>
		);
	}
}

export default HomePage;
