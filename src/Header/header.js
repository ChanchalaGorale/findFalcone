import React, { Component } from "react";
import "./header.css";
import { title, geektrusthome } from "../assets/data";
import Logo from "../assets/logo.png";
class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top nav-logo"
            alt="King Shan"
          />
          &nbsp; <strong>{title}</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/findFalcone"
                data-toggle="tooltip"
                title="Reset the find operation"
              >
                Start / Reset
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={geektrusthome}
                target="_blank"
                rel="noopener noreferrer"
              >
                Geek Trust Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
