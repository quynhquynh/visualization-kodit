import React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const StackedBar = ({ data, opts }) => {
  const COLORS = ["#17becf", "#82ca9d", "#FFBB28", "#8884d8", "#FF8042"];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={480}
        height={350}
        data={data}
        margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {opts.map((opt, i) => (
          <Bar key={i} dataKey={opt.id} stackId="a" fill={COLORS[i]} />
        ))}
        <Legend wrapperStyle={{ left: "25%", display: "flex" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBar;

StackedBar.propTypes = {
  data: PropTypes.array.isRequired,
  opts: PropTypes.array.isRequired
};
