import { filterOptions } from "./filter";
import { filterRoom } from "./filter";
import { averagePriceSqm } from "./averagePriceSqm";
import { filterYear } from "./filter";
import fields from "../fields";

const calcPieChart = (arr, balcony) => {
  const numBalcony = filterOptions(arr, ["balcony"]).length;
  const numAll = arr.length;
  const len = balcony.length;
  const [bal, noBal] = len
    ? [{ ...balcony[0] }, { ...balcony[1] }]
    : [{ name: "balcony" }, { name: "no balcony" }];
  bal.value = numBalcony;
  noBal.value = numAll - numBalcony;
  return len ? [bal, noBal] : [...balcony, bal, noBal];
};

const calcPieLineChart = (arr, data) => {
  const rlen = data.length;
  const { rooms } = fields;
  const roomData = rooms.map((room, i) => {
    const roomCountGroup = filterRoom(arr, [i + 1]);
    const len = roomCountGroup.length;
    const dataWithRoomCount = rlen
      ? { ...data[i] }
      : { name: `#${i + 1} room(s)` };
    dataWithRoomCount.value = len;
    dataWithRoomCount.price_sqm = averagePriceSqm(roomCountGroup);
    return dataWithRoomCount;
  });
  return rlen ? roomData : [...data, ...roomData];
};

const calcBarChart = (arr, years) => {
  const { year, opts } = fields;
  const len = years.length;
  const yearsWithOptions = year.map((y, i) => {
    const yearly = filterYear(arr, [y.id]);
    const singleYear = len ? { ...years[i] } : { name: y.label };
    opts.map(({ id }) => (singleYear[id] = filterOptions(yearly, [id]).length));
    return singleYear;
  });
  return len ? yearsWithOptions : [...years, ...yearsWithOptions];
};

const calcAreaChart = (arr, price_loc) => {
  const seen = {};
  arr.map(loc => {
    const { street, street_number, price_sqm, size_sqm } = loc;
    const name = `${street} ${street_number}`;
    const price = Math.round(size_sqm * price_sqm);
    if (!seen.hasOwnProperty(name)) {
      seen[name] = [];
    }
    return seen[name].push(price);
  });
  const keys = Object.keys(seen);
  const vals = Object.values(seen);
  const len = price_loc.length;
  const locWithPriceRange = vals.map((val, i) => {
    const singleLoc = len ? { ...price_loc[i] } : { name: keys[i] };
    singleLoc.max_price = Math.max(...val);
    singleLoc.min_price = Math.min(...val);
    return singleLoc;
  });
  return len ? locWithPriceRange : [...price_loc, ...locWithPriceRange];
};

export const visualize = (arr, state) => {
  const { balcony, rooms, years, price_loc } = state;
  return {
    balcony: calcPieChart(arr, balcony),
    rooms: calcPieLineChart(arr, rooms),
    years: calcBarChart(arr, years),
    price_loc: calcAreaChart(arr, price_loc)
  };
};
