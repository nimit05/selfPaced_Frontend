import React from 'react'

export default class Admin_panel extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            users : [],
            products : [],
            
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
        fetch('/api/products').then((res) => res.json())
        .then((data) => {
            if(data){
                this.setState(() => {
                    return {
                    products : data.products
                    }
                })
            }
        })
    }
    render(){
        return(
            <div className = "admin_panel">
            <h1>Hii this id admin panel</h1>
            <div className = "count_div" ><span className = "count_user">No.of Users - {this.state.users.length}</span>
            <span className = "count_products">No. of products - {this.state.products.length}</span>
            </div>
            {this.state.users.map((user , i) => {
                const id = i + 1
                return(
                    <Det 
                    username = {user.username}
                    />
                )
            })}
            </div>
        )
    }
}

 class Det extends React.Component{
    render(){
        return(
            <div className = "admin_det">
                <div className = "ap_id" >{this.props.id}</div>
                <div className = "ap_username" onClick = {() => {
                    window.location.href = `/Admin_panel_user/${this.props.username}`
                }} ><a href = "#" >{this.props.username}</a></div>
                <div onClick = {() => {
                    postData(`/api/user/${this.props.username}`)
                }}><a href = "#">Delete</a></div>
                
            </div>
        )
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
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    window.location.reload()

}