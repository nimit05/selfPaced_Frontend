import React from 'react'

export default class Contact extends React.Component{
    render(){
        return(
            <div className = "Contact">
             <div className = "material">
                <div className = "contact_head">
                    <div className = "contact_heading"> Contact Us
                         <div className = "contact_subhead">We will reach you asap!</div>
                    </div>
                   
                </div>            
                
                <div className = "form_contact">
                    <input type = "text" name = "full_name" placeholder = " Name" required />
                    <br />
                    <input type = "email" placeholder = "Email" required />
                    <br />
                    <input type = "text" placeholder = "Phone Number" required />
                    <br />
                    <br />
                    <textarea  type = "text" placeholder = "Message" required />

                    <div className = "form_btn">
                        <button className = "submit_contact">Submit</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}