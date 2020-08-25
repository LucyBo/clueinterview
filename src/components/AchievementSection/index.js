import React, { Component } from 'react';
import './AchievementSection.scss';

export default class index extends Component {
  render() {
    return (
      <section id="achievement">
          <div className="container">
            <div className="row">
              <div className="col col-sm">
                <a href="/" role="button" id="ctgr-2"> <span >Bold Text </span>Link ></a>
              </div>
              <div className="col col-sm">
                <a href="/" role="button" id="ctgr-2"> <span >Bold Text </span>Link ></a>
              </div>
              <div className="col col-sm">
                <a href="/" role="button" id="ctgr-2"> <span >Bold Text </span>Link ></a>
              </div>
              <div className="col col-sm">
                <a href="/" role="button" id="ctgr-2"> <span >Bold Text </span>Link ></a>
              </div>
            </div>
          </div>
      </section>
    )
  }
}
