import React, { useContext } from "react";
import { UserContext } from "../Authentications/AuthContext";

const Loading = () => {
  const { loading } = useContext(UserContext);
  if (loading) {
    return (
      <div className="min-h-[300px] flex flex-col justify-center items-center gap-5">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
};

export default Loading;
