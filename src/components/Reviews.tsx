import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

declare global {
  interface Window {
    google: any;
  }
}

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGoogleReviews = () => {
      const placeId = "ChIJW-72zxzqgDkRQpHWScKJ3Eo"; // The Tooth Co. Place ID
      
      // You need to add your Google Places API key here
      const apiKey = "YOUR_GOOGLE_PLACES_API_KEY";
      
      if (apiKey === "YOUR_GOOGLE_PLACES_API_KEY") {
        console.warn("Please add your Google Places API key in Reviews.tsx");
        setLoading(false);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.onload = () => {
        const service = new window.google.maps.places.PlacesService(
          document.createElement("div")
        );

        service.getDetails(
          {
            placeId: placeId,
            fields: ["reviews"],
          },
          (place: any, status: any) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
              const fiveStarReviews = place.reviews
                .filter((review) => review.rating === 5)
                .slice(0, 3);
              setReviews(fiveStarReviews);
            }
            setLoading(false);
          }
        );
      };
      document.head.appendChild(script);
    };

    loadGoogleReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Patient Reviews</h2>
          <div className="text-center text-muted-foreground">Loading reviews...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Patient Reviews</h2>
        <p className="text-center text-muted-foreground mb-12">
          What our patients say about us
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{review.author_name}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/The+Tooth+Co.+%7C+Dr.+Malvika+Trivedi/@22.2959261,73.1664237,17z/data=!4m8!3m7!1s0x2c80ea1cf0f6ee5b:0x4adc890c49d69142!8m2!3d22.2959212!4d73.1689986!9m1!1b1!16s%2Fg%2F11vcnf5ynt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
