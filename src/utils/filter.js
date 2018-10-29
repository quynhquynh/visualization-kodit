export const filterLoc = (arr, value) => {
  value = value.toLowerCase().trim();
  value = value.split(" ");
  const [char, num] = value;
  if (!num) {
    const len = char.length;
    return arr.filter(a => a.street.toLowerCase().substr(0, len) === char);
  } else {
    return arr.filter(
      a => a.street.toLowerCase() === char && a.street_number.toString() === num
    );
  }
};

export const filterOptions = (arr, res, value) => {
  arr = res.length ? res : arr;
  let result = [];
  for (let val of value) {
    let filter = [];
    if (val === "balcony") {
      filter = arr.filter(a => a.balcony > 0);
    } else {
      filter = arr.filter(a => a.description && a.description.includes(val));
    }
    result = [...result, ...filter];
  }
  return result;
};

export const filterPrice = (arr, res, value) => {
  arr = res.length ? res : arr;
  let { min, max } = value;
  min = parseInt(min) || 0;
  max = parseInt(max) || Math.pow(10, 7);
  return arr.filter(
    a => a.size_sqm * a.price_sqm >= min && a.size_sqm * a.price_sqm <= max
  );
};

export const filterRoom = (arr, res, value) => {
  arr = res.length ? res : arr;
  let result = [];
  for (let val of value) {
    const filter = arr.filter(a => a.room_count === parseInt(val));
    result = [...result, ...filter];
  }
  return result;
};

export const filterSize = (arr, res, value) => {
  arr = res.length ? res : arr;
  let { min, max } = value;
  min = parseInt(min) || 0;
  max = parseInt(max) || 200;
  return arr.filter(a => a.size_sqm >= min && a.size_sqm <= max);
};

export const filterYear = (arr, res, value) => {
  arr = res.length ? res : arr;
  let result = [];
  for (let val of value) {
    const num = parseInt(val);
    const operator = val.substr(4);
    let filter = [];
    if (operator) {
      filter = arr.filter(
        a => (operator === "<" ? a.built_year < num : a.built_year > num)
      );
    } else {
      const next = num + 20;
      filter = arr.filter(a => a.built_year >= num && a.built_year < next);
    }
    result = [...result, ...filter];
  }
  return result;
};
