import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const PercentagePie = ({ balcony, rooms }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={800} height={300}>
        <Pie
          isAnimationActive={false}
          data={balcony}
          dataKey="value"
          cx="35%"
          cy={150}
          outerRadius={60}
          fill="#8884d8"
          label
        />
        <Pie
          isAnimationActive={false}
          data={rooms}
          dataKey="value"
          cx="35%"
          cy={150}
          outerRadius={90}
          innerRadius={70}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PercentagePie;

PercentagePie.propTypes = {
  balcony: PropTypes.array.isRequired,
  rooms: PropTypes.array.isRequired
};
