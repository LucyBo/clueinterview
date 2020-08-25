import React, { Component } from 'react'

export default class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter">
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
           <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
          </div>
         <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
        </div>
      </div>
    )
  }
}
