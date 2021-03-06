import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Success.css";

class Success extends Component {
  planetNames = [];
  vehicleNames = [];
  state = {
    isConnected: true,
    loading: true,
    successMessage: "",
    planet: "",
    totalTime: "",
  };

  componentDidMount() {
    let destinations = this.props.location.state;
    if (destinations !== undefined) {
      this.planetNames = destinations.map((a) => {
        return a.destination;
      });
      this.vehicleNames = destinations.map((a) => {
        return a.vehicle;
      });
    }
    this.setState({ totalTime: this.props.location.totalTime });
    this.getTokenAPI();
  }
  getTokenAPI = () => {
    fetch("https://findfalcone.herokuapp.com/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: {},
    })
      .then((res) => res.json())
      .then((data) => {
        this.findFalconeAPI(data.token, this.planetNames, this.vehicleNames);
      })
      .catch((e) => {
        this.setState({ isConnected: false });
        setTimeout(this.getTokenAPI, 5000);
      });
  };

  findFalconeAPI = (token, planetNames, vehicleNames) => {
    this.setState({ successMessage: "Please wait while we calculate.." });
    fetch("https://findfalcone.herokuapp.com/find", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        planet_names: planetNames,
        vehicle_names: vehicleNames,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ loading: false, isConnected: true });
        if (
          data.status === "error" ||
          data === undefined ||
          this.props.location.fromGame !== true
        ) {
          this.setState({ successMessage: "Please re-initialize the game!" });
          this.props.history.push("/");
        } else
          data.status === "false"
            ? this.setState({
                successMessage: "Sorry! The Queen of Falicornia was not found!",
              })
            : this.setState({
                successMessage:
                  "Congratulations! You found the Queen of Falicornia!",
                planet: data.planet_name,
              });
      })
      .catch((e) => {
        setTimeout(this.findFalconeAPI, 5000);
      });
  };
  render() {
    var planet = this.state.planet;
    return (
      <div className="card text-center success-card">
        <div>
          {this.state.loading && <i className="fa fa-refresh fa-spin"></i>}

          {!this.state.isConnected ? (
            <span>&nbsp;Please wait while we try to connect...</span>
          ) : null}
        </div>
        <div class="card-body text-center">
          <h1 className="card-title">{this.state.successMessage}</h1>
          <br />
          <h3 class="card-text">
            {(planet !== null || planet !== undefined) && planet.length > 0 ? (
              <span className="font-weight-bold">
                The queen was found on {planet}
              </span>
            ) : null}

            {(planet !== null || planet !== undefined) && planet.length > 0 ? (
              <span className="font-weight-bold">
                in {this.state.totalTime} hours.
              </span>
            ) : null}
          </h3>

          <div className="back-btn">
            <Link
              to={{
                pathname: "/findFalcone",
                fromGame: true,
              }}
            >
              <button className="btn btn-lg btn-info bk-btn">Play Again</button>
            </Link>
            <Link
              to={{
                pathname: "/",
                fromGame: true,
              }}
            >
              <button className="btn btn-lg btn-secondary bk-btn">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
