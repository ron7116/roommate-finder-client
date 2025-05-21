import { Link, useLoaderData } from "react-router";
import Slider from "../components/Slider";

const Home = () => {
  const { availableUsers } = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      {/* add to find  roommate */}
      <section>
        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableUsers.map((item) => (
            <div key={item._id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>
                  <strong>Location:</strong> {item.location}
                </p>
                <p>
                  <strong>Rent:</strong> BDT {item.rent}
                </p>
                <p>
                  <strong>Room Type:</strong> {item.roomType}
                </p>
                <p>
                  <strong>Lifestyle:</strong> {item.lifestyle}
                </p>
                <p>
                  <strong>Description:</strong> {item.description}
                </p>
                <p>
                  <strong>Contact:</strong> {item.contact}
                </p>
                <p>
                  <strong>Available:</strong> {item.availability}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/users/${item._id}`} className="btn btn-primary">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
