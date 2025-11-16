import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h1 className="font-bold text-2xl mb-3">Sorry, this page isn't available.</h1>
        <p>The link you followed may be broken, or the page may have been removed.</p>
        <Button
          variant="dental"
          onClick={() => {
            navigate("/");
          }}
          className="my-6"
        >
          Go Back Home
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
