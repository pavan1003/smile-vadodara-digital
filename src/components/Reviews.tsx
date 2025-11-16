import { Star } from "lucide-react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const Reviews = () => {
  const featurableWidgetId = "1f6ea259-04e6-47c1-8e51-362dcb0ec8bd"; // Replace with your Featurable widget ID
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Patient Reviews</h2>
        <p className="text-center text-muted-foreground mb-12">
          What our patients say about us
        </p>

        <div className="max-w-6xl mx-auto">
          <ReactGoogleReviews 
            featurableId={featurableWidgetId}
            layout="carousel"
          />
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/The+Tooth+Co.+%7C+Dr.+Malvika+Trivedi/@22.2959261,73.1664237,17z/data=!4m8!3m7!1s0x2c80ea1cf0f6ee5b:0x4adc890c49d69142!8m2!3d22.2959212!4d73.1689986!9m1!1b1!16s%2Fg%2F11vcnf5ynt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            Read more reviews on Google
            <Star className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
