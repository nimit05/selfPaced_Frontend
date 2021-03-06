import React from 'react'
import { Link } from "react-router-dom";
import phone from '../img/phone.svg'
import Tushar from "../img/tushar.jpg"
import Nimit from "../img/Nimit.jpeg"
import mail from '../img/mail.svg'
import fb from '../img/facebook.svg'
import insta from '../img/instagram.svg'
import ld from '../img/linkedin.svg'

export default class Footer extends React.Component{
    render(){
        return(
            <div className = "footer">
                    <div className = "upper_footer">
                    <div className = "foot_col">
                        <div className = "bold_header">
                            SelfPaced
                        </div>
                        <div className = "about">
                         It is a website where you can share your notes 
                         to help other students and also can download notes
                         of other students.
                        </div>
                    </div>
                    <div className = "foot_col_links">
                        <div className = "link_bold_footer">
                            Links
                        </div>
                        <div className = "links_foot">
                            <Link to = "/">Home</Link>
                            <Link to = "/myprofile">Profile</Link>
                            <div onClick={() => {
                                fetch("/api/login/out", {
                                  method: "DELETE"
                                });
                                window.location.href = '/'
                              }}>Sign Out</div>
                        </div>
                    </div>
                    <div className = "foot_col">
                        <div className = "link_bold_left">
                            Contact
                        </div>
                        <div className = "links_foot">
                              <div className = "img_text">
                                <img src = {phone} />
                                <div>
                                    9896908962
                                </div>
                              </div>
                              <div className = "img_text">
                                <img  src = {phone} />
                                <div>
                                    9315876022
                                </div>
                              </div>
                              <div className = "img_text">
                                <img src = {mail} />
                                <div>
                                    Selfpaced123@gmail.com
                                </div>
                              </div>
                        </div>
                    </div>
                    </div>
                    <div className = "foot_col_icons">
                       
                        <div className = "icons_list_footer">
                                <div className = "icons_footer">
										<a href="https://www.linkedin.com/in/nimit-wadhwa-56bb231b1/"> <img  className="devPhoto" src = {Nimit} alt = " " />
								</a>

                               </div>
                              <div className = "icons_footer">
                              <a href="https://www.instagram.com/selfpaced_dcrust/"> <img  className="devPhoto" src = {insta} alt = " " />
                              </a>
                                </div>
                                <div className = "icons_footer">
                                 <img src = {ld} alt = " " />
                               </div>
                                <div className = "icons_footer">
										<a href="https://www.linkedin.com/in/tushar-bhardwaj-5a820a193/"> <img  className="devPhoto" src = {Tushar} alt = " " />
								</a>

                               </div>
                        </div>
                </div>
            </div>
        )
    }
}
