import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smile, Zap, Shield, Sparkles, Heart, Crown, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Smile className="h-8 w-8" />,
      title: "General Dentistry",
      description:
        "Best oral health care including cleanings, fillings, and preventive treatments.",
      features: ["Regular Checkups", "Dental Cleanings", "Fillings", "Root Canal"],
      popular: false,
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with advanced cosmetic procedures for a confident, radiant look.",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"],
      popular: true,
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Dental Implants",
      description: "Permanent solution for missing teeth with natural-looking, durable implants.",
      features: ["Single Implants", "Multiple Implants", "All-on-4", "Implant Crowns"],
      popular: false,
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Orthodontics",
      description: "Straighten your teeth with modern orthodontic solutions for all ages.",
      features: ["Traditional Braces", "Clear Aligners", "Invisalign", "Retainers"],
      popular: false,
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a fun, comfortable environment.",
      features: ["Kids Cleanings", "Fluoride Treatments", "Sealants", "Education"],
      popular: false,
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Emergency Care",
      description: "Immediate dental care for urgent situations and dental emergencies.",
      features: ["24/7 Support", "Pain Relief", "Urgent Repairs", "Same-day Treatment"],
      popular: false,
    },
  ];

  const specializedTreatments = [
    "Digital X-rays & 3D Imaging",
    "Laser Dentistry",
    "Conscious Sedation",
    "TMJ Treatment",
    "Sleep Apnea Solutions",
    "Gum Disease Treatment",
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dental Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From routine checkups to advanced procedures, we offer complete dental care using the
              latest technology and techniques.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover-lift ${
                  service.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group"
                    onClick={() =>
                      document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specialized Treatments */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Advanced Specialized Treatments
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are committed to superior patient outcomes by utilizing the latest dental
                technology, instruments, and advanced techniques in all treatments, from routine
                check-ups to single-sitting root canal treatment and full dental implant placements.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {specializedTreatments.map((treatment, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-lg p-4 text-center hover-lift"
                >
                  <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground">{treatment}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="dental"
                size="lg"
                onClick={() =>
                  document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Schedule Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
