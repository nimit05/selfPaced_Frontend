import React from 'react'
import propic from '../img/propic.svg';
import {FaStar} from 'react-icons/fa';
import Productbox from './Productbox'

export default class User_details extends React.Component{
    constructor(props){
        super(props)

        this.state = {
			username: null,
			email: null,
			phone_Number: null,
			Address: null,
            f_name: null,
            l_name : null,
			edited: false,
			pro_pic : null,
            reviews : [],
            s_products : [],
            o_products : [],
            reports : [],
		};

       const {username} = this.props.match.params;
       fetch(`/api/user/getUser/${username}`).then((res) => res.json())
       .then((data) => {
           if(data){
            this.setState(() => {
                return {
                    username: data.username,
                    email: data.email,
                    phone_Number: data.phone_Number,
                    Address: data.Address,
                    f_name: data.f_name,
                    l_name : data.l_name,
                    pro_pic : data.pro_img,
                };
            });
           }
       }) 
       fetch(`/api/review/getAll/${username}`).then((res) => res.json())
       .then((data) => {
           if(data) {
               this.setState(() => {
                   return {
                       reviews : data
                   }
               })
           }
       })
       fetch(`/api/products/Sold_products/${username}`).then((res) => res.json())
       .then((data) => {
           if(data) {
               this.setState(() => {
                   return {
                       s_products : data
                   }
               })
           }
       })

       fetch(`/api/user/reports/${username}`).then((res) => res.json())
       .then((data) => {
           if(data){
               this.setState(() => {
                   return {
                       reports : data
                   }
               })
           }
       })
   }
    render(){
        return (
            <div className = "admin_pannel_user">
            <div className = "ap_user_det">
                <div className = "ap-user-value">First Name : {this.state.f_name}</div>
                <div className = "ap-user-value">Last Name : {this.state.l_name}</div>
                <div className = "ap-user-value">username : {this.state.username}</div>
                <div className = "ap-user-value">email : {this.state.email}</div>
                <div className = "ap-user-value">phone_Number : {this.state.phone_Number}</div>
                <div className = "ap-user-value">Address : {this.state.Address}</div>
                <div className = "ap-user-value">Reports : {this.state.reports.length -1 }</div>
                <div className = "ap-deleteUser" onClick = {async() => {
                    window.location.href = '/Ponga_Wera'
                   let req = await postData(`/api/user/${this.state.username}`)
                  
                    
                }}>Delete User </div>
            </div>
            <div className  = "rev_cont_ap">
                <Reviews reviews = {this.state.reviews} />
            </div>

            <div className = "propage_ap">
            {this.state.s_products.map((e) => {
                return(
                    <div className  ="productbox_ap">
                        <Productbox
                        title={e.title}
                        tag={e.tag}
                        stitle={e.s_title}
                        short_des={e.short_des}
                        refId={e.refrenceId}
                        bookimg={propic}
                        />
                        <div className = "product_anlys">
                            <div className = "del">{e.deleted && 'deleted'}</div>
                            <div className = "reports">Reports : {e.reports.split(';').length -1}</div>
                            <div className = "reports">OwnBy : {e.ownBy}</div>
                        </div>
                    </div>
                )
                })
            }
        </div>
           
            </div>
        )
    }
}

class Reviews extends React.Component {

    render() {
      return (
        <div className="review_section">
          <div className="rev_cont_ap">
            {this.props.reviews.map(review => {
              return (
                <div className="rev_con_ap">
                  <div className="user_det">
                    <img src={propic} />
                    <span className="review_username">{review.userId}</span>
                  </div>
                  <div>
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
  
                      return (
                        <label>
                          <FaStar color={ratingValue <= review.Rating ? "#ffc107" : "#D3D3D3"} size={20} />
                        </label>
                      );
                    })}
                  </div>
                  <div className="comment">{review.comment}</div>
                  <div className = "action_review">
                    <div>Reports : {review.reports.split(';').length - 1}</div>
                    <div className = "del_review" onClick = {() => {
                        postData(`/api/review/${review.id}`)
                        window.location.reload()
                    }}>Delete</div>
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
  

  



async function postData(url = '') {
	// Default options are marked with *
	const response = await fetch(url, {
		method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer',
    });
    window.location.reload()

}

