import React, { useContext } from "react";
import { UserContext } from "./AuthContext";
import { Link } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="min-h-[300px] flex flex-col justify-center items-center gap-5">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <div className="min-h-[300px] flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-bold">Restricted content</h1>
      <p>
        Please{" "}
        <Link to="/login">
          <span className="text-primary font-bold">login</span> to access the
          content.
        </Link>
      </p>
    </div>
  );
};

export default PrivateRoute;
