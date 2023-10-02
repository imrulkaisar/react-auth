import React, { useContext } from "react";
import { UserContext } from "../Authentications/AuthContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-center h-screen items-center">
      {user ? (
        <div className="text-center space-y-4">
          <h2>Hello, {user.email}</h2>
          <ul className="info">
            <li>
              <b>Name: </b>
              {user?.displayName}
            </li>
            <li>
              <b>Email: </b>
              {user?.email}
            </li>
            <li>
              <b>ID: </b>
              {user?.uid}
            </li>
          </ul>
        </div>
      ) : (
        <p>User is not authenticated.</p>
      )}
    </div>
  );
};

export default Profile;
