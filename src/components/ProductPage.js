import React, { useState } from "react";
import { FaStar, FaWindowClose } from "react-icons/fa";
import bookcover from "../img/bookcover.jpg";
import CateCon from "./CateCon";
import Modal from "react-modal";
import propic from "../img/propic.svg";
import lod from "../img/loading.svg";
import Footer from "./Footer";

export default class ProductPage extends React.Component {
  SetRating(ratingValue) {
    this.setState(() => {
      return {
        star_Value: ratingValue
      };
    });
  }

  alugobi = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open
      };
    });
  };
  buy = async () => {
    this.setState(() => {
      return {
        loadingLib: true
      };
    });

    let data = {
      refrenceId: this.props.match.params.refId
    };
    let pro = await postData("/api/products/Buy", data);
    console.log(pro);
    if (pro) {
      this.setState(() => {
        return {
          loadingLib: false
        };
      });
      window.location.reload();
    } else if (pro == false) {
      alert("Cannot Buy , Internal Error");
      this.setState(() => {
        return {
          loadingLib: false
        };
      });
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      title: null,
      s_title: null,
      cover_img: null,
      description: null,
      refId: null,
      inLibrary: true,
      id: null,
      tag: null,
      rating: null,
      open: false,
      cover_img: null,
      star_Value: null,
      sample_file: null,
      Seller: null,
      branch: null,
      loadingCart: false,
      loadingLib: false,
      f_name : null,
      l_name : null
    };
  }

  async componentDidMount() {
    const { refId } = this.props.match.params;

    fetch(`/api/products/specific/${refId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data) {
          this.setState(() => {
            return {
              id: data.product.id,
              title: data.product.title,
              s_title: data.product.s_title,
              cover_img: data.product.cover_img,
              description: data.product.Description,
              refId: data.product.refrenceId,
              tag: data.product.tag,
              rating: data.product.rating,
              cover_img: data.product.cover_img,
              Seller: data.product.SellerUsername,
              sample_file: data.product.sample_pro,
              branch: data.product.branch,
              f_name : data.user.f_name,
              l_name : data.user.l_name
            };
          });
        }
      });

    let data = await fetch(`/api/products/search_item/${refId}`);
    let res = await data.json();
    if (res == true) {
      this.setState(() => {
        return {
          inLibrary: false
        };
      });
    }
  }

  addToCart = async refId => {
    this.setState(() => {
      return {
        loadingCart: true
      };
    });
    let data = { refrenceId: refId };
    let req = await postData("/api/products/AddToCart", data);
    if (req) {
      this.setState(() => {
        return {
          loadingCart: false
        };
      });
    }
  };

  render() {
    return (
      <div className="productPage">
        <div className="main_body_pro_page">
          <BookImg cover_img={this.state.cover_img} />
          <Content
            title={this.state.title}
            s_title={this.state.s_title}
            description={this.state.description}
            buy={this.buy}
            refId={this.state.refId}
            addToCart={this.addToCart}
            inLibrary={this.state.inLibrary}
            Seller={this.state.Seller}
            id={this.state.id}
            tag={this.state.tag}
            rating={this.state.rating}
            cover_img={`/covers/${this.state.cover_img}`}
            sample_file={this.state.sample_file}
            branch={this.state.branch}
            loadingCart={this.state.loadingCart}
            loadingLib={this.state.loadingLib}
            f_name = {this.state.f_name}
            l_name = {this.state.l_name}
          />
        </div>
        <hr className="hr_divider" />
        <div className="review_pp_heading">
          <div>Reviews About Product</div>
          <button className="modal_btn" onClick={this.alugobi} id="post_btn">
            Post your review
          </button>
          <div className="review_view">
            {this.state.id && <Reviews pro_id={this.state.id} rating={this.state.rating} />}
          </div>
        </div>

        <Modal
          style={{ padding: 30 }}
          isOpen={this.state.open}
          className="modal"
          contentLabel="Selected Option"
          onRequestClose={this.alugobi}
        >
          <div>
            <h2 className="rate_modal">Rate Product</h2>
            <div className="star_cont">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                  <label>
                    <input
                      className="inp"
                      type="radio"
                      value={ratingValue}
                      onClick={() => {
                        this.SetRating(ratingValue);
                      }}
                    />
                    <FaStar
                      color={ratingValue <= this.state.star_Value ? "#ffc107" : "#D3D3D3"}
                      className="star"
                      size={20}
                    />
                  </label>
                );
              })}
            </div>
            <div className="review_body">
              <h2 className="rate_modal">Post Your Review</h2>
              <textarea type="text" placeholder="Write your review about product" id="body_input" maxLength="70" />
            </div>

            <div className="submit_div">
              <div className="submit_modal">
                <button
                  onClick={() => {
                    this.alugobi();
                    let data3 = {
                      comment: document.getElementById("body_input").value,
                      rating: this.state.star_Value,
                      productId: this.state.id,
                    };
                    postData("/api/review", data3).then(data => {
                      if (!data) {
                        alert("internal error");
                      } else {
                        window.location.reload();
                      }
                    });
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal>
        <hr className="hr_divider" />
        <div className="cart_catecon">
          <CateCon title="Best Seller" url="mostB" />
        </div>
        <Footer />
      </div>
    );
  }
}

const BookImg = props => {
  return (
    <div className="Main_BI">
      <img className="product_img_pp" src={`/covers/${props.cover_img}`} alt=" " />
    </div>
  );
};
class Content extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      inLibrary: true,
      rating: null,
      inCart: false,
    };

    let data = {
      id: this.props.id
    };

    postData("/api/products/search_item", data).then(data => {
      if (data) {
        this.setState(() => {
          return {
            inLibrary: false
          };
        });
      }
    });

    
  }
   componentDidMount = async() => {

    let req = await fetch(`/api/user/IsinCart/${this.props.refId}`);
    let data = req.json();
    if (data == true) {
      this.setState(() => {
        return {
          inCart: true
        };
      });
    };

 
  }
  render() {
    return (
      <div className="Main_CT">
        <div>
          {this.props.title}
          <div className="author">
            <span className="by">By</span> {this.props.s_title}
            <hr className="hr" />
          </div>
          <div className="price_pp">
            Rating :
            <span>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                  <label>
                    <FaStar color={ratingValue <= this.props.rating ? "#ffc107" : "#D3D3D3"} size={20} />
                  </label>
                );
              })}
            </span>
          </div>
          <div className="price_pp">
            Branch : <span className="type_value grey">{this.props.branch}</span>
          </div>
          <div className="price_pp">
            Seller : <span className="type_val grey">{this.props.f_name} {' '} {this.props.l_name}</span>
          </div>
        </div>

        <div>
          {this.props.inLibrary ? (
            <div className="buy_pp ">
              <button className="buy_btn_pp" onClick={this.props.buy}>
                {this.props.loadingLib ? <img className="loadingsvg" src={lod} /> : "Add To Library"}
              </button>
              {this.state.inCart ? (
                <button className="adc_button">Added to Cart</button>
              ) : (
                <button
                  className="adc_btn_pp "
                  onClick={() => {
                    this.props.addToCart(this.props.refId);
                  }}
                >
                  {this.props.loadingCart ? <img className="loadingsvg" src={lod} /> : "Add to Cart"}
                </button>
              )}
            </div>
          ) : (
            <div className="buy_pp ">
              <button
                className="buy_btn_pp"
                onClick={() => {
                  window.location.href = "/My-Library";
                }}
              >
                See in Library
              </button>
            </div>
          )}
        </div>
        <br />
        <div className="des_pp">
          About
          <div className="des_cont grey">{this.props.description}</div>
        </div>
        <div className="report">
          <span
            className="report_product"
            onClick={() => {
              let data4 = {
                refId: this.props.refId
              };
              postData("/api/products/report", data4).then(data => {
                if (data == false) {
                  alert("eror occured");
                } else {
                  alert("Product Reported");
                }
              });
            }}
          >
            <a href="#">Report product</a>
          </span>
          <span
            onClick={() => {
              let data = {
                username: this.props.Seller
              };
              postData("/api/user/report", data).then(data => {
                if (!data) {
                  alert("eror occured");
                }else{
                  alert('Seller Reported')
                }
              });
            }}
          >
            <a href="#">Report Seller</a>
          </span>
        </div>
      </div>
    );
  }
}

class Reviews extends React.Component {
  IsReported = async id => {
    await fetch(`/api/review/isReported/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data == true) {
          this.setState(() => {
            return {
              reported: true
            };
          });
        }
      });
    return this.state.reported;
  };
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      user_pic: null,
      disable: false,
      reported: false,
      username : null
    };
    if (this.props.pro_id) {
      fetch(`/api/review/${this.props.pro_id}`)
        .then(res => res.json())
        .then(data => {
          if (data) {
            this.setState(() => {
              return {
                reviews: data.reverse()
              };
            });
          }
        });

      fetch(`/api/review/isAllowed/${this.props.pro_id}`)
        .then(res => res.json())
        .then(data => {
          if (data == true) {
            document.getElementById("post_btn").disabled = true;
            document.getElementById("post_btn").style.background = "#a2d8bd";
            document.getElementById("post_btn").style.cursor = "not-allowed";
            document.getElementById("post_btn").style.cursor = "unset";
          }
        });
    }

    fetch('/api/user').then((res) => res.json())
    .then((data) => {
      if(data){
        this.setState(() => {
          return{
            username : data.username
          }
        })
      }
    })
  }
  render() {
    return (
      <div className="review_section">
        <div className="rev_con_con">
          {this.state.reviews.map(review => {
            return (
              <div className="rev_con">
                <div className="user_det">
                  <img src={propic} />
                  <span className="review_username">{review.userName}</span>
                </div>
                <div>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                      <label>
                        <FaStar color={ratingValue <= this.props.rating ? "#ffc107" : "#D3D3D3"} size={20} />
                      </label>
                    );
                  })}
                </div>
                <div className="comment">{review.comment}</div>
                <div className="actions_commenter">
                  <div
                    onClick={async () => {
                      let data = {
                        id: review.id
                      };
                      let req = await postData("/api/review/report", data);
                      if (req) {
                        alert("Review Reported");
                        this.setState(() => {
                          return {
                            reported: true
                          };
                        });
                      } else {
                        alert("error-occoured");
                      }
                    }}
                  >
                    {this.state.reported ? <a href="#">Reported</a> : <a href="#">Report</a>}
                  </div>
                  {this.state.username === review.userId && (
                  <div
                    className="delete_review"
                    onClick={async () => {
                      await window.location.reload();
                      await Delete(`/api/review/${review.id}`);
                    }}
                  >
                    Delete
                  </div>
                  )}
                </div>
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function Delete(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer"
  });

  return response.json(); // parses JSON response into native JavaScript objects
}
