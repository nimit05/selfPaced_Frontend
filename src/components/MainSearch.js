import React from 'react';

class MainSearch extends React.Component {
	render() {
		return (
			<div className="MainSearch">
				<input id="main_search_inp" placeholder="Book Title , Author , Subject ..." type="text" />

				<button id="get_reg_btn">Get Registered</button>
			</div>
		);
	}
}

export default MainSearch;
