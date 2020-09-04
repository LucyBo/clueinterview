import React, { Component } from 'react';
import Brand from "../Brand";
import './Footer.scss';
import Newsletter from "../Newsletter";

export default class Footer extends Component {
  render() {
    return (
      <footer>
       <div className="container-fluid text-left">
        <div className="row footer-info">
          <div className="col col-lg-8 col-md-6 col-sm-12">
            <Brand/>
            <p>
              <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-1">Link</a>
              <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-2">Link</a>
              <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-3">Link</a>
              <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-4">Link</a>
              <a className="btn btn-primary category-btn" href="/" role="button" id="ctgr-5">Link</a>
            </p>
            <p>
            Also from The Spruce Team: <a href="/">The Lucy</a> <a href="/">The Johnny</a>
            </p>
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-12">
            <p>Get daily tips and tricks for making your code.</p>
            <Newsletter/>
            <div className="row footer-links">
            <div className="col">
              <p><a href="/">About Us</a></p>
              <p><a href="/">Terms of Use</a></p>
              <p><a href="/">Cookies</a></p>
            </div>
            <div className="col">
              <p><a href="/">Career</a></p>
              <p><a href="/">Contact</a></p>
              <p><a href="/">Advertise</a></p>
            </div>
            </div>
          </div>
        </div>
      </div>
        <div className="container-fluid author text-left">
          <p> This website was handcrafted by Lucyna Borkowska </p>
          <p> Clue Interview - part of the LucyBo publishing family </p>
          <p>Beautiful free photos contributed by talented community of <a href="https://www.pexels.com/">Pexels</a> and <a href="https://www.unsplash.com/">Unsplash</a> 
          </p> 
          <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          </p>
        </div>
      </footer>
    )
  }
}
