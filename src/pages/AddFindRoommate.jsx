import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const AddFindRoommate = () => {
  const { user, count } = use(AuthContext);
  const email = user?.email;
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    const userInfo = {
      count,
      email,
      ...userData,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
          console.log(data);
        }
      });
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-xl shadow-md my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add Find Roommate Listing
      </h2>
      <form onSubmit={handleAdd} className="grid gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="rent"
          placeholder="Rent Amount"
          className="input input-bordered w-full"
          required
        />
        <select
          name="roomType"
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
          placeholder="Lifestyle Preferences (e.g., Pets, Smoking)"
          className="input input-bordered w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          rows="3"
        ></textarea>
        <input
          type="text"
          name="contact"
          placeholder="Contact Info"
          className="input input-bordered w-full"
          required
        />
        <select name="availability" className="select select-bordered w-full">
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
          Add
        </button>
      </form>
    </div>
  );
};

export default AddFindRoommate;
