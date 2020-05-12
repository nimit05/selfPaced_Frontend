import React from 'react'

// <div className = "condition">Condition : <span className = "good">{this.state.isgood ?  "good" : "poor" } </span></div>

export default class Productbox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isgood :true,
      old : true
    }
  }
  render(){
        return (
          <div className = "productcont">
          <div className = "strip"></div>
          <div className = "inclined">
          <div className = "old"></div>
          </div>
          </div>
        )
    }
  }

