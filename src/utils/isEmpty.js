export const isEmpty = obj => {
  const values = Object.values(obj);
  const isTruthy = values.map((val, i) => {
    if (val.constructor === String) {
      return !!val;
    } else if (val.constructor === Array) {
      return !!val.length;
    } else {
      return !(!val.min && !val.max);
    }
  });
  return isTruthy.every(v => !v);
};
