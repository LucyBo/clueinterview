import React, { Component } from 'react';
import "./Island-1.scss";
import Pin from "../Pin"

class IslandI extends Component {
  render() {
    return (
      <div id="island-1">
        <h2>Island 1 <span className="arrows">>></span></h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-4 col-md-12 col-sm-12"><Pin/></div>
            <div className="col col-lg-4 col-md-6 col-sm-12"><Pin/></div>
            <div className="col col-lg-4 col-md-6 col-sm-12"><Pin/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default IslandI;