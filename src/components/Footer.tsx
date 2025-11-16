import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Clinic Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">The Tooth Co.</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted dental partner in Vadodara, committed to providing exceptional oral
              healthcare with Dr. Malvika Trivedi's expert care and modern technology.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80 mt-1 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  Ground Floor, Suramya Apartments,
                  <br />
                  SNDT College Rd, near Akota Stadium Road,
                  <br />
                  Akota, Vadodara, Gujarat 390020, India
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/80 flex-shrink-0" />
                <a href="tel:+917016046982" className="text-sm text-primary-foreground/80">
                  +91 7016046982
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/80 flex-shrink-0" />
                <a
                  href="mailto:drmalvikatrivedi@gmail.com"
                  className="text-sm text-primary-foreground/80"
                >
                  drmalvikatrivedi@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-foreground/80 mt-1 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  Mon - Sat: 10:30 AM - 1 PM, 5 PM - 7 PM
                  <br />
                  Sunday: Emergency Only
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a
                  href="#home"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  About Dr. Malvika
                </a>
                <a
                  href="#services"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Our Services
                </a>
                <a
                  href="#gallery"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Gallery
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#appointment"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Book Appointment
                </a>
                <a
                  href="#appointment"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+917016046982"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  Emergency Care
                </a>
                <a
                  href="https://wa.me/917016046982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map and Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Find Us</h3>

            {/* Google Maps Embed */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5263226201514!2d73.16412767776072!3d22.295926090708665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c80ea1cf0f6ee5b%3A0x4adc890c49d69142!2sThe%20Tooth%20Co.%20%7C%20Dr.%20Malvika%20Trivedi!5e0!3m2!1sen!2sin!4v1753592945458!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-90"
                title="The Tooth Co. Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} The Tooth Co. Family Dental Clinic & Implant Centre. All rights
              reserved.
            </div>

            <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <a href="https://pavanmistry.tech" target="_blank">
                by Pavan Mistry
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-primary-foreground/60">
              Dr. Malvika Trivedi - BDS | Reg. No: DCI-12345 | Gujarat State Dental Council
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
