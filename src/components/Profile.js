import React from 'react'
import Header from './Header'
import CateCon_for_profile from './CateCOn_profile';

export default class profilePage extends React.Component{
   
    render(){
        return(
            <div>
            <Header />
                <div className = "main_profile_page">
                    <ProfileCard  />
                    <Items_Cont />
                </div>
            </div>
        )
    }
}

class ProfileCard extends React.Component{
    constructor(props) {
		super(props);

		fetch('/api/user', {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', 
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer' 
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data) {
					this.setState(() => {
						return {
                            username: data.username,
                            email : data.email,
                            phone_Number : data.phone_Number,
                            Address : data.Address,
                            name : data.name,
                            coins : data.Coins
						};
					});
				}
            });
            this.state = {
                username : null,
                email : null,
                phone_Number : null,
                Address : null,
                name : null,
                coins : null ,
                edited : false
            }
        }
     
         
    render(){
    return(
        <div id = "ProfileCard">
         <div className = "info">
             <div className = "user_pro_pic">    
            </div>
            <div className ="user_name">
                {this.state.name} 
                 <div className = "edit" onClick = {() => {
                     this.setState((prevState) => {
                         return{
                             edited : !prevState.edited
                         } 
                     })
          
                        document.getElementById('ProfileCard').style.height = '40vw'
                        
                        if(this.state.edited){
                        document.getElementById('ProfileCard').style.height = '32vw'

                        }
                    
                 }} > {this.state.edited ? 'Cancel':'Edit Profile'}
                  
                 
                 </div>
             </div>
        </div>
            <div className = "hr_pp">
                <hr />
            </div>
            <div className="details">
                <div className = "heading">
                    Username
                         {this.state.edited ? (<input type = "text" className = "heading_value " value = {this.state.username}  />)
                          : (<div className = "heading_value">
                         {this.state.username}
                         </div>
                         )}
                        
                 </div>
                <div className = "heading">
                    Email
                  <div className = "heading_value">
                  {this.state.edited ? (<input type = "text"  className = "heading_value input_email" id = "input_email" />)
                   : (<div className = "heading_value">
                  {this.state.email}
                  </div>
                  )}
                         
                </div>
                </div>
                <div className = "heading">
                    Phone No.
                    <div className = "heading_value">
                    {this.state.edited ? (<input type = "text"  className = "heading_value "  id = "input_phone_Number" />) 
                    : (<div className = "heading_value">
                    {this.state.phone_Number}
                    </div>
                    )}
                        
                  </div>
                </div>
                <div className = "heading">
                    Address
                <div className = "heading_value">
                {this.state.edited ? (<input type = "text"  className = "heading_value input_Address" id = "input_Address" />) 
                : (<div className = "heading_value">
                {this.state.Address}
                </div>
                )}
                    
                     </div>
                </div>
                <div className = "heading">
                    Wallet
                <div className = "heading_value">
                     {this.state.coins} coins
                    
                        </div>
                </div>
                <div className = "heading save" onClick = {() => {
                    this.setState(() => {
                        return{
                            edited : false
                        }
                    })
                    document.getElementById('ProfileCard').style.height = '32vw'
                    let data = {
                        email :document.getElementById('input_email').value,
                        phone_Number : document.getElementById('input_phone_Number').value,
                        Address : document.getElementById('input_Address').value

                    }
                      
                    postData('api/user/' , data).then((data) => {
                        if(data.email){
                            window.location.reload()
                        }else{
                            alert('we are having some problem')
                        }
                    })
                }} >
                 {this.state.edited ? 'Save' : ''}
                </div>
                <div className = "log_out">
                Log Out
                </div>
            </div>
         </div>
    )
    }
}



const Items_Cont = () => {
    return(
        <div className = "items_cont">
    
                <CateCon_for_profile />
           
        </div>
    )
}

async function postData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: 'PUT', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}
