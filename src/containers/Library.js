import React from "react";
import MyProBox from "../components/MyProBox";
import Header from "../components/Header";
// import PDFViewer from 'pdf-viewer-reactjs';
import Sub_Header from "../components/Sub_header";
import school from "../img/school.svg";

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    fetch("api/products/myproducts")
      .then(res => {
        console.log("hii " + res);
        return res.json();
      })
      .then(data => {
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
        <Sub_Header />
        {/* <PDFViewer
					document={{
						url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf'
					}}
        /> */}
        {this.state.products.length != 0 && <h1 id="lib_head">Shelf ({this.state.products.length})</h1>}

        <div className="proCon">
          {this.state.products.length == 0 ? (
            <div className="empty_lib">
              <div className="img">
                <img src={school} />
              </div>
              <div className="text">
                <div>Your Library is Empty</div>
                <div className="sub">
                  So go up and start <a href="/">browsing</a>{" "}
                </div>
              </div>
            </div>
          ) : (
            this.state.products.map((e, i) => {
              return (
                <MyProBox
                  key={i}
                  productId={e.Product.id}
                  tag={e.Product.tag}
                  title={e.Product.title}
                  bookimg={`/covers/${e.Product.cover_img}`}
                  file={`/files/${e.Product.product_file}`}
                  refId={e.Product.refrenceId}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default Library;
