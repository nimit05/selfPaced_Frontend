import React from 'react'
import { Link } from "react-router-dom";
import phone from '../img/phone.svg'
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
                                <img src = {phone} />
                                <div>
                                    9315876022
                                </div>
                              </div>
                              <div className = "img_text">
                                <img src = {mail} />
                                <div>
                                    SelfPaced123@gmail.com
                                </div>
                              </div>
                        </div>
                    </div>
                    </div>
                    <div className = "foot_col_icons">
                       
                        <div className = "icons_list_footer">
                              <div className = "icons_footer">
                                <img src = {fb} alt = " " />
                              </div>
                              <div className = "icons_footer">
                                 <img src = {insta} alt = " " />
                                </div>
                                <div className = "icons_footer">
                                 <img src = {ld} alt = " " />
                               </div>
                        </div>
                </div>
            </div>
        )
    }
}