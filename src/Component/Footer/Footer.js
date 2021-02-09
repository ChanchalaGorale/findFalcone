import React, { Component } from "react";
import "./Footer.css";
import { problemlink } from "../../assets/data";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="text-center fixed-bottom bg-dark footer">
        <p>
          © Coding problem - &nbsp;
          <a href={problemlink} className="footerlinnk">
            Find the Queen of Falicornia
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Footer;
