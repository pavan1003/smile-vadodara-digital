import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Real clinic photos
  const galleryItems = [
    {
      id: 1,
      title: "Modern Reception Area",
      category: "facility",
      image: "/media/reception-area.png",
      description: "Welcoming and comfortable reception with modern design",
    },
    {
      id: 2,
      title: "Advanced Treatment Room",
      category: "facility",
      image: "/media/dental-chair.png",
      description: "State-of-the-art dental equipment and comfortable patient chair",
    },
    {
      id: 3,
      title: "Dr. Malvika's Consultation Office",
      category: "facility",
      image: "/media/consultation.png",
      description: "Professional consultation space with Dr. Malvika Trivedi",
    },
    {
      id: 4,
      title: "Modern Dental Equipment",
      category: "technology",
      image: "/media/clinic.png",
      description: "Latest dental technology for precise and comfortable treatments",
    },
    {
      id: 5,
      title: "Sterilization & Hygiene Center",
      category: "facility",
      image: "/media/dental-chair.png",
      description: "Advanced sterilization protocols for patient safety",
    },
    {
      id: 6,
      title: "Patient Comfort Area",
      category: "facility",
      image: "/media/reception-area.png",
      description: "Comfortable waiting and reception area",
    },
  ];

  const categories = [
    { id: "all", name: "All", count: galleryItems.length },
    {
      id: "facility",
      name: "Our Facility",
      count: galleryItems.filter((item) => item.category === "facility").length,
    },
    {
      id: "technology",
      name: "Technology",
      count: galleryItems.filter((item) => item.category === "technology").length,
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Come Experience Our Modern Facilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a virtual tour of our state-of-the-art dental clinic and see the exceptional
              results we achieve for our patients.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden hover-lift animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Experience Our Modern Facility?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a consultation today and see firsthand how our advanced technology and
                comfortable environment make dental care a pleasant experience.
              </p>
              <button
                onClick={() =>
                  document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Schedule Your Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
