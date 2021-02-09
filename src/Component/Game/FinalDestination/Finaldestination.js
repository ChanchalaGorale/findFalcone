import React, { Component } from "react";
import Destination from "../Destination/Destination";
import Vehicle from "../Vehicle/Vehicle";
import { Link } from "react-router-dom";
import "./Finaldestination.css";

class FinalDestination extends Component {
  state = {
    loading: true,
    planets: [],
    destinations: [
      {
        id: "One",
        name: "planetOne",
        destination: "Select 1st planet",
        vehicle: "",
        timeTaken: 0,
        isSelected: false,
        eligibleVehicles: [],
      },
      {
        id: "Two",
        name: "planetTwo",
        destination: "Select 2nd planet",
        vehicle: "",
        timeTaken: 0,
        isSelected: false,
        eligibleVehicles: [],
      },
      {
        id: "Three",
        name: "planetThree",
        destination: "Select 3rd planet",
        vehicle: "",
        timeTaken: 0,
        isSelected: false,
        eligibleVehicles: [],
      },
      {
        id: "Four",
        name: "planetFour",
        destination: "Select 4th planet",
        vehicle: "",
        timeTaken: 0,
        isSelected: false,
        eligibleVehicles: [],
      },
    ],
    vehicles: [],
    disabled: true,
    totalTime: 0,
  };

  originalVehicles = [];
  originalPlanetList = [];

  callPlanetsAPI = () => {
    fetch("https://findfalcone.herokuapp.com/planets")
      .then((res) => res.json())
      .then((planets) => {
        this.setState({ planets });
        this.originalPlanetList.push(planets);
      })
      .catch((e) => {
        setTimeout(this.callPlanetsAPI, 5000);
      });
  };

  callVehiclesAPI = () => {
    fetch("https://findfalcone.herokuapp.com/vehicles")
      .then((res) => res.json())
      .then((vehicles) => {
        this.setState({ vehicles });
        this.originalVehicles.push(vehicles);
        this.setState({ loading: false });
      })
      .catch((e) => {
        setTimeout(this.callVehiclesAPI, 5000);
      });
  };

  componentDidMount() {
    // if(this.props.location.fromGame!==true)
    //     this.props.history.push('/');
    this.callPlanetsAPI();
    this.callVehiclesAPI();
  }

  handleChange = (e) => {
    var isSelected = this.state.destinations.filter((destination) => {
      return e.target.name === destination.name;
    });

    if (isSelected[0].isSelected === false) {
      var remPlanet = this.state.planets.filter((planet) => {
        return planet.name !== e.target.value;
      });

      this.setState({ planets: remPlanet });
    } else {
      var _prevPlanet = isSelected[0];

      var prevPlanet = this.originalPlanetList[0].filter(
        (planet) => planet.name === _prevPlanet.destination
      );

      let _remPlanets = [...this.state.planets];
      _remPlanets.push(prevPlanet[0]);
      var remPlanets = _remPlanets.filter((planet) => {
        return planet.name !== e.target.value;
      });
      this.setState({ planets: remPlanets });
    }

    var destinations = [...this.state.destinations];
    destinations.map((d) => {
      if (d.name === e.target.name) {
        d.isSelected = true;
        d.destination = e.target.value;
        d.vehicle = "";
        d.timeTaken = 0;
      }
      return "";
    });
    this.setState({ destinations });

    let planet = this.state.planets.filter((planet) => {
      return planet.name === e.target.value;
    });
    this.handleVehicles(planet, e);
  };

  handleVehicles = (planet, e) => {
    let eligibleVehicles = this.state.vehicles.filter((vehicle) => {
      return vehicle.max_distance >= planet[0].distance;
    });
    var destinations = [...this.state.destinations];
    destinations.map((d) => {
      if (d.name === e.target.name) {
        d.eligibleVehicles = eligibleVehicles;
      }
      return "";
    });
    this.setState({ destinations });
  };

  handleReset = () => {
    this.setState({
      planets: [],
      destinations: [
        {
          id: "One",
          name: "planetOne",
          destination: "Select 1st Planet",
          vehicle: "",
          timeTaken: 0,
          isSelected: false,
        },
        {
          id: "Two",
          name: "planetTwo",
          destination: "Select 2nd Planet",
          vehicle: "",
          timeTaken: 0,
          isSelected: false,
        },
        {
          id: "Three",
          name: "planetThree",
          destination: "Select 3rd Planet",
          vehicle: "",
          timeTaken: 0,
          isSelected: false,
        },
        {
          id: "Four",
          name: "planetFour",
          destination: "Select 4th Planet",
          vehicle: "",
          timeTaken: 0,
          isSelected: false,
        },
      ],
      vehicles: [],
      disabled: true,
      totalTime: 0,
    });
    this.callPlanetsAPI();
    this.callVehiclesAPI();
  };

