import React from 'react'
import lod from "../img/loading.svg";
import sent from '../img/sent.svg';

export default class Contact extends React.Component{

    MsgSent = () => {
        this.setState((prevState) => {
            return{
                sent :!prevState.sent
            }
        })
    }

    constructor(props){
        super(props)

        this.state = {
            loading : false,
            sent : false
        }
    }
    render(){
        return(
            <div className = "Contact">
            {this.state.sent ? (<div className = "sent_success">
                    <div className = "img_cu">
                        <img src = {sent} alt = " " />
                    </div>
                    <div className = "text">
                        Msg Sent Succesfully
                    </div>
            </div>) : (
             <div className = "material">
                <div className = "contact_head">
                    <div className = "contact_heading"> Contact Us
                         <div className = "contact_subhead">We will reach you asap!</div>
                    </div>
                   
                </div>            
                
                <div className = "form_contact">
                    <input type = "text" name = "full_name" placeholder = " Name" required id = "full_name" />
                    <br />
                    <input type = "text" placeholder = "Subject" required id = "subject_contact" />
                    <br />
                    <input type = "text" placeholder = "Phone Number" required id = "con_phone" />
                    <br />
                    <br />
                    <textarea  type = "text" placeholder = "Message" required id = "msg" />

                    <div className = "form_btn">
                        <button className = "submit_contact" onClick = {async() => {
                            this.setState(() => {
                                return{
                                    loading : true
                                }
                            })
                            let data = {
                                msg : await document.getElementById('msg').value,
                                phone_Number :await document.getElementById('con_phone').value,
                                name : await document.getElementById('full_name').value,
                                subject : await document.getElementById('subject_contact').value,
                            }

                            let req = await postData('/api/contactUs' , data)
                            if(req === true){    
                                this.setState(() => {
                                    return{
                                        loading : false
                                    }
                                })

                                this.MsgSent()
                            }
                        }}>{this.state.loading ? <img src = {lod} className = "loadingsvg" /> : 'Submit' }</button>
                    </div>
                </div>
                </div>
            )}
            </div>
        )
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
  
    // window.location.reload();
  
    return response.json(); // parses JSON response into native JavaScript objects
  }