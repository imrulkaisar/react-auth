import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../Authentications/AuthContext";
import Loading from "../Components/Loading";

const Login = () => {
  const { user, signIn, signInWithGoogle } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    signIn(email.value, password.value)
      .then((result) => {
        console.log(result.user);
        navigate("/dashboard");
      })
      .then((error) => {
        console.error(error);
      });

    console.log(email.value, password.value);
  };

  <Loading />;

  return (
    <>
      {!user ? (
        <div className="hero block py-12 min-h-screen bg-base-200">
          <div className="hero-content flex-col gap-10">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="emil"
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
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="">
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-primary"
              >
                Sign with Google
              </button>
            </div>
            <p>
              Don't have any account? Please{" "}
              <Link to="/signup">
                <span className="text-primary font-bold">Sign up here.</span>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <Navigate to="/dashboard" />
      )}
    </>
  );
};

export default Login;
