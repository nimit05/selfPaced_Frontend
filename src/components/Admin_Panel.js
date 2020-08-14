import React from 'react'
import customer from '../img/customer.svg'
import up_arrow from '../img/up-arrow.svg'
import earnings from '../img/earnings.svg'
import products from '../img/products.svg'
import { FaStar } from "react-icons/fa";
import propic from "../img/propic.svg";
import Productbox from './Productbox'

export default class Admin_panel extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            users : [],
            products : [],
            reviews : [],
            mode : 'users'
        }
        fetch('/api/user/getAll').then((res) => res.json())
        .then((data) => {
            if(data){
                this.setState(() => {
                    return {
                        users : data
                    }
                })
            }else{
                alert('internal error ocuured')
            }
        })
        fetch('/api/products/getall').then((res) => res.json())
        .then((data) => {
            if(data){
                this.setState(() => {
                    return {
                    products : data
                    }
                })
            }
        })
        fetch('/api/review').then((res) => res.json())
        .then((data) => {
            if(data){
                this.setState(() => {
                    return {
                    reviews : data
                    }
                })
            }
        })
    }
    render(){
        return(
            <div className = "earnings_pg">
                <div className = "info_bars">
                    <div className = "info_ear_card" onClick = {() => {
                        this.setState(() => {
                            return{
                                mode : 'users'
                            }
                        })
                    }}>
                        <div className = "left">
                            <div>
                                <img src = {customer} alt = " " />
                            </div>
                            <div className = "data">
                                <span className = "num">{this.state.users.length}</span>
                                <br/>
                                <span className = "name">Users</span>
                            </div>
                        </div>
                    </div>
                    <div className = "info_ear_card"  onClick = {() => {
                        this.setState(() => {
                            return{
                                mode : 'reviews'
                            }
                        })
                    }}>
                        <div className = "left">
                            <div>
                                <img src = {earnings} alt = " " className = "ear_img" />
                            </div>
                            <div className = "data">
                                <span className = "num">{this.state.reviews.length}</span>
                                <br/>
                                <span className = "name">Reviews</span>
                            </div>
                        </div>

                    </div>
                    <div className = "info_ear_card"  onClick = {() => {
                        this.setState(() => {
                            return{
                                mode : 'products'
                            }
                        })
                    }}>
                        <div className = "left">
                            <div>
                                <img src = {products} alt = " " className = "ear_img" />
                            </div>
                            <div className = "data">
                                <span className = "num">{this.state.products.length}</span>
                                <br/>
                                <span className = "name">Products</span>
                            </div>
                        </div>
                        
                        </div>
                </div>

                {this.state.mode === 'users' && (
                    <div className = "user_mode">
                    <h1>Users</h1>
                        <div className = "user_cont_ap">
                            <div className = "id_ap">id</div>
                            <div className = "username_ap">username</div>
                            <div className = "email_ap">email</div>
                            <div className = "id_ap">Reports</div>
                        </div>
                        {this.state.users.map((e , i) => {
                            return(
                                <div className = "user_cont_ap" onClick = {() => {
                                    window.location.href = `/Admin_panel_user/${e.username}`
                                }}>
                                    <div className = "id_ap">{i + 1}</div>
                                    <div className = "username_ap">{e.username}</div>
                                    <div className = "email_ap">{e.email}</div>
                                    <div className = "id_ap">{e.reports}</div>
                                </div>
                            )
                        })}
                    </div>

                )}

                {this.state.mode === 'reviews' && (
                    <div className="review_view_ap">
                        <Reviews reviews = {this.state.reviews} />
                    </div>
                )}

                {this.state.mode === 'products' && (
                    <div className = "propage_ap">
                        {this.state.products.map((e) => {
                            return(
                                <div className  ="productbox_ap">
                                    <Productbox
                                    title={e.title}
                                    tag={e.tag}
                                    stitle={e.s_title}
                                    short_des={e.short_des}
                                    refId={e.refrenceId}
                                    bookimg={`covers/${e.cover_img}`}
                                    />
                                    <div className = "product_anlys">
                                        <div className = "del">{e.deleted && 'deleted'}</div>
                                        <div className = "reports">Reports : {e.reports.split(';').length -1}</div>
                                        <div className = "reports">OwnBy : {e.ownBy}</div>
                                        <div className = "reports" onClick =  {() => {
                                            fetch(`/api/products/delete/${e.refrenceId}`)
                                            .then((res) => res.json())
                                            .then((data) => {
                                                if(!data){
                                                    alert('error occured')
                                                }
                                            })
                                            window.location.reload()
                                        }}><a href = "#" >Delete</a></div>
                                    </div>
                                </div>
                            )
                            })
                        }
                    </div>
                )}
                   
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
  


async function postData(url = '', data = {}) {
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
		referrerPolicy: 'no-referrer', // 
    });
    window.location.reload()

}