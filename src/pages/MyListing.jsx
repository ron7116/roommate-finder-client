import { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";

const MyListing = () => {
  const { allUsers } = useLoaderData();
  const { user } = use(AuthContext);
  const sameUserData = allUsers.filter((item) => item.email == user.email);
  console.log(sameUserData);
  return (
    <div className="p-6 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">My Listings</h1>
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Rent</th>
            <th>Room Type</th>
            <th>Lifestyle</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sameUserData.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.location}</td>
              <td>{item.rent}</td>
              <td>{item.roomType}</td>
              <td>{item.lifestyle}</td>
              <td>{item.availability}</td>
              <td className="space-x-3">
                <button className="btn btn-sm btn-outline btn-info">
                  Update
                </button>
                <button className="btn btn-sm btn-outline btn-error">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyListing;
