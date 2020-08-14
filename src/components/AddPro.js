import React, { Component } from "react";
import Productbox from "./Productbox";
import imageCompression from "browser-image-compression";
import lod from "../img/loading.svg";


class AddPro extends Component {
  updateProductPre = () => {
    let title = document.getElementById("pro_title").value;
    let stitle = document.getElementById("pro_s_title").value;
    let s_des = document.getElementById("pro_s_des").value;
    let tag = document.getElementById("pro_type").value;
    let branch = document.getElementById("branch_sel").value;

    let newPro = {
      title: title,
      tag: tag,
      branch: branch,
      stitle: stitle,
      short_des: s_des
    };

    this.setState(() => {
      return {
        productdet: newPro,
        loading : false
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
        if (file >= 10096) {
          alert("File too Big, please select a file less than 10mb");
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
  submitFormWithCompression = async () => {

    this.setState(() => {
      return{
        loading : true
      }
    })
    if (!document.getElementById("pro_img").files[0]) {
      alert("Please Upload the cover image");
      return;
    }
    let imageFile = document.getElementById("pro_img").files[0];
    console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log("compressedFile instanceof Blob", compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
      let f = document.getElementById("formId");
      let formData = new FormData(f);
      formData.append("compressedfile", compressedFile);
      postData("/api/sell", formData).then(res => {
        if (res) {
          this.setState(() => {
            return{
              loading : false
            }
          })
          window.location.href = "/";
         
        } else {
          this.setState(() => {
            return{
              loading : false
            }
          })
          alert("Internal Error , Please Try Later");
        }
      });
    } catch (error) {
      this.setState(() => {
        return{
          loading : false
        }
      })
      console.log(error);
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
            <form id="formId" encType="multipart/form-data">
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
                  <label htmlFor="Type">Branch</label>
                  <select id="branch_sel" name="branch" defaultValue="ece">
                    <option value="Computer Science">Computer Science</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Electrical Engg.">Electrical Engg.</option>
                    <option value="Mechanical Engg.">Mechanical Engg.</option>
                    <option value="Civil Engg.">Civil Engg.</option>
                    <option value="Chemical Engg.">Chemical Engg.</option>
                    <option value="Bio Tech">Bio Tech</option>
                    <option value="Bio Medical">Bio Medical</option>
                    <option value="BSc">BSc</option>
                    <option value="MSc">MSc</option>
                  </select>
                </div>
              </div>

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

                <button
                  id="addpro_addbtn"
                  onClick={e => {
                    e.preventDefault();
                    this.submitFormWithCompression();
                  }}
                >
                {this.state.loading ? <img src = {lod} className = "loadingsvg" /> : 'Add to Store' }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPro;

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: data // body data type must match "Content-Type" header
  });

  return response.json(); // parses JSON response into native JavaScript objects
}
