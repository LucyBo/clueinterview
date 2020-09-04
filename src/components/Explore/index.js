import "./Explore.scss";
import React, { Component } from 'react';
import html from "../../icons/html.png";
import contact from "../../icons/contact.png";
import jquery from "../../icons/jquery.png";
import paw from "../../icons/paw.png";
import share from "../../icons/share.png";
import sketch from "../../icons/sketch.png";

class Explore extends Component {
  render() {
    return (
      <div id="explore" className="container">
        <h4>Explore</h4>
        <div className="container">
          <div className="icon-menu"> 
          <img src={html}/>
          <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-1">Link</a>
          </div>
          <div className="icon-menu"> 
          <img src={contact}/>
          <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-2">Link</a>
          </div>
          <div className="icon-menu"> 
          <img src={jquery}/>
          <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-3">Link</a>
          </div>
          <div className="icon-menu"> 
          <img src={paw}/>
          <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-4">Link</a>
          </div>
          <div className="icon-menu"> 
          <img src={share}/>
          <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-5">Link</a>
          </div>
          <div className="icon-menu"> 
          <img src={sketch}/>
          <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-6">Link</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;