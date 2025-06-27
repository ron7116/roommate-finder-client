
const PopularCities = () => {
  const cities = [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Rajshahi",
    "Sylhet",
    "Barisal",
    "Rangpur",
    "Mymensingh",
    "Comilla",
    "Narayanganj",
  ];

  return (
    <section className="w-11/12 max-w-6xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        Popular Cities in Bangladesh
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cities.map((city, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold text-primary">{city}</h3>
              <p className="text-sm text-gray-500">Explore roommates in {city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCities;
