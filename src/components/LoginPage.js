import React from 'react'
import Header from './Header'
import SignIN from './SignIn'
import NewUser from './NewUser'

export default class LoginPage extends React.Component{
    render(){
        return (
            <div className = "loginPage">
            <div className = "container">
            <div className= "container2">
            <div className = "subcont">
            <Header />
            <SignIN />
            </div>
            </div>
            <NewUser />
            </div>
            </div>
        )
    }
}