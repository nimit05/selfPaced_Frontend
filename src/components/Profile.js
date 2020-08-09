import React from "react";
import edit from "../img/edit.svg";
import Wick from '../img/Wick.jpg'
import Contact from './ContactUs'

export default class Profile extends React.Component {
  handleMode = (ans) => {
    this.setState(() => {
      return {
        mode: ans
      };
    });
  };

  constructor(props) {
    super(props);

    fetch("/api/user")
      .then(res => res.json())
      .then(data => {
        if (data) {
          this.setState(() => {
            return {
              pro_img: data.pro_img,
              username: data.username,
              bio : data.bio
            };
          });
        }
      });

      

    this.state = {
      pro_img: null,
      username: null,
      mode: "profile",
      sidebar: false,
      edit : true
    };
  }
  render() {
    return (

      <div className = "lower_pro">

        <div className = "side_pro_bar">
        <div className = "line_bar"></div>
          <div className = "head">
            <img src = {Wick} />
          </div>
          <div className = "link">
              Nimit Wadhwa
          </div>
          <div className = "bio">
          Ipsam voluptatem quia voluptas sit aspernatur
           aut odit aut fugit, sed quia consequuntur mag
           ni dolores eos qui ratione voluptatem sequi n
          </div>
        </div>

            <div className = "details_pro_div">

              <div className = "details_heading">
                <div className = {this.state.mode == 'profile' ? 'active_cont' : 'head_cont' }
                 onClick = {() => this.handleMode('profile')}>
                  Profile
                </div>
                <div className = {this.state.mode == 'products' ? 'active_cont' : 'head_cont' }
                 onClick = {() => this.handleMode('products')}>
                  My Products
                </div>
                <div className = {this.state.mode == 'contact' ? 'active_cont' : 'head_cont' }
                onClick = {() => this.handleMode('contact')}>
                  Contact Us
                </div>
              </div>

              {this.state.mode === 'profile' &&(
                <ProfileCard />
              )}
              {this.state.mode === 'contact' &&(
                <Contact />
              )}
       
            </div>
        </div>
        
    );
  }
}

class ProfileCard extends React.Component {
  updatePro = () => {
    fetch("/api/user")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data) {
          this.setState(() => {
            return {
              username: data.username,
              email: data.email,
              phone_Number: data.phone_Number,
              Address: data.Address,
              name: data.name,
              coins: data.Coins,
              pro_pic: data.pro_img,
              Earnings: data.Earnings,
              bio: data.bio,
              College: data.College,
              Quali: data.Qualification
            };
          });
        }
      });
  };
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      phone_Number: null,
      Address: null,
      name: null,
      coins: null,
      bio: null,
      College: null,
      Quali: null,
      edited: false,
      pro_pic: null,
      Earnings: null,
      edit_ed: true,
      edit_p: true,
      edit_c: true
    };
    this.updatePro();
  }

  render() {
    return (
      <div className="ProfileCard">
          <div className="details_subhead">
            <div>Personal Details : </div>
            <div
              className="det_edit"
              onClick={() => {
                this.setState(prevState => {
                  return {
                    edit_p: !prevState.edit_p
                  };
                });
              }}
            >
              <div>
                {this.state.edit_p ? (
                  <div>Edit</div>
                ) : (
                  <div
                    onClick={() => {
                      let data = {
                        name: document.getElementById("user_name").value,
                      };

                      let a = postData("/api/user", data);
                      if (a) {
                        this.updatePro();
                      }
                    }}
                  >
                    Save
                  </div>
                )}
              </div>
              <div>{this.state.edit_p && <img src={edit} />}</div>
            </div>
          </div>

          <div className="details_row">
            <div className="row_cont">
              <div className="details_lab">First Name</div>

              {this.state.edit_p ? (
                <div className="details_value">{this.state.username}</div>
              ) : (
                <div className="details_value">
                  <input type="text" defaultValue={this.state.username} />
                </div>
              )}
            </div>
            <div className="row_cont">
              <div className="details_lab">Last Name</div>
              {this.state.edit_p ? (
                <div className="details_value">{this.state.name}</div>
              ) : (
                <div className="details_value">
                  <input type="text" id="user_name" defaultValue={this.state.name} />
                </div>
              )}
            </div>
            <div className="row_cont">
              <div className="details_lab">UserName</div>
              {this.state.edit_p ? (
                <div className="details_value">{this.state.name}</div>
              ) : (
                <div className="details_value">
                  <input type="text" id="user_name" defaultValue={this.state.name} />
                </div>
              )}
            </div>
          </div>
     
          <div className="details_subhead">
            <div>Education Details : </div>
            <div
              className="det_edit"
              onClick={() => {
                this.setState(prevState => {
                  return {
                    edit_ed: !prevState.edit_ed
                  };
                });
              }}
            >
              <div>
                {this.state.edit_ed ? (
                  <div>Edit</div>
                ) : (
                  <div
                    onClick={() => {
                      let data = {
                        College: document.getElementById("user_college").value,
                        Qualification: document.getElementById("user_quali").value
                      };

                      let a = postData("/api/user", data);
                      if (a) {
                        this.updatePro();
                      }
                    }}
                  >
                    Save
                  </div>
                )}
              </div>
              <div>{this.state.edit_ed && <img src={edit} />}</div>
            </div>
          </div>
          <div className="details_row">
            <div className="row_cont">
              <div className="details_lab">College</div>
              {this.state.edit_ed ? (
                <div className="details_value_email">{this.state.College}</div>
              ) : (
                <div className="details_value_email">
                  <input type="text" defaultValue={this.state.College} id="user_college" />{" "}
                </div>
              )}
            </div>
            <div className="row_cont">
              <div className="details_lab">Course</div>
              {this.state.edit_ed ? (
                <div className="details_value_email">{this.state.Quali}</div>
              ) : (
                <div className="details_value_email">
                  <input type="text" defaultValue={this.state.Quali} id="user_quali" />{" "}
                </div>
              )}
            </div>
            <div className="row_cont">
            <div className="details_lab">Branch</div>
            {this.state.edit_ed ? (
              <div className="details_value_email">{this.state.Quali}</div>
            ) : (
              <div className="details_value_email">
                <input type="text" defaultValue={this.state.Quali} id="user_quali" />{" "}
              </div>
            )}
          </div>
          </div>

        <div className="details_subhead">
          <div>Contact Details : </div>
          <div
            className="det_edit"
            onClick={() => {
              this.setState(prevState => {
                return {
                  edit_c: !prevState.edit_c
                };
              });
            }}
          >
            <div>
              {this.state.edit_c ? (
                <div>Edit</div>
              ) : (
                <div
                  onClick={() => {
                    let data = {
                      email: document.getElementById("user_email").value,
                      phone_Number: document.getElementById("user_ph").value,
                      Address: document.getElementById("user_add").value
                    };

                    let a = postData("/api/user", data);
                    if (a) {
                      this.updatePro();
                    }
                  }}
                >
                  Save
                </div>
              )}
            </div>
            <div>{this.state.edit_c && <img src={edit} />}</div>
          </div>
        </div>
        <div className="details_row">
  
          <div className="row_cont">
            <div className="details_lab">Phone No.</div>
            {this.state.edit_c ? (
              <div className="details_value">{this.state.phone_Number}</div>
            ) : (
              <div className="details_value">
                <input type="text" defaultValue={this.state.phone_Number} id="user_ph" />
              </div>
            )}
          </div>
          
          <div className="row_cont">
          <div className="details_lab">Email</div>
          {this.state.edit_c ? (
            <div className="details_value_email">{this.state.email}</div>
          ) : (
            <div className="details_value">
              <input type="text" defaultValue={this.state.email} id="user_email" />
            </div>
          )}
        </div>
        <div className="row_cont">
        <div className="details_lab">Address</div>
        {this.state.edit_c ? (
          <div className="details_value">{this.state.Address}</div>
        ) : (
          <div className="details_value">
            <input type="text" defaultValue={this.state.Address} id="user_add" />
          </div>
        )}
      </div>
        </div>

        <div className = "Faq">
          <div className = "main">FAQs</div>

          <div className = "question">
            What happens when I update my email address (or mobile number)?
          </div>

          <div className = "question">
          Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
          </div>

          <div className = "question">
            What happens when I update my email address (or mobile number)?
          </div>

          <div className = "question">
          Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
          </div>

          <div className = "question">
            What happens when I update my email address (or mobile number)?
          </div>

          <div className = "question">
          Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
          </div>
        
  
        </div>
 
        </div>
    );
  }
}
 



async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
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

  window.location.reload()

  return response.json(); // parses JSON response into native JavaScript objects
}
