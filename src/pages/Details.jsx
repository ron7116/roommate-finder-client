import { AiFillLike } from "react-icons/ai";
import { useLoaderData } from "react-router";

const Details = () => {
  const singleData = useLoaderData();
  console.log(singleData);

  return (
    <div>
      <h3>details: </h3>
      <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-xl mt-10 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-primary">
            {singleData.title}
          </h2>
          <button className="text-primary text-2xl cursor-pointer">
            <AiFillLike />
          </button>
        </div>
        <p>
          <strong>Location:</strong> {singleData.location}
        </p>
        <p>
          <strong>Rent:</strong> BDT {singleData.rent}
        </p>
        <p>
          <strong>Room Type:</strong> {singleData.roomType}
        </p>
        <p>
          <strong>Lifestyle:</strong> {singleData.lifestyle}
        </p>
        <p>
          <strong>Availability:</strong> {singleData.availability}
        </p>
        <p className="mt-4">
          <strong>Description:</strong> {singleData.description}
        </p>
        <p className="mt-2">
          <strong>Contact:</strong> {singleData.contact}
        </p>
        <p className="mt-2 text-sm text-gray-500">Email: {singleData.email}</p>
      </div>
    </div>
  );
};

export default Details;
