import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Shield, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Gentle Care",
      description: "Compassionate treatment with a gentle touch for all ages",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety First",
      description: "Highest safety standards and sterilization protocols",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Latest Technology",
      description: "State-of-the-art equipment for precise treatments",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Expert Care",
      description: "Years of experience in dental solutions",
    },
  ];

  const qualifications = [
    "BDS - Bachelor of Dental Surgery",
    "Certified in Implantology",
    "Advanced Cosmetic Dentistry Training",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Dr. Malvika Trivedi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted dental partner in Vadodara, committed to delivering exceptional oral
              healthcare with a personal touch.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Doctor's Photo */}
            <div className="animate-fade-in">
              <div className="relative">
                <img
                  src="/media/consultation.png"
                  alt="Dr. Malvika Trivedi in her consultation office"
                  className="w-full h-96 object-cover rounded-2xl shadow-card"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-primary font-semibold">Dr. Malvika Trivedi</p>
                  <p className="text-sm text-muted-foreground">BDS - Dental Surgeon</p>
                </div>
              </div>
            </div>

            {/* Doctor's Info */}
            <div className="animate-slide-up">
              <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Excellence in Dental Care
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dr. Malvika Trivedi brings over a decade of experience in providing dental care to
                  families in Vadodara. With a passion for creating beautiful, healthy smiles, she
                  combines advanced techniques with a gentle, patient-centered approach.
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-foreground mb-4">
                    Qualifications & Certifications:
                  </h4>
                  {qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{qualification}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="dental"
                  onClick={() =>
                    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="w-full sm:w-auto"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in mb-16"
            style={{ animationDelay: "0.3s" }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover-lift text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h4 className="font-semibold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              "To empower every patient by making them aware of the critical need and importance of
              maintaining optimal oral health for better overall systemic health. Your health is our
              priority."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