  handleVehicleChange = (e) => {
    var destinations = [...this.state.destinations];
    destinations.map((d) => {
      if (d.name === e.target.name) {
        if (d.vehicle === "") {
          this.handleVehicleCountWhenNotSelected(e);
        } else {
          this.handleVehicleCountWhenSelected(e);
        }
        d.vehicle = e.target.value;
      }
      return "";
    });
    this.setState({ destinations });
    this.changeButtonState();
    this.handleTime(e);
  };

  handleVehicleCountWhenNotSelected = (e) => {
    var vehicles = [...this.state.vehicles];
    vehicles.map((a) => {
      if (e.target.value === a.name) a.total_no -= 1;
      return "";
    });
    this.setState({ vehicles });
  };

  handleVehicleCountWhenSelected = (e) => {
    var prevVehicle = this.state.destinations.filter((a) => {
      return a.name === e.target.name;
    })[0].vehicle;
    var vehicles = [...this.state.vehicles];
    vehicles.map((a) => {
      if (e.target.value === a.name) a.total_no -= 1;
      if (a.name === prevVehicle) a.total_no += 1;
      return "";
    });

    this.setState({ vehicles });
  };

  changeButtonState = () => {
    var disabled = this.state.destinations.every((a) => {
      return a.vehicle.length > 0;
    });
    this.setState({ disabled: !disabled });
  };

  handleTime = (e) => {
    var desObj = this.state.destinations.filter((a) => {
      return a.name === e.target.name;
    });

    var planet = desObj[0].destination;
    var plObj = this.originalPlanetList[0].filter((a) => {
      return planet === a.name;
    });
    var distance = plObj[0].distance;

    var vehicleObj = this.state.vehicles.filter((a) => {
      return a.name === e.target.value;
    });
    var speed = vehicleObj[0].speed;
    var time = distance / speed;
    var destinations = [...this.state.destinations];
    destinations.map((a) => {
      if (a.name === e.target.name) a.timeTaken = time;
      return "";
    });
    this.setState({ destinations });
    this.calculateTotalTime();
  };

  calculateTotalTime = () => {
    var destinations = [...this.state.destinations];
    let totalTime = 0;
    destinations.map((a) => {
      totalTime += a.timeTaken;
      return "";
    });
    this.setState({ totalTime });
  };

  render() {
    return (
      <>
        <div className="myCont container h-100 d-flex flex-column">
          <div className="p-4">
            <h1 className="text-center ">Select the planets and vehicles</h1>
            <h3 className="text-center p-2">
              <span class="badge badge-secondary p-2">
                Time taken: &nbsp;
                {this.state.totalTime}
              </span>
            </h3>
          </div>

          <div id="main">
            <div className="row destination text-center">
              {this.state.destinations.map((destination) => (
                <div
                  key={destination.id}
                  style={
                    !destination.isSelected ? { height: "min-content" } : null
                  }
                  class="card text-white bg-info mb-3 col mycard "
                >
                  <Destination
                    planets={this.state.planets}
                    onChange={this.handleChange}
                    destinationProps={destination}
                    name={destination.name}
                    key={destination.id}
                    id={destination.id}
                  />

                  {destination.isSelected ? (
                    <Vehicle
                      vehicleCount={this.state.vehicles}
                      onChange={this.handleVehicleChange}
                      destinationProps={destination}
                    />
                  ) : null}
                  <br />
                </div>
              ))}

              <br />
              <br />
            </div>
            <div className="row justify-content-center">
              <div className="findFalconeButtons">
                <Link
                  disabled
                  to={{
                    pathname: "/success",
                    state: this.state.destinations,
                    fromGame: true,
                    totalTime: this.state.totalTime,
                  }}
                >
                  <button
                    disabled={this.state.disabled}
                    className="btn btn-lg btn-info"
                    data-toggle="tooltip"
                    title="Select all four planets to find queen falcone"
                  >
                    Find Falcone!
                  </button>
                </Link>
                <button
                  disabled={this.state.loading}
                  onClick={this.handleReset}
                  className="btn btn-lg btn-dark btn-margin"
                >
                  {this.state.loading ? (
                    <i className="fa fa-refresh fa-spin"></i>
                  ) : (
                    "Reset"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FinalDestination;
