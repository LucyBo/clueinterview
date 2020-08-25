import React, { Component } from 'react';
import './Brand.scss';

export default class Brand extends Component {
  render() {
    return (
      <div>
        <a className="navbar-brand" href="/">
          <span className="typography-top">Clue</span>
          <span className="typography-bottom">Interview</span>
        </a>
      </div>
    )
  }
}
