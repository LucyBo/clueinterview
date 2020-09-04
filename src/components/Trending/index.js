import React, { Component } from 'react';
import "./Trending.scss";
import amsterdam from "../../icons/amsterdam.png";

class Trending extends Component {
  render() {
    return (
      <div id="trending" className="container">
        <h4>Trending</h4>
        <div className="container">
          <a className="btn btn-primary category-btn" href="/" role="button">Link</a>
          <a className="btn btn-primary category-btn" href="/" role="button" >Link</a>
          <a className="btn btn-primary category-btn" href="/" role="button" >Link</a>
          <a className="btn btn-primary category-btn" href="/" role="button" >Link</a>
          <a className="btn btn-primary category-btn" href="/" role="button" >Link</a>
          <a className="btn btn-primary category-btn" href="/" role="button" >Link</a>
        </div>
        <img src={amsterdam}/>
      </div>
    );
  }
}

export default Trending;