import { Link, useLoaderData } from "react-router";

const DashboardHome = () => {
  const { allUsers } = useLoaderData();
  return (
    <div className="p-6 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        All Roommate Listings
      </h1>
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
          {allUsers?.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.location}</td>
              <td>{item.rent}</td>
              <td>{item.roomType}</td>
              <td>{item.lifestyle}</td>
              <td>{item.availability}</td>
              <td>
                <Link
                  to={`/users/${item._id}`}
                  className="btn btn-primary py-6 md:py-0 md:btn-sm"
                >
                  See More
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardHome;
