import React from 'react';
import Header from '../components/Header';
import AddPro from '../components/AddPro';
import Base_Header from '../Hooks/Base_header'
import Sub_Header from '../components/Sub_header'
//dev

class AddProPage extends React.Component {
	render() {
		return (
			<div className="HomePage">
				<Sub_Header />
				<AddPro />
				<Base_Header />
			</div>
		);
	}
}

export default AddProPage;
