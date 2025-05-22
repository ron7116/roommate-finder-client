import { use } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Update = () => {
  const { user} = use(AuthContext);
  const singleData = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/users/${singleData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your data has been updated now",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-xl shadow-md my-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Update Find Roommate Listing
        </h2>
        <form onSubmit={handleUpdate} className="grid gap-4">
          <input
            type="text"
            name="title"
            defaultValue={singleData.title}
            placeholder="Title"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="location"
            defaultValue={singleData.location}
            placeholder="Location"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            name="rent"
            defaultValue={singleData.rent}
            placeholder="Rent Amount"
            className="input input-bordered w-full"
            required
          />
          <select
            name="roomType"
            defaultValue={singleData.roomType}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Room Type</option>
            <option>Single</option>
            <option>Shared</option>
            <option>Studio</option>
          </select>
          <input
            type="text"
            name="lifestyle"
            defaultValue={singleData.lifestyle}
            placeholder="Lifestyle Preferences (e.g., Pets, Smoking)"
            className="input input-bordered w-full"
          />
          <textarea
            name="description"
            defaultValue={singleData.description}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            rows="3"
          ></textarea>
          <input
            type="text"
            name="contact"
            defaultValue={singleData.contact}
            placeholder="Contact Info"
            className="input input-bordered w-full"
            required
          />
          <select
            name="availability"
            defaultValue={singleData.availability}
            className="select select-bordered w-full"
          >
            <option value="available">Available</option>
            <option value="not available">Not Available</option>
          </select>
          <input
            type="text"
            className="input input-bordered w-full bg-base-100"
            value={user?.email}
            readOnly
          />
          <input
            type="text"
            className="input input-bordered w-full bg-base-100"
            value={user?.displayName}
            readOnly
          />
          <button type="submit" className="btn btn-primary w-full mt-4">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
