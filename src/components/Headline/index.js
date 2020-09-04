import React, { Component } from 'react';
import "./Headline.scss";
import BigCard from "../BigCard";
import SmallCard from "../SmallCard";
import Explore from "../Explore";
import Trending from "../Trending";

export default class Headline extends Component {
  render() {
    return (
      <section id="headline">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <BigCard/>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-6">
              <SmallCard/>
            </div>
            <div className="col col-lg-3 mcol-d-6 col-sm-6">
              <SmallCard/>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
          <div className="col col-lg-6 col-md-6 col-sm-12">
              <Explore/>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-6">
              <Trending/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
