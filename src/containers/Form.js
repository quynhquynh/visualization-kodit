import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import "../styles/_Form.scss";
import fields from "../fields";

import Field from "../components/Field";

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
    const allFields = [
      {
        p: "Location:",
        arr: loc,
        value: location,
        onChange: this.handleChange
      },
      {
        p: "Number of rooms:",
        arr: rooms,
        className: "flex",
        handleCheck: this.handleCheck
      },
      {
        p: "Built year:",
        arr: year,
        handleCheck: this.handleCheck
      },
      {
        p: "Area:",
        arr: area,
        className: "grid",
        value: size_sqm,
        onChange: this.handleChange
      },
      {
        p: "Price:",
        arr: aprt_price,
        className: "grid",
        value: price,
        onChange: this.handleChange
      },
      {
        p: "Other options",
        arr: opts,
        handleCheck: this.handleCheck
      }
    ];

    return (
      <form onSubmit={this.handleSubmit}>
        {allFields.map((field, i) => (
          <Field key={i} {...field} />
        ))}
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
