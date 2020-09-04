import React, { Component } from 'react';
//import Masonry from 'react-masonry-css';
import "./MasonryGallery.scss";
import Pin from "../Pin";

export default class MasonryGallery extends Component {
  render() {
    return (
      <div id="masonry-gallery">
        <div class="container-fluid card-columns">
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
          <Pin/>
        </div>
      </div>
    )
  }
}
