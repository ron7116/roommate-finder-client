const Services = () => {
  return (
    <section className="w-11/12 max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">Our Services</h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
        We offer services that help you find the perfect roommate and safe places to live across Bangladesh.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body text-center">
            <h3 className="text-xl font-semibold text-secondary">Roommate Finder</h3>
            <p>Match with verified roommates based on your preferences.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body text-center">
            <h3 className="text-xl font-semibold text-secondary">Browse Listings</h3>
            <p>Explore available rooms by city, budget, or lifestyle.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body text-center">
            <h3 className="text-xl font-semibold text-secondary">Profile Management</h3>
            <p>Maintain your own listings, visibility, and preferences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
