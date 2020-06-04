import React from 'react';
import MyProBox from '../components/MyProBox';
import Header from '../components/Header';

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
			</div>
		);
	}
}

export default Library;
