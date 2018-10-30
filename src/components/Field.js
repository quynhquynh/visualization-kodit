import React, { Fragment } from "react";
import PropTypes from "prop-types";

import TextInput from "./TextInput";
import Checkbox from "./Checkbox";

const Field = ({ p, arr, value, className, onChange, handleCheck }) => (
  <Fragment>
    <p>{p}</p>
    <div className={className && className}>
      {arr.map(
        (item, i) =>
          onChange ? (
            <TextInput key={i} {...item} value={value} onChange={onChange} />
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
  onChange: PropTypes.func,
  handleCheck: PropTypes.func
};
