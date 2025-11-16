import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Calendar, Award } from "lucide-react";

const Hero = () => {
  const handleBookAppointment = () => {
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const getYearsExperience = () => new Date().getFullYear() - 2017;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media/reception-area.png"
          alt="Modern Dental Clinic Reception"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-40 right-20 w-12 h-12 bg-white/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-40 left-10 w-16 h-16 bg-white/15 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Healthy Teeth
              <span className="block text-white/90 pt-1">Our Priority!</span>
            </h1>
            <p className="text-xl text-white/90 mb-1 max-w-2xl leading-relaxed">
              Welcome to The Tooth Co. Family Dental Clinic in Akota, Vadodara, where advanced
              dental care meets gentle, personalised attention.
            </p>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Get yourself treated with the BEST DENTIST in vadodara and experience truly caring
              dental treatment.
            </p>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Users className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Happy Patients</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Star className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5.0</div>
                <div className="text-white/80 text-sm">Star Rating</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Calendar className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{getYearsExperience()}+</div>
                <div className="text-white/80 text-sm">Years of Experience</div>
              </div>
            </div>
            {/* <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Award className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
            </div> */}
          </div>
          {/* Book Appointment Button */}
          <div className="flex flex-col sm:flex-row gap-4 my-6 animate-slide-up">
            <Button
              variant="dental"
              size="lg"
              onClick={handleBookAppointment}
              className="border border-white text-white hover:shadow-2xl hover:scale-105 group font-semibold"
            >
              Book Your Appointment
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white hover:bg-white hover:text-primary font-semibold"
              onClick={scrollToServices}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
