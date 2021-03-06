import React from "react";
import PropTypes from "prop-types";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const SimpleArea = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart
      width={590}
      height={300}
      data={data}
      margin={{ top: 25, right: 40, left: 20, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={value => value.toLocaleString()} />
      <Tooltip formatter={value => value.toLocaleString()} />
      <Area
        type="monotone"
        dataKey="min_price"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="max_price"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default SimpleArea;

SimpleArea.propTypes = {
  data: PropTypes.array.isRequired
};
