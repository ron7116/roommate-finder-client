const FAQ = () => {
  return (
    <section className="w-11/12 max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title font-medium">
            How do I find a roommate?
          </div>
          <div className="collapse-content">
            <p>Use the "Find Roommate" feature to browse profiles and contact potential matches.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title font-medium">
            Is the platform free to use?
          </div>
          <div className="collapse-content">
            <p>Yes, all core features are free. Premium filters may be added later.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title font-medium">
            How can I delete my listing?
          </div>
          <div className="collapse-content">
            <p>Go to your dashboard, select "My Listings" and click "Delete" on the post.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
