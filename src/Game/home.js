import React, { Component } from "react";
import "./Home.css";
import { welcome, startthegame } from "../assets/data";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  render() {
    window.scrollTo(0, 0);
    return (
      <div class="jumbotron jumbotron-fluid">
        <div className="welcm-pg">
          <h1>{welcome}</h1>
          <h3>{startthegame}</h3>
          <a href="/knowmore" class="btn btn-info btn-lg wlecm-btn">
            Know about Lengaburu
          </a>
          <a href="/findFalcone" class="btn btn-info btn-lg wlecm-btn">
            Let's start the search
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
