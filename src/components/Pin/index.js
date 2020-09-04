import React, { Component } from 'react';
import "./Pin.scss";

class index extends Component {
  render() {
    return (
      <div className="pin">
        <div className="card">
          <div className="container">
          <img className="card-img-top" src="https://images.unsplash.com/photo-1507187632231-5beb21a654a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1677&q=80" alt="Card image cap"/>
          <div className="deco-left"></div>
          <a href="#" className="btn btn-primary">Go to -></a>
          <div className="deco-right"></div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default index;