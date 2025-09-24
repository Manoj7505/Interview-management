import React from "react";

const Dashboard = ({ title, value, color }) => {
  return (
    <div className={`p-4 rounded shadow ${color} text-white w-64`}>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-3xl">{value}</p>
    </div>
  );
};

export default Dashboard;
