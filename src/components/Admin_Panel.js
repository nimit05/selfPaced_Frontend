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
                <div><a href = "#">Report</a></div>
                
            </div>
        )
    }
}

