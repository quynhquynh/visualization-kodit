import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Input = ({ name, id, className, placeholder, value, onChange }) => {
  if (["min", "max"].includes(placeholder)) {
    const { min, max } = value;
    value = placeholder === "min" ? min : max;
  }
  return (
    <Fragment>
      <input
        type="text"
        name={name}
        id={id && id}
        className={className && className}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e, className)}
      />
    </Fragment>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
    .isRequired,
  onChange: PropTypes.func.isRequired
};
