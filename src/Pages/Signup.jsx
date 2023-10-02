import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Authentications/AuthContext";

const Signup = () => {
  const { createUser } = useContext(UserContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const { fullName, email, password } = e.target;
    createUser(email.value, password.value)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });

    // console.log(fullName.value, email.value, password.value);
  };

  return (
    <>
      <div className="hero block py-12 min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up here!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  name="fullName"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="someone@something.com"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label mt-2">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
            </form>
          </div>
          <p>
            Already have an account? Please{" "}
            <Link to="/login">
              <span className="text-primary font-bold">Login here.</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
