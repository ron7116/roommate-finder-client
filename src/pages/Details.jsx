import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { useLoaderData } from "react-router";

const Details = () => {
  const singleData = useLoaderData();
  const [count, setCount] = useState(singleData.count || 0);
  const [showContact, setShowContact] = useState(false);

  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    setShowContact(true);

    fetch(`http://localhost:3000/users/${singleData._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count: newCount }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated count:", data);
      });
  };

  return (
    <div className="min-h-screen py-10 px-4 text-gray-800 bg-white">
      <div className="text-center mb-6">
        <p className="text-lg font-semibold text-gray-700">
          {count} people interested
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          {singleData.title}
        </h1>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 border border-gray-300 rounded-xl p-6 bg-white">
        <div className="space-y-3">
          <p>
            <span className="font-semibold">Email:</span> {singleData.email}
          </p>
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {singleData.location}
          </p>
          <p>
            <span className="font-semibold">Rent:</span> BDT {singleData.rent}
          </p>
          <p>
            <span className="font-semibold">Availability:</span>{" "}
            {singleData.availability}
          </p>
          <p>
            <span className="font-semibold">Room Type:</span>{" "}
            {singleData.roomType}
          </p>
          <p>
            <span className="font-semibold">Lifestyle:</span>{" "}
            {singleData.lifestyle}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button
            onClick={handleCount}
            className="btn btn-circle btn-outline btn-primary text-2xl mb-4"
            title="Like"
          >
            <AiFillLike />
          </button>
          {showContact && (
            <p className="text-green-600 font-semibold">
              Contact: {singleData.contact}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 p-6 border border-gray-300 rounded-xl bg-white">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="leading-relaxed text-gray-700">
          {singleData.description}
        </p>
      </div>
    </div>
  );
};

export default Details;
