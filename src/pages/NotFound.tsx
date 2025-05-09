
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-accent/30 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <p className="text-xl text-gray-700 mb-6">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary-dark">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
