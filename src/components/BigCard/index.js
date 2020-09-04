import React, { Component } from 'react';
import "./BigCard.scss";

export default class BigCard extends Component {
  render() {
    return (
      <div className="big-card">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="card-img-top card-img img responsive" alt="..."/>
          <div className="card-img-overlay">
            <div className="decorative-header">
            <span className="left-triangle"></span>
              <div className="card-category text-uppercase">Card title</div>
            <span className="right-triangle"></span>
          
            </div>
            <a href="/" className="card-title">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

