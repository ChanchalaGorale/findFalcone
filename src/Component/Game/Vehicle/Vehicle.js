import React, { Component } from "react";
import "./Vehicle.css";

class Vehicle extends Component {
  render() {
    return (
      <div className="vehicles text-left custom-radio">
        {this.props.destinationProps.eligibleVehicles.map((vehicle) => (
          <div key={vehicle.name}>
            <input
              disabled={
                this.props.vehicleCount.filter((a) => {
                  return a.name === vehicle.name;
                })[0].total_no === 0
                  ? true
                  : false
              }
              onChange={this.props.onChange}
              checked={
                this.props.destinationProps.vehicle.length === 0 ? false : null
              }
              type="radio"
              name={this.props.destinationProps.name}
              value={vehicle.name}
            />
            <label className="m-2">
              {vehicle.name}{" "}
              <span>
                {
                  this.props.vehicleCount.filter((a) => {
                    return a.name === vehicle.name;
                  })[0].total_no
                }
              </span>
            </label>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default Vehicle;
