import React, { Component } from 'react';
import "./SmallCard.scss";

export default class SmallCard extends Component {
  render() {
    return (
      <div className="small-card">
        <div class="card">
        <div className="decorative-header">
              <span className="left-triangle"></span>
              <div className="card-category text-uppercase">Card title</div>
              <span className="right-triangle"></span>
              <img src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="card-img-top" alt="..."/>
            </div>
          <div className="card-body">
            <a href="/" className="card-title">Some quick example text to build on the card title and.</a>
          </div>
        </div>
      </div>
    )
  }
}
