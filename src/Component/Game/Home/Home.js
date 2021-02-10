import React, { Component } from "react";
import "./Home.css";
import { welcome, startthegame } from "../../../assets/data";
import { Link } from "react-router-dom";

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
          <Link to="/knowmore">
            <button class="btn btn-info btn-lg wlecm-btn">
              Know about Lengaburu
            </button>
          </Link>
          <Link to="/findFalcone">
            <button class="btn btn-info btn-lg wlecm-btn">
              Let's start the search
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
