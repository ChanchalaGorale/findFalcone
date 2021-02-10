import React, { Component } from "react";

import {
  storyPara1,
  storyPara2,
  storyPara3,
  Problem,
} from "../../../assets/data";
import Logo from "../../../assets/logo.png";
import Donlon from "../../../assets/Resources/Donlon.png";
import Enchai from "../../../assets/Resources/Enchai.png";
import Jebing from "../../../assets/Resources/Jebing.png";
import Sapir from "../../../assets/Resources/Sapir.png";
import Lerbin from "../../../assets/Resources/Lerbin.png";
import Pingasor from "../../../assets/Resources/Pingasor.png";
import SpacePod from "../../../assets/Resources/SpacePod.png";
import SpaceRocket from "../../../assets/Resources/SpaceRocket.png";
import SpaceShuttle from "../../../assets/Resources/SpaceShuttle.png";
import SpaceShip from "../../../assets/Resources/SpaceShip.png";
import { Link } from "react-router-dom";

class Knowmore extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center knowmore">
          <span>
            <img src={Logo} alt="logo" className="knowmore-logo" />
          </span>
          &nbsp; King Shan of Lengaburu
        </h3>
        <br />
        <br />
        {/*Story*/}
        <div>
          <h5>
            {storyPara1} {storyPara2}
          </h5>

          <h5>{storyPara3}</h5>
          <p className="problem-text text-center bg-dark text-light p-2">
            {Problem}
          </p>
        </div>

        {/*Planets*/}
        <div className="card border-info mb-3 text-center">
          <h2 className="card-header">Potential hideout planets</h2>
          <div className="card-body text-info">
            <div id="planets" className="row">
              <div className="col text-center">
                <figure>
                  <img className="rounded-circle" src={Donlon} alt="Donlon" />
                  <figcaption>
                    <strong>Donlon</strong>
                    <br />
                    100 MM
                  </figcaption>
                </figure>
              </div>
              <div className="col text-center">
                <figure>
                  <img className="rounded-circle" src={Enchai} alt="Enchai" />
                  <figcaption>
                    <strong>Enchai</strong>
                    <br />
                    200 MM
                  </figcaption>
                </figure>
              </div>
              <div className="col text-center">
                <figure>
                  <img className="rounded-circle" src={Jebing} alt="Jebing" />
                  <figcaption>
                    <strong>Jebing</strong>
                    <br />
                    300 MM
                  </figcaption>
                </figure>
              </div>
              <div className="col text-center">
                <figure>
                  <img className="rounded-circle" src={Sapir} alt="Sapir" />
                  <figcaption>
                    <strong>Sapir</strong>
                    <br />
                    400 MM
                  </figcaption>
                </figure>
              </div>
              <div className="col text-center">
                <figure>
                  <img
                    id="lerbin"
                    className="rounded-circle"
                    src={Lerbin}
                    alt="Lerbin"
                  />
                  <figcaption>
                    <strong>Lerbin</strong>
                    <br />
                    500 MM
                  </figcaption>
                </figure>
              </div>
              <div className="col text-center">
                <figure>
                  <img
                    className="rounded-circle"
                    src={Pingasor}
                    alt="Pingasor"
                  />
                  <figcaption>
                    <strong>Pingasor</strong>
                    <br />
                    600 MM
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/*Space vehicle*/}
        <div className="card border-info mb-3 text-center">
          <h2 className="card-header">Available space vehicles</h2>
          <div className="card-body text-info">
            <div className="row" id="vehicles">
              <div className="col text-center">
                <figure>
                  <img
                    src={SpacePod}
                    alt="Space Pod"
                    className="space-pod-img"
                  />
                  <figcaption>
                    <strong>Space Pod</strong>
                    <br /> 200 MM(2 MM/hour)
                    <br /> Units Available - 2
                  </figcaption>
                </figure>
              </div>
              <div className="col text-center">
                <figure>
                  <img
                    src={SpaceRocket}
                    alt="Space Rocket"
                    className="space-pod-img"
                  />
                  <figcaption>
                    <strong>Space Rocket</strong>
                    <br /> 300 MM(4 MM/hour)
                    <br /> Units Available - 1
                  </figcaption>
                </figure>
              </div>
              <div className="col text-center">
                <figure>
                  <img
                    src={SpaceShuttle}
                    alt="Space Shuttle"
                    className="space-pod-img"
                  />
                  <figcaption>
                    <strong>Space Shuttle</strong>
                    <br /> 400 MM(5 MM/hour)
                    <br /> Units Available - 1
                  </figcaption>
                </figure>
              </div>
              <div className="col text-center">
                <figure>
                  <img
                    src={SpaceShip}
                    alt="Space Ship"
                    className="space-pod-img"
                  />
                  <figcaption>
                    <strong>Space Ship</strong>
                    <br /> 600 MM(10 MM/hour)
                    <br /> Units Available - 2
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center bottom-space">
          <Link to={{ pathname: "/findFalcone", fromGame: true }}>
            <button className="btn btn-lg btn-info">
              Let's start the search
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Knowmore;
