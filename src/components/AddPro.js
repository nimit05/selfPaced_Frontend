import React, { Component } from 'react';
import Productbox from './Productbox';

class AddPro extends Component {
	updateProductPre = () => {
		let title = document.getElementById('pro_title').value;
		let stitle = document.getElementById('pro_s_title').value;
		let s_des = document.getElementById('pro_s_des').value;
		let tag = document.getElementById('pro_type').value;
		let price = document.getElementById('pro_price').value;

		let newPro = {
			title: title,
			tag: tag,

			stitle: stitle,
			short_des: s_des,
			price: price
		};

		this.setState(() => {
			return {
				productdet: newPro
			};
		});
	};

	_onChange = () => {
		// to check the file size
		const fi = document.getElementById('pro_img');
		// Check if any file is selected.
		if (fi.files.length > 0) {
			for (let i = 0; i <= fi.files.length - 1; i++) {
				const fsize = fi.files.item(i).size;
				const file = Math.round(fsize / 1024);
				// The size of the file.
				if (file >= 4096) {
					alert('File too Big, please select a file less than 4mb');
					return;
				} else if (file < 10) {
					alert('File too small, please select a file greater than 10kb');
					return;
				} else {
					document.getElementById('size').innerHTML = '<b>' + file + '</b> KB';
				}
			}
		}
		if (fi.files.length > 0) {
			var file = this.refs.file.files[0];
			var reader = new FileReader();
			var url = reader.readAsDataURL(file);
			console.lor(url);

			reader.onloadend = function(e) {
				this.setState(() => {
					return { imgSrc: [ reader.result ] };
				});
			}.bind(this);
		}
	};

	constructor(props) {
		super(props);

		this.state = {
			productdet: {
				title: 'Title',
				tag: 'pdf',

				stitle: 'short title ',
				short_des: 'short description ',
				price: '0',
				image: ''
			},
			imgSrc: null
		};
	}

	render() {
		return (
			<div>
				<div className="add_pro_con">
					<div className="preview">
						<Productbox
							title={this.state.productdet.title}
							tag={this.state.productdet.tag}
							bookimg={this.state.imgSrc}
							stitle={this.state.productdet.stitle}
							short_des={this.state.productdet.short_des}
							price={this.state.productdet.price}
						/>
						<h2>Live Preview</h2>
					</div>
					<div className="add_pro_det">
						<h1>Create Your Product</h1>

						<div className="row_pair">
							<div className="lable_inp_pair">
								<label htmlFor="Type">Type</label>
								<select name="type" id="pro_type" onChange={this.updateProductPre}>
									<option value="pdf">PDF</option>
									<option value="old_book">Old Book</option>
									<option value="audio_book">Audio Book</option>
									<option value="new_book">New Book</option>
								</select>
							</div>
							<div className="lable_inp_pair">
								<label htmlFor="Type">Categeroy</label>
								<select name="type" id="pro_cat" onChange={this.updateProductPre}>
									<option value="college">College</option>
									<option value="old_book">Fiction</option>
									<option value="audio_book">Novel</option>
									<option value="new_book">sci-fi</option>
								</select>
							</div>
						</div>
						<div className="lable_inp_pair">
							<label htmlFor="Type">Image</label>
							<input
								id="pro_img"
								ref="file"
								type="file"
								name="user[image]"
								accept="image/png, image/jpeg"
								multiple="true"
								onChange={this._onChange}
							/>
							<span id="size" />
						</div>
						<div className="row_pair">
							<div className="lable_inp_pair">
								<label htmlFor="Type">Title</label>
								<input type="text" id="pro_title" onChange={this.updateProductPre} />
							</div>
							<div className="lable_inp_pair">
								<label htmlFor="Type">Short Title</label>
								<input type="text" id="pro_s_title" onChange={this.updateProductPre} />
							</div>
						</div>
						<div className="row_pair">
							<div className="lable_inp_pair">
								<label htmlFor="Type">Short Description</label>
								<input type="text" id="pro_s_des" onChange={this.updateProductPre} />
							</div>
							<div className="lable_inp_pair">
								<label htmlFor="Type">Price</label>
								<input type="number" id="pro_price" onChange={this.updateProductPre} />
							</div>
						</div>

						<div className="lable_inp_pair">
							<label htmlFor="Type">Breif Description</label>
							<textarea type="text" id="pro_des" />
						</div>
						<div className="row_pair" id="btnrow">
							<button id="addpro_canbtn">Cancel</button>
							<button id="addpro_addbtn">Add to Store</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddPro;
