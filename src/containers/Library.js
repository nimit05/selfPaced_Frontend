import React from 'react';
import MyProBox from '../components/MyProBox';
import Header from '../components/Header';
import Base_Header from '../Hooks/Base_header'


class Library extends React.Component {
	render() {
		return (
			<div className="Library_con">
				<h1 id="lib_head">Shelf (2)</h1>

				<div className="proCon">
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
					<MyProBox tag="PDF" title="Harry Potter" />
				</div>
				<Base_Header />
			</div>
		);
	}
}

export default Library;
