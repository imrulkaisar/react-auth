import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../Authentications/AuthContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink>Sign up</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <span className="btn btn-ghost normal-case text-xl">
              React Auth
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to="/about">About</NavLink>
            </li>
            {!user && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            )}
            {/* <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link to="/dashboard">
              <span className="btn btn-primary">Dashboard</span>
            </Link>
          ) : (
            <Link to="/signup">
              <span className="btn btn-primary">Sign up</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
