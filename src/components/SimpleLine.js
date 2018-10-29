import React from "react";
import PropTypes from "prop-types";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const SimpleLine = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        width={570}
        height={350}
        data={data}
        margin={{ top: 60, right: 30, left: 15, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend wrapperStyle={{ left: "35%" }} />
        <Line
          type="monotone"
          dataKey="price_sqm"
          stroke="#17becf"
          activeDot={{ r: 9 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLine;

SimpleLine.propTypes = {
  data: PropTypes.array.isRequired
};
