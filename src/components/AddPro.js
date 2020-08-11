import React, { Component } from "react";
import Productbox from "./Productbox";


class AddPro extends Component {
  updateProductPre = () => {
    let title = document.getElementById("pro_title").value;
    let stitle = document.getElementById("pro_s_title").value;
    let s_des = document.getElementById("pro_s_des").value;
    let tag = document.getElementById("pro_type").value;
    let branch = document.getElementById('branch_sel').value

    let newPro = {
      title: title,
      tag: tag,
      branch : branch,
      stitle: stitle,
      short_des: s_des,
    };

    this.setState(() => {
      return {
        productdet: newPro
      };
    });
  };

  // code to check uploaded file size (file validation)

  _onChange = () => {
    // to check the file size
    const fi = document.getElementById("pro_img");
    // Check if any file is selected.
    if (fi.files.length > 0) {
      for (let i = 0; i <= fi.files.length - 1; i++) {
        const fsize = fi.files.item(i).size;
        const file = Math.round(fsize / 1024);
        // The size of the file.
        if (file >= 4096) {
          alert("File too Big, please select a file less than 4mb");
          return;
        } else if (file < 10) {
          alert("File too small, please select a file greater than 10kb");
          return;
        } else {
          document.getElementById("size").innerHTML = "<b>" + file + "</b> KB";
        }
      }
    }
    if (fi.files.length > 0) {
      var file = this.refs.file.files[0];
      var reader = new FileReader();
      var url = reader.readAsDataURL(file);
      // console.log(url);

      reader.onloadend = function (e) {
        this.setState(() => {
          return { imgSrc: [reader.result] };
        });
      }.bind(this);
    }
  };
  _onChangeFile = () => {
    const fif = document.getElementById("pro_file");

    if (fif.files.length > 0) {
      for (let i = 0; i <= fif.files.length - 1; i++) {
        const fsize = fif.files.item(i).size;
        const file = Math.round(fsize / 1024);
        // The size of the file.
        if (file >= 50000) {
          alert("File too Big, please select a file less than 50mb");
          return;
        } else if (file < 10) {
          alert("File too small, please select a file greater than 10kb");
          return;
        } else {
          document.getElementById("size").innerHTML = "<b>" + file + "</b> KB";
        }
      }
    }
  };

  // a.category,
  // 	a.title,
  // 	a.s_title,
  // 	a.short_des,
  // 	a.Description,
  // 	a.tag,
  // 	a.MRP

  constructor(props) {
    super(props);

    this.state = {
      productdet: {
        title: "Title",
        tag: "PDF",

        stitle: "short title ",
        short_des: "short description ",
        image: ""
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
              refId={"sample"}
            />
            <h2>Live Preview</h2>
          </div>
          <div className="add_pro_det">
            <h1>Create Your Product</h1>
            <form action="/api/sell" method="post" encType="multipart/form-data">
              <div className="row_pair">
                <div className="lable_inp_pair">
                  <label htmlFor="Type">Type</label>
                  <select name="tag" id="pro_type" onChange={this.updateProductPre}>
                    <option value="PDF">PDF</option>
                    <option value="old">Old Book</option>
                    <option value="Audio">Audio Book</option>
                    <option value="new_book">New Book</option>
                  </select>
                </div>
                <div className="lable_inp_pair">
                  <label htmlFor="Category">Category</label>
                  <select name="category" id="pro_cat" onChange={this.updateProductPre}>
                    <option value="college">College</option>
                    <option value="old_book">Fiction</option>
                    <option value="audio_book">Novel</option>
                    <option value="new_book">sci-fi</option>
                  </select>
                </div>
              </div>
              <div
                className={(this.state.productdet.tag === "PDF" || this.state.productdet.tag === "Audio") && "row_pair"}
              >
                <div className="lable_inp_pair">
                  <label htmlFor="Type">Image</label>
                  <input
                    id="pro_img"
                    ref="file"
                    type="file"
                    name="cover_img"
                    accept="image/png, image/jpeg"
                    multiple="true"
                    onChange={this._onChange}
                  />
                  <span id="size" />
                </div>
                {(this.state.productdet.tag === "PDF" || this.state.productdet.tag === "Audio") && (
                  <div className="lable_inp_pair">
                    <label htmlFor="InputFile">{this.state.productdet.tag} File</label>
                    <input
                      id="pro_file"
                      ref="pfile"
                      type="file"
                      name="product_file"
                      multiple="true"
                      onChange={this._onChangeFile}
                    />
                    <span id="file_size" />
                  </div>
                )}
              </div>
              <div className="row_pair">
                <div className="lable_inp_pair">
                  <label htmlFor="Type">Title</label>
                  <input name="title" type="text" id="pro_title" onChange={this.updateProductPre} />
                </div>
                <div className="lable_inp_pair">
                  <label htmlFor="Type">Author</label>
                  <input name="short_title" type="text" id="pro_s_title" onChange={this.updateProductPre} />
                </div>
              </div>
              <div className="row_pair">
                <div className="lable_inp_pair">
                  <label htmlFor="Type">Short Description</label>
                  <input name="short_des" type="text" id="pro_s_des" onChange={this.updateProductPre} />
                </div>
                <div className="lable_inp_pair">
                  <label>Branch</label>
                  <select id = "branch_sel" defaultValue= "Computer Science" >
                    <option value = "Computer Science">Computer Science</option>
                    <option value = "Electronics">Electronics</option>
                    <option value = "Electrical Engg.">Electrical Engg.</option>
                    <option value = "Mechanical">Mechanical Engg.</option>
                    <option value = "Civil Engg.">Civil Engg.</option>
                    <option value = "Chemical Engg." >Chemical Engg.</option>
                    <option value = "Bio Tech">Bio Tech</option>
                    <option value = "Bio Medical">Bio Medical</option>
                    <option value = "BSc">BSc</option>
                    <option value = "MSc">MSc</option>
                  </select>
                </div>
              </div>
              {this.state.productdet.tag === "PDF" && (
                <div className="row_pair">
                  <div className="lable_inp_pair">
                    <label htmlFor="Type">Sample PDF (Starting Page Number)</label>
                    <input name="sample_start" type="number" id="pro_sample_start" />
                  </div>
                  <div className="lable_inp_pair">
                    <label htmlFor="Type">Number of Pages in Sample PDF</label>
                    <input name="sample_pages" type="number" id="pro_sample_end" />
                  </div>
                </div>
              )}

              <div className="lable_inp_pair">
                <label htmlFor="Type">Breif Description</label>
                <textarea name="B_des" type="text" id="pro_des" />
              </div>
              <div className="row_pair" id="btnrow">
                <button
                  id="addpro_canbtn"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Cancel
                </button>

                <input id="addpro_addbtn" type="submit" value="Add to Store" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPro;
