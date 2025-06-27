const Contact = () => {
  return (
    <section className="w-11/12 max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Contact Us</h2>
      <form className="card bg-base-100 shadow-md p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
        />
        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
