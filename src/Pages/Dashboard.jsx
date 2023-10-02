import React, { useContext } from "react";
import { UserContext } from "../Authentications/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center">
      {user ? (
        <div className="text-center space-y-4">
          <h2>Hello, {user.email}</h2>
          <button onClick={handleSignOut} className="btn btn-primary">
            Sign out
          </button>
        </div>
      ) : (
        <p>User is not authenticated.</p>
      )}
    </div>
  );
};

export default Dashboard;
