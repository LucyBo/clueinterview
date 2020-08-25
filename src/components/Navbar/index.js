import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Main from "../Main";
import MasonryGallery from "../MasonryGallery";
import Footer from "../Footer";
import CustomCard from "../Card";
import Brand from "../Brand";
import './Navbar.scss';

export default class Navbar extends Component{
  render() {
  return (
    <Router>
      <div className="justify-content-center">
        <Brand/>
      </div>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-left">
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-uppercase" >
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/card">Card</NavLink>
          </li>
        </ul>
        </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <MasonryGallery />
          </Route>
          <Route path="/dashboard">
            <Footer />
          </Route>
          <Route path="/card">
            <CustomCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}