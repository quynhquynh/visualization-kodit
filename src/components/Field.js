import React, { Fragment } from "react";
import PropTypes from "prop-types";

import TextInput from "./TextInput";
import Checkbox from "./Checkbox";

const Field = ({ p, arr, value, className, handleChange, handleCheck }) => (
  <Fragment>
    <p>{p}</p>
    <div className={className && className}>
      {arr.map(
        (item, i) =>
          handleChange ? (
            <TextInput
              key={i}
              {...item}
              value={value}
              handleChange={handleChange}
            />
          ) : (
            <Checkbox key={i} {...item} handleCheck={handleCheck} />
          )
      )}
    </div>
  </Fragment>
);

export default Field;

Field.propTypes = {
  p: PropTypes.string.isRequired,
  arr: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  className: PropTypes.string,
  handleChange: PropTypes.func,
  handleCheck: PropTypes.func
};
