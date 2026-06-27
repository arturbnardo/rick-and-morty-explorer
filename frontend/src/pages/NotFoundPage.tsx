import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <p className="text-5xl text-white font-bold">404</p>
        <p className="md:text-3xl text-lg text-white font-semibold">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-cyan-400 hover:text-cyan-600 text-2xl font-bold transition-colors duration-200"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
