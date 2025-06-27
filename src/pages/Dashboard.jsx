import { use } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user, signOutUser } = use(AuthContext);
  const data = useLoaderData();

  const sameUserDataFilter = data.allUsers?.filter(
    (item) => item.email === user.email
  );

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
        Swal.fire({
          icon: "error",
          title: "Failed to Log out",
          text: error.message,
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
    <div className="flex flex-col md:flex-row min-h-screen bg-base-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-base-200 p-6 shadow-md md:sticky top-0 h-auto md:h-screen space-y-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full object-cover ring ring-primary ring-offset-2"
          />
          <h2 className="mt-3 text-xl font-bold text-primary">
            {user?.displayName}
          </h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        <ul className="menu space-y-2 text-center">
          <li>
            <NavLink to="/" className={navLinkClass}>
              🏠 Home
            </NavLink>
          </li>
          <li>
            <NavLink to="find-roommate" className={navLinkClass}>
              ➕ Add Listing
            </NavLink>
          </li>
          <li>
            <NavLink to="my-listing" className={navLinkClass}>
              📋 My Listings
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleSignOut}
              className="btn btn-error w-full mt-4"
            >
              🚪 Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your listings and track your roommate activities easily.
          </p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-primary text-white rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold">All Roommate Listings</h3>
            <p className="text-4xl font-bold mt-2">
              {data?.allUsers.length || 0}
            </p>
          </div>
          <div className="bg-secondary text-white rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold">My Roommate Listings</h3>
            <p className="text-4xl font-bold mt-2">
              {sameUserDataFilter.length || 0}
            </p>
          </div>
        </div>

        {/* Nested Routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
