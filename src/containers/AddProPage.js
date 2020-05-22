import React from 'react';
import Header from '../components/Header';
import AddPro from '../components/AddPro';

class AddProPage extends React.Component {
	render() {
		return (
			<div className="HomePage">
				<Header />
				<AddPro />
			</div>
		);
	}
}

export default AddProPage;
