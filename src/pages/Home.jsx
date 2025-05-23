import {
  FaGlobeAsia,
  FaLanguage,
  FaPrayingHands,
  FaUtensils,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import Slider from "../components/Slider";

const Home = () => {
  const { availableUsers } = useLoaderData();
  const highlights = [
    {
      title: "Lifestyle Match",
      desc: "Whether you're a morning person, night owl, pet lover, or neat freak — we match you based on how you live.",
    },
    {
      title: "Budget Fit",
      desc: "Set your expected rent and match with people who are also looking within your financial range and location.",
    },
    {
      title: "Shared Interests",
      desc: "View hobbies, music tastes, and personal habits to find someone who vibes with your lifestyle.",
    },
  ];

  return (
    <div className="bg-base-100 min-h-screen  text-gray-800">
      <Slider />

      {/* Header section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold  text-base-content">
          Find Your Ideal Roommate
        </h1>
        <p className="text-md text-base-content max-w-2xl mx-auto mt-3">
          Browse through our available listings to connect with people who share
          similar preferences and are looking for roommates in your preferred
          location.
        </p>
      </div>

      {/* Listings Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableUsers.map((item) => (
            <div
              key={item._id}
              className="border border-gray-300 rounded-xl p-6 bg-base-100 text-base-content shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h2>
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
              <div className="mt-4 text-right">
                <Link
                  to={`/users/${item._id}`}
                  className="btn btn-sm btn-primary"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* smart */}
      <section className="py-12">
        <div className="text-center my-10">
          <h2 className="text-3xl font-bold text-base-content">
            <Typewriter
              words={["Smart Matching Highlights"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-base-content my-4 pb-5 max-w-xl mx-auto">
            Find your ideal roommate with powerful filters that focus on
            lifestyle, budget, and personality — because living together should
            feel right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-6 bg-base-100 text-base-content shadow hover:shadow-lg transition"
            >
              <div className="text-2xl font-bold mb-2 text-primary">
                {item.title}
              </div>
              <p className="text-base-content">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Roommate Cultures Section */}
      <section className="py-12 mt-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Explore Roommate Cultures
          </h2>
          <p className="mt-3 text-base-content text-lg">
            Shared living is more than splitting rent — it’s learning how people
            eat, pray, talk, and celebrate. Discover the beauty of co-living
            with empathy and curiosity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border border-gray-300 rounded-xl p-6 bg-base-100 text-base-content shadow hover:shadow-lg transition">
            <FaPrayingHands className="text-4xl text-primary mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Respect Daily Rhythms
            </h3>
            <p className="text-base-content text-sm">
              Early birds, prayer times, afternoon naps — roommates come from
              different rhythms. Discuss and align your comfort zones.
            </p>
          </div>

          <div className="border border-gray-300 rounded-xl p-6 bg-base-100 text-base-content shadow hover:shadow-lg transition">
            <FaGlobeAsia className="text-4xl text-primary mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Celebrate Traditions
            </h3>
            <p className="text-base-content text-sm">
              Festivals like Eid, Diwali, Christmas, or New Year are chances to
              share joy. Learn to appreciate each other's special days.
            </p>
          </div>

          <div className="border border-gray-300 rounded-xl p-6 bg-base-100 text-base-content shadow hover:shadow-lg transition">
            <FaLanguage className="text-4xl text-primary mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Bridge Language Gaps
            </h3>
            <p className="text-base-content text-sm">
              You don’t need to speak perfectly — friendly gestures and patience
              go a long way in building comfort and communication.
            </p>
          </div>

          <div className="border border-gray-300 rounded-xl p-6 bg-base-100 text-base-content shadow hover:shadow-lg transition">
            <FaUtensils className="text-4xl text-primary mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Share Food, Share Culture
            </h3>
            <p className="text-base-content text-sm">
              Food brings people together. Respect dietary differences, try new
              dishes, and bond in the kitchen.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="italic text-sm text-base-content">
            “The best roommates are different — but understanding.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
