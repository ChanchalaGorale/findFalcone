import React, { Component } from "react";
import "./Destination.css";

class Destination extends Component {
  render() {
    return (
      <div className="select-planet">
        <h3 className="planetnumber">Planet {this.props.id}</h3>
        <select
          onChange={this.props.onChange}
          className="custom-select mb-3"
          name={this.props.name}
          value={this.props.destinationProps.destination}
        >
          <option selected="true">
            {this.props.destinationProps.destination}
          </option>
          {this.props.planets.map((planet) => (
            <option key={planet.name}>{planet.name}</option>
          ))}
        </select>
        <br />
      </div>
    );
  }
}

export default Destination;
