import React, { useContext } from "react";
import { UserContext } from "../Authentications/AuthContext";

const Dashboard = () => {
  const { name } = useContext(UserContext);
  return (
    <div>
      <h2>Hello, {name}</h2>
    </div>
  );
};

export default Dashboard;
