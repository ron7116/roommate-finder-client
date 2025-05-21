import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-4">
      <h1 className="text-6xl font-bold text-error">404</h1>
      <p className="text-xl mt-4 text-base-content">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary mt-6">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
