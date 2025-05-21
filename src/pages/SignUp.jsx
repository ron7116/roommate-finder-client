import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, updateUserProfile, googleSignInUser, setUser } =
    useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, photo, email, password } = Object.fromEntries(
      formData.entries()
    );

    const upperCaseRex = /(?=.*[A-Z])/;
    const lowerCaseRex = /(?=.*[a-z])/;
    if (upperCaseRex.test(password) == false) {
      setError(`Must be uppercase letter`);
      return;
    } else if (lowerCaseRex.test(password) == false) {
      setError(`Must be lowercase letter`);
      return;
    } else if (password.length < 6) {
      setError(`Must be 6 character or longer`);
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              icon: "success",
              title: "Sign Up Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Failed to sign up",
          text: errorMessage,
        });
      });
  };
  const handleGoogleSignIn = () => {
    googleSignInUser()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          icon: "success",
          title: "Sign Up Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Failed to sign up",
          text: errorMessage,
        });
      });
  };
  return (
    <div className="min-h-[calc(100vh-365px)] flex justify-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-5">
            Sign up your account
          </h2>
          <p>
            <button
              onClick={handleGoogleSignIn}
              className="btn w-full bg-white text-black border-[#e5e5e5] mb-10"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </p>
          <div className="divider">OR</div>
          <form onSubmit={handleSignUp} className="fieldset">
            {/* name */}
            <label className="font-bold">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter Name"
              required
            />

            {/* photo url */}
            <label className="font-bold">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter Photo URL"
              required
            />
            {/* email */}
            <label className="font-bold">Email Address</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="font-bold">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Sign Up
            </button>
            <p className="font-bold text-accent text-center mt-2">
              Already Have An Account ?{" "}
              <Link to="/login" className="text-secondary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
