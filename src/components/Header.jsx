import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../context/AuthContext";

const Header = ({ theme, toggleTheme }) => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser().catch(console.log);
  };

  return (
    <div className="navbar bg-base-100 text-base-content px-0">
      {/* START */}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/" className="font-semibold hover:text-primary">Home</NavLink></li>
            <li><NavLink to="/find-roommate" className="font-semibold hover:text-primary">Add to Find Roommate</NavLink></li>
            <li><NavLink to="/browser-listing" className="font-semibold hover:text-primary">Browse Listing</NavLink></li>
            <li><NavLink to="/my-listing" className="font-semibold hover:text-primary">My Listings</NavLink></li>
          </ul>
        </div>

        <Link to="/" className="hidden md:flex items-center gap-2 text-xl font-bold text-base-content">
          <img src="https://i.ibb.co/b5v53YJh/roommate.png" alt="logo" className="w-7 h-7" />
          RoomMate
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li><NavLink to="/" className="font-semibold hover:text-primary">Home</NavLink></li>
          <li><NavLink to="/find-roommate" className="font-semibold hover:text-primary">Add to Find Roommate</NavLink></li>
          <li><NavLink to="/browser-listing" className="font-semibold hover:text-primary">Browse Listing</NavLink></li>
          <li><NavLink to="/my-listing" className="font-semibold hover:text-primary">My Listings</NavLink></li>
        </ul>
      </div>

      {/* END */}
      <div className="navbar-end gap-4 items-center">
        {/* Theme Toggle Switch */}
        <label className="cursor-pointer flex items-center gap-2">
          {/* <span className="text-sm">{theme === "light" ? "Light" : "Dark"} Mode</span> */}
          <input
            type="checkbox"
            className="toggle"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </label>

        {user ? (
          <div className="flex items-center gap-2">
            <div
              data-tooltip-id="user-tooltip"
              data-tooltip-content={user?.displayName || "User Profile"}
              data-tooltip-place="left"
              className="cursor-pointer"
            >
              <img
                className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                src={user?.photoURL}
                alt="User"
              />
              <Tooltip id="user-tooltip" />
            </div>
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-error btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-2">
            <Link to="/login" className="btn btn-sm btn-outline btn-primary">Log In</Link>
            <Link to="/signup" className="btn btn-sm btn-outline btn-secondary">Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
