
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Oops! Page not found</p>
          <p className="max-w-md mx-auto text-gray-500 dark:text-gray-400 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
