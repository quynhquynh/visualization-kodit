import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import "../styles/_Form.scss";
import fields from "../fields";

import Checkbox from "../components/Checkbox";
import TextInput from "../components/TextInput";

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      room_count: [],
      built_year: [],
      size_sqm: {
        min: "",
        max: ""
      },
      price: {
        min: "",
        max: ""
      },
      options: []
    };
  }

  handleChange = (e, className) => {
    const { name, value } = e.target;
    const { state } = this;
    switch (name) {
      case "location":
        this.setState({ [name]: value });
        break;
      default:
        this.setState({
          [name]: { ...state[name], [className]: value }
        });
        break;
    }
  };

  handleCheck = (e, id) => {
    const { name, checked } = e.target;
    const { state } = this;
    if (!checked) {
      const copy = [...state[name]];
      const index = copy.indexOf(id);
      copy.splice(index, 1);
      this.setState({
        [name]: copy
      });
    } else {
      this.setState({
        [name]: [...state[name], id]
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { filter } = this.props;
    filter(this.state);
  };

  render() {
    const { loc, area, aprt_price, year, rooms, opts } = fields;
    const { location, size_sqm, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput {...loc} value={location} onChange={this.handleChange} />
        <Fragment>
          <p>Number of rooms:</p>
          <div className="flex">
            {rooms.map((room, i) => (
              <Checkbox key={i} {...room} handleCheck={this.handleCheck} />
            ))}
          </div>
        </Fragment>
        <Fragment>
          <p>Built year:</p>
          <div>
            {year.map((year, i) => (
              <Checkbox key={i} {...year} handleCheck={this.handleCheck} />
            ))}
          </div>
        </Fragment>
        <Fragment>
          <p>Area:</p>
          <div className="grid">
            {area.map((size, i) => (
              <TextInput
                key={i}
                {...size}
                value={size_sqm}
                onChange={this.handleChange}
              />
            ))}
          </div>
        </Fragment>
        <Fragment>
          <p>Price:</p>
          <div className="grid">
            {aprt_price.map((p, i) => (
              <TextInput
                key={i}
                {...p}
                value={price}
                onChange={this.handleChange}
              />
            ))}
          </div>
        </Fragment>
        <Fragment>
          <p>Other options:</p>
          <div>
            {opts.map((opt, i) => (
              <Checkbox key={i} {...opt} handleCheck={this.handleCheck} />
            ))}
          </div>
        </Fragment>
        <Fragment>
          <input type="submit" value="Search data" />
        </Fragment>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  filter: PropTypes.func.isRequired
};
