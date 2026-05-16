import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Mail, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourTitle?: string;
  tourPrice?: string;
}

export const BookingModal = ({
  isOpen,
  onClose,
  tourTitle,
  tourPrice,
}: BookingModalProps) => {
  const { toast } = useToast();
  const bookingTitle = tourTitle ? `Booking: ${tourTitle}` : "Booking request";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "2",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams(new FormData(e.target as HTMLFormElement) as unknown as Record<string, string>);
      params.set("title", bookingTitle);
      params.set("subject", bookingTitle);
      if (tourTitle) params.set("tour-title", tourTitle);
      if (tourPrice) params.set("tour-price", tourPrice);

      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      toast({
        title: "Booking Request Sent!",
        description: "We'll get back to you within 24 hours to confirm your booking.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "2",
        message: "",
      });
      onClose();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

return (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
        />

        {/* Centered Modal */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-lg max-h-screen bg-card rounded-2xl shadow-large overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="p-4">
              {/* Header */}
              <div className="relative p-6 pb-4 border-b border-border">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Book Your Adventure
                </h2>
                {tourTitle && (
                  <p className="font-body text-primary mt-1">
                    {tourTitle} {tourPrice && `- ${tourPrice}`}
                  </p>
                )}
              </div>

              {/* Form */}
              <form
                name="booking"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="p-6 space-y-5"
              >
                {/* Netlify required hidden fields */}
                <input type="hidden" name="form-name" value="booking" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="title" value={bookingTitle} />
                <input type="hidden" name="subject" value={bookingTitle} />
                <input type="hidden" name="tour-title" value={tourTitle || ""} />
                <input type="hidden" name="tour-price" value={tourPrice || ""} />

                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <User size={16} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <Phone size={16} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>

                {/* Date & Guests Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                      <Calendar size={16} />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                      <Users size={16} />
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="10+">10+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <MessageSquare size={16} />
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any dietary requirements, accessibility needs, or special requests..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? "Sending Request..." : "Request Booking"}
                </Button>

                <p className="font-body text-xs text-center text-muted-foreground">
                  No payment required now. We'll contact you to confirm availability and finalize your booking.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </>
    )}
  </AnimatePresence>
);
};
