import { filterOptions } from "./filter";
import { filterRoom } from "./filter";
import { averagePriceSqm } from "./averagePriceSqm";
import { filterYear } from "./filter";

export const calcPieChart = (arr, balcony) => {
  const len = balcony.length;
  const copy_balcony = [...balcony];
  const num_balcony = filterOptions(arr, [], ["balcony"]).length;
  const num_original = arr.length;
  if (!len) {
    copy_balcony.push({ name: "balcony", value: num_balcony });
    copy_balcony.push({
      name: "no balcony",
      value: num_original - num_balcony
    });
  } else {
    copy_balcony[0].value = filterOptions(arr, [], ["balcony"]).length;
    copy_balcony[1].value = arr.length - copy_balcony[0].value;
  }
  return copy_balcony;
};

export const calcPieLineChart = (arr, rooms, price_room) => {
  const rlen = rooms.length;
  const copy_rooms = [...rooms];
  const copy_price_room = [...price_room];
  for (let i = 1; i < 6; i++) {
    const room_arr = filterRoom(arr, [], [i]);
    const len = room_arr.length;
    if (rlen) {
      copy_rooms[i - 1].value = len;
      copy_price_room[i - 1].price_sqm = averagePriceSqm(room_arr);
    } else {
      copy_rooms.push({
        name: `#${i} room(s)`,
        value: len
      });
      copy_price_room.push({
        name: `#${i} room(s)`,
        price_sqm: averagePriceSqm(room_arr)
      });
    }
  }
  return {
    copy_rooms,
    copy_price_room
  };
};

export const calcBarChart = (arr, years, fields) => {
  const len = years.length;
  const copy_years = [...years];
  const { year, opts } = fields;
  for (let i = 0; i < year.length; i++) {
    const yearly = filterYear(arr, [], [year[i].id]);
    if (len) {
      const single_year = copy_years[i];
      for (let opt of opts) {
        const { id } = opt;
        single_year[id] = filterOptions(yearly, [], [id]).length;
      }
    } else {
      const obj = {
        name: year[i].label
      };
      for (let opt of opts) {
        const { id } = opt;
        obj[id] = filterOptions(yearly, [], [id]).length;
      }
      copy_years.push(obj);
    }
  }
  return copy_years;
};

export const calcAreaChart = (arr, price_loc) => {
  const len = price_loc.length;
  const copy_price_loc = [...price_loc];
  const seen = {};
  for (let apt of arr) {
    const { street, street_number, price_sqm, size_sqm } = apt;
    const name = `${street} ${street_number}`;
    const price = Math.round(size_sqm * price_sqm);
    if (!seen.hasOwnProperty(name)) {
      seen[name] = [];
    }
    seen[name].push(price);
  }
  const vals = Object.values(seen);
  const keys = Object.keys(seen);
  if (len) {
    copy_price_loc.length = 0;
  }
  for (let i = 0; i < vals.length; i++) {
    const max_price = Math.max(...vals[i]);
    const min_price = Math.min(...vals[i]);
    copy_price_loc.push({
      name: keys[i],
      min_price,
      max_price
    });
  }
  return copy_price_loc;
};
