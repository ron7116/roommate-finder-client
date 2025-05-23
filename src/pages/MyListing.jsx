import { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const MyListing = () => {
  const { allUsers } = useLoaderData();
  const { user } = use(AuthContext);
  const sameUserDataFilter = allUsers.filter(
    (item) => item.email == user.email
  );
  const [sameUserData, setSameUserData] = useState(sameUserDataFilter);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingData = sameUserData.filter(
                (value) => value._id !== id
              );
              setSameUserData(remainingData);
            }
          });
      }
    });
  };
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
              <td className="flex gap-3">
                <Link
                  to={`/update/${item._id}`}
                  className="btn btn-sm btn-outline btn-info"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-sm btn-outline btn-error"
                >
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
