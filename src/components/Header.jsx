import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Failed to Log out",
          text: errorMessage,
        });
      });
  };

  const navLinkClass = ({ isActive }) =>
    `font-semibold hover:text-primary ${
      isActive
        ? "text-primary underline underline-offset-4"
        : "text-base-content"
    }`;

  return (
    <div className="navbar bg-base-100 text-base-content px-0">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/find-roommate" className={navLinkClass}>
                Add to Find Roommate
              </NavLink>
            </li>
            <li>
              <NavLink to="/browser-listing" className={navLinkClass}>
                Browse Listing
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-listing" className={navLinkClass}>
                My Listings
              </NavLink>
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="hidden md:flex items-center gap-2 text-xl font-bold text-base-content"
        >
          <img
            src="https://i.ibb.co/b5v53YJh/roommate.png"
            alt="logo"
            className="w-7 h-7"
          />
          RoomMate
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/find-roommate" className={navLinkClass}>
              Add to Find Roommate
            </NavLink>
          </li>
          <li>
            <NavLink to="/browser-listing" className={navLinkClass}>
              Browse Listing
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-listing" className={navLinkClass}>
              My Listings
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-4 items-center">
        <label className="cursor-pointer flex items-center gap-2">
          <ThemeToggle />
        </label>

        {user ? (
          <div className="flex items-center gap-2">
            <div
              data-tooltip-id="user-tooltip"
              data-tooltip-content={user?.displayName || "User"}
              data-tooltip-place="left"
              className="cursor-pointer"
            >
              <img
                className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                src={user?.photoURL || "https://i.ibb.co/s9J9Tt8Z/user.png"}
                alt="User"
              />
              <Tooltip id="user-tooltip" />
            </div>
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-error btn-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-3 flex-nowrap">
            <Link
              to="/login"
              className="btn btn-xs sm:btn-md btn-outline btn-primary whitespace-nowrap"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="btn btn-xs sm:btn-md btn-outline btn-secondary whitespace-nowrap"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;