import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center px-4">
      <img
        src="https://i.ibb.co/sdK38gHk/6333074.jpg"
        alt="404 Error"
        className="max-w-xl w-full mb-8"
      />
      <h2 className="text-3xl font-bold text-error mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-base-content mb-6 max-w-md">
        We couldn’t find the page you were looking for. It might have been
        removed or relocated.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
