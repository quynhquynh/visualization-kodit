export const checkEmpty = obj => {
  const values = Object.values(obj);
  const notEmpty = {};
  for (let val of values) {
    if (val.constructor === String) {
      notEmpty[val] = !!val;
    } else if (val.constructor === Array) {
      notEmpty[val] = !!val.length;
    } else {
      notEmpty[val] = !(!val.min && !val.max);
    }
  }
  return Object.values(notEmpty).every(v => !v);
};
