import { built_year } from "./built_year";
import { options } from "./options";
import { rooms } from "./rooms";
import { size_sqm } from "./size_sqm";
import { price } from "./price";
import { location } from "./location";

export default {
  loc: location,
  area: size_sqm,
  aprt_price: price,
  year: built_year,
  rooms,
  opts: options
};
