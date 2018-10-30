import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const fixed = parseInt((percent * 100).toFixed(0));
  const fixed_pct = !fixed ? "" : `${fixed}%`;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {fixed_pct}
    </text>
  );
};

const PercentagePie = ({ balcony, rooms }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart width={800} height={300}>
      <Pie
        isAnimationActive={false}
        data={balcony}
        dataKey="value"
        outerRadius={70}
        fill="#8884d8"
        labelLine={false}
        label={renderCustomizedLabel}
      />
      <Pie
        isAnimationActive={false}
        data={rooms}
        dataKey="value"
        outerRadius={95}
        innerRadius={75}
        fill="#82ca9d"
        label
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export default PercentagePie;

PercentagePie.propTypes = {
  balcony: PropTypes.array.isRequired,
  rooms: PropTypes.array.isRequired
};
