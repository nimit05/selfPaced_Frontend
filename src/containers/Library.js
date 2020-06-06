import React from 'react';
import MyProBox from '../components/MyProBox';
import Header from '../components/Header';
import Base_Header from '../Hooks/Base_header';

class Library extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		};

		fetch('api/products/myproducts')
			.then((res) => {
				console.log('hii ' + res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
				this.setState(() => {
					return {
						products: data
					};
				});
			});
	}

	render() {
		return (
			<div className="Library_con">
				<h1 id="lib_head">Shelf (2)</h1>

				<div className="proCon">
					{this.state.products &&
						this.state.products.map((e, i) => {
							return (
								<MyProBox
									key={i}
									tag={e.Product.tag}
									title={e.Product.BookName}
									bookimg={`/covers/${e.Product.cover_img}`}
									file={`/files/${e.Product.product_file}`}
								/>
							);
						})}
				</div>
				<Base_Header />
			</div>
		);
	}
}

export default Library;
