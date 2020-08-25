import React, { Component } from 'react';

export default class CustomCard extends Component {
  render() {
    return (
      <div>
        <div class="card" style={{width: "18rem"}}>
          <img src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}
