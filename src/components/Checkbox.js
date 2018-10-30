import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name, id, label, checked, handleCheck }) => (
  <Fragment>
    <input
      type="checkbox"
      name={name}
      id={id}
      checked={checked}
      onChange={e => handleCheck(e, id)}
    />
    <label htmlFor={id}>{label}</label>
    <br />
  </Fragment>
);

export default Checkbox;

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  handleCheck: PropTypes.func.isRequired
};
