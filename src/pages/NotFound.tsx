import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="section-container">
          <div className="max-w-md mx-auto text-center">
            <span className="text-8xl font-serif font-bold text-primary/20">404</span>
            <h1 className="text-3xl mt-4 mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="btn-primary rounded-full px-6">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="rounded-full px-6"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
