
const AboutUs = () => {
  return (
    <section className="w-11/12 max-w-6xl mx-auto my-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-3">About Us</h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          RoomMate is a platform built to help people in Bangladesh find trusted roommates and safe, affordable living spaces easily. Whether you're a student, a job holder, or a traveler — we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <img
          src="https://i.ibb.co/FqbmMnXm/about-Us-roommate.png"
          alt="Roommate Illustration"
          className="rounded-xl shadow-md"
        />

        {/* Text Content */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Why Choose Us?
          </h3>
          <ul className="space-y-3 text-gray-700 text-base list-disc pl-5">
            <li>Find verified and trusted roommates</li>
            <li>Easy search by city, lifestyle, and rent</li>
            <li>Safe communication through in-app messaging</li>
            <li>100% Bangladesh-focused listings</li>
            <li>Lightweight, responsive design with mobile support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
