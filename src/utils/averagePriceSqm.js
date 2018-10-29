export const averagePriceSqm = arr => {
  if (!arr.length) {
    return null;
  }
  const sum = arr.map(item => item.price_sqm).reduce((a, b) => a + b);
  const null_arr = arr.filter(a => !a.price_sqm);
  const len = arr.length - null_arr.length;
  return sum / len;
};
