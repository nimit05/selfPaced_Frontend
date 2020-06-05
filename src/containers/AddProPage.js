import React from 'react';
import Header from '../components/Header';
import AddPro from '../components/AddPro';
import Base_Header from '../Hooks/Base_header'


class AddProPage extends React.Component {
	render() {
		return (
			<div className="HomePage">
				<AddPro />
				<Base_Header />
			</div>
		);
	}
}

export default AddProPage;
