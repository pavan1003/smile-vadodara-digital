import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, MessageCircle, Phone, MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const services = [
    "General Checkup",
    "Teeth Cleaning",
    "Teeth Whitening",
    "Dental Implants",
    "Root Canal Treatment",
    "Orthodontics",
    "Cosmetic Dentistry",
    "Emergency Care",
    "Other",
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppBooking = () => {
    const { name, phone, service, date, time, message } = formData;

    if (!name || !phone || !service) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone number, and service selection are required.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    let whatsappMessage = `Hi Dr. Malvika Trivedi,\nI would like to book an appointment at The Tooth Co.\n\n*Patient Details:*`;
    if (name) whatsappMessage += `\nName: ${name}`;
    if (phone) whatsappMessage += `\nPhone: ${phone}`;
    if (formData.email) whatsappMessage += `\nEmail: ${formData.email}`;

    whatsappMessage += `\n\n*Appointment Details:*`;
    if (service) whatsappMessage += `\nService: ${service}`;
    if (date) whatsappMessage += `\nPreferred Date: ${date}`;
    if (time) whatsappMessage += `\nPreferred Time: ${time}`;
    if (message) whatsappMessage += `\nAdditional Message: ${message}`;

    whatsappMessage += `\n\nThank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const doctorWhatsApp = "917016046982";
    const whatsappUrl = `https://wa.me/${doctorWhatsApp}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Redirected to WhatsApp",
        description: "Your appointment request has been sent to Dr. Malvika Trivedi via WhatsApp.",
      });
    }, 1000);
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book Your Appointment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule your visit with Dr. Malvika Trivedi. We'll send your appointment request
              directly via WhatsApp for quick confirmation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <Card className="hover-lift animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  Schedule Appointment
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll contact you via WhatsApp to confirm your
                  appointment.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => {
                        // Accept only digits, spaces, +, -, (, )
                        const value = e.target.value.replace(/[^\d+\-\s()]/g, "");
                        handleInputChange("phone", value);
                      }}
                      pattern="^[\d+\-\s()]{7,}$"
                      inputMode="tel"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service">Service Required *</Label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="transition-all duration-300 focus:scale-105">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="transition-all duration-300 focus:scale-105"
                      min={new Date().toISOString().split("T")[0]}
                      onKeyDown={(e) => e.preventDefault()} // Prevent manual typing
                      onInput={(e) => {
                        // Prevent selecting Sundays
                        const input = e.target as HTMLInputElement;
                        const date = new Date(input.value);
                        if (date.getDay() === 0) {
                          input.setCustomValidity("Sundays are not available for appointments.");
                        } else {
                          input.setCustomValidity("");
                        }
                      }}
                      onBlur={(e) => {
                        // Also check on blur
                        const input = e.target as HTMLInputElement;
                        const date = new Date(input.value);
                        if (date.getDay() === 0) {
                          input.setCustomValidity("Sundays are not available for appointments.");
                        } else {
                          input.setCustomValidity("");
                        }
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger className="transition-all duration-300 focus:scale-105">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "10:30 AM",
                          "11:00 AM",
                          "11:30 AM",
                          "12:00 PM",
                          "12:30 PM",
                          "1:00 PM",
                          "5:00 PM",
                          "5:30 PM",
                          "6:00 PM",
                          "6:30 PM",
                          "7:00 PM",
                        ].map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Any specific concerns or requests..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="transition-all duration-300 focus:scale-105"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={handleWhatsAppBooking}
                  disabled={isLoading}
                  className="w-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {isLoading ? "Redirecting..." : "Book via WhatsApp"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll confirm your appointment via WhatsApp.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+917016046982" className="text-muted-foreground">
                        +91 7016046982
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:drmalvikatrivedi@gmail.com" className="text-muted-foreground">
                        drmalvikatrivedi@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        Ground Floor, Suramya Apartments,
                        <br />
                        SNDT College Rd, near Akota Stadium Road,
                        <br />
                        Akota, Vadodara, Gujarat 390020, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Operating Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 10:30 AM - 1 PM, 5 PM - 7 PM
                        <br />
                        Sunday: Emergency Only
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Why Choose WhatsApp Booking?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      Instant confirmation from Dr. Malvika Trivedi
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      Easy rescheduling and communication
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      Appointment reminders and updates
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      Direct access to clinic team
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
