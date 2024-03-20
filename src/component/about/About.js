import React, { Component } from 'react'


export default class About extends Component {

  
  
     state={
      mystring:"mikdad mk"
     }
  render() {
    return (
      <div>
         <h1>{this.state.mystring}</h1>
      </div>
    )
  }
}
