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
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			// body: JSON.stringify(data) // body data type must match "Content-Type" header
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
                coins : null 
            }
        }

    render(){
    return(
        <div className = "ProfileCard">
         <div className = "info">
             <div className = "user_pro_pic">    
            </div>
            <div className ="user_name">
                {this.state.name} 
                 <div className = "edit">Edit profile</div>
             </div>
        </div>
            <div className = "hr_pp">
                <hr />
            </div>
            <div className="details">
                <div className = "heading">
                    Username
                    <div className = "heading_value">
                         {this.state.username}
                    </div>
                </div>
                <div className = "heading">
                    Email
                  <div className = "heading_value">
                        {this.state.email}
                         
                </div>
                </div>
                <div className = "heading">
                    Phone No.
                    <div className = "heading_value">
                         {this.state.phone_Number}
                        
                  </div>
                </div>
                <div className = "heading">
                    Address
                <div className = "heading_value">
                        {this.state.Address}
                    
                     </div>
                </div>
                <div className = "heading">
                    Wallet
                <div className = "heading_value">
                     {this.state.coins} coins
                    
                        </div>
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