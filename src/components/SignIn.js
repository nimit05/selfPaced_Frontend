import React from 'react'

export default class SignIN extends React.Component{
    constructor(props){
        super(props)
    }

    

    render(){
        return (
            <div className ="SignIn">
            <form>
            <label for = "username" ><b>Username</b></label>
            
            <input type = "text" name = "username" />
            
            <label for = "password" ><b>Password</b></label>
            
            <input type = "password" name = "password" />
            <div class="psw">Forgot <a href="#">password?</a></div>
           <input type = "submit" className = "loginbtn" />
            </form>
            </div>
        )
    }
}