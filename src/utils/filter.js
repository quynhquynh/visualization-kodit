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

export const filterOptions = (arr, value) => {
  const result = value.reduce((allFilters, val) => {
    const filter = arr.filter(
      a =>
        val === "balcony"
          ? a.balcony
          : a.description && a.description.includes(val)
    );
    allFilters.push(...filter);
    return allFilters;
  }, []);
  return result;
};

export const filterPrice = (arr, value) => {
  let { min, max } = value;
  min = parseInt(min) || 0;
  max = parseInt(max) || Math.pow(10, 7);
  return arr.filter(
    a => a.size_sqm * a.price_sqm >= min && a.size_sqm * a.price_sqm <= max
  );
};

export const filterRoom = (arr, value) => {
  const result = value.reduce((allFilters, val) => {
    const filter = arr.filter(a => a.room_count === parseInt(val));
    allFilters.push(...filter);
    return allFilters;
  }, []);
  return result;
};

export const filterSize = (arr, value) => {
  let { min, max } = value;
  min = parseInt(min) || 0;
  max = parseInt(max) || 200;
  return arr.filter(a => a.size_sqm >= min && a.size_sqm <= max);
};

export const filterYear = (arr, value) => {
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

export const filter = (arr, obj) => {
  let result = [];
  const { location, room_count, built_year, size_sqm, price, options } = obj;
  if (location) {
    result = filterLoc(arr, location);
  }
  if (size_sqm.min || size_sqm.max) {
    result = filterSize(result.length ? result : arr, size_sqm);
  }
  if (price.min || price.max) {
    result = filterPrice(result.length ? result : arr, price);
  }
  if (room_count.length) {
    result = filterRoom(result.length ? result : arr, room_count);
  }
  if (built_year.length) {
    result = filterYear(result.length ? result : arr, built_year);
  }
  if (options.length) {
    result = filterOptions(result.length ? result : arr, options);
  }
  return result;
};
