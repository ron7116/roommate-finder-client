import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-white px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-md"
          >
            <li>
              <NavLink to="/" className="font-semibold hover:text-primary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-roommate"
                className="font-semibold hover:text-primary"
              >
                Add to Find Roommate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browser-listing"
                className="font-semibold hover:text-primary"
              >
                Browse Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-listing"
                className="font-semibold hover:text-primary"
              >
                My Listings
              </NavLink>
            </li>
          </ul>
        </div>

        <a className="md:flex items-center gap-2 text-xl font-bold text-gray-800 hidden">
          <img
            src="https://i.ibb.co/b5v53YJh/roommate.png"
            alt="logo"
            className="w-7 h-7"
          />
          RoomMate
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink to="/" className="font-semibold hover:text-primary">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/find-roommate"
              className="font-semibold hover:text-primary"
            >
              Add to Find Roommate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browser-listing"
              className="font-semibold hover:text-primary"
            >
              Browse Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-listing"
              className="font-semibold hover:text-primary"
            >
              My Listings
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-5">
        {user ? (
          <div className="flex gap-2 items-center">
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
            </div>
            <button
              onClick={handleSignOut}
              className="btn bg-black text-white hover:bg-gray-800 font-semibold px-6 rounded-full"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-5">
            <Link to="/login" className="btn btn-outline btn-primary">
              Log In
            </Link>
            <Link to="/signup" className="btn btn-outline btn-secondary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
