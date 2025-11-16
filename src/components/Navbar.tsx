import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#appointment" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg border-b border-border"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/media/logo.png"
              alt="The Tooth Co. Logo"
              className="h-16 lg:h-[75px] w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="tel:+919909041112"
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium inline-flex items-center gap-2"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Book Appointment Button
          <div className="hidden md:block">
            <Button
              variant="dental"
              size="default"
              onClick={() =>
                document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-semibold"
            >
              Book Appointment
            </Button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+919909041112"
              className="flex items-center gap-2 px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
            <div className="px-3 py-2">
              <Button
                variant="dental"
                size="sm"
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
