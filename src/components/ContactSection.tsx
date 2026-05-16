import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(e.target as HTMLFormElement) as unknown as Record<string, string>).toString(),
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-sm tracking-[0.2em] uppercase text-sand-dark mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Ready for Your{" "}
              <span className="italic text-gold">Adventure?</span>
            </h2>
            <p className="font-body text-sand-dark text-lg mb-10 leading-relaxed">
              Let us help you plan the perfect Moroccan journey. Whether you
              have questions or are ready to book, our team is here to assist
              you every step of the way.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-sand-light/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-sand-dark">Email Us</p>
                  <p className="font-body text-background">
                    hello@saharadreams.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-sand-light/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-sand-dark">Call Us</p>
                  <p className="font-body text-background">+212 524 123 456</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-sand-light/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-sand-dark">Visit Us</p>
                  <p className="font-body text-background">
                    42 Rue Mouassine, Medina, Marrakech
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify required hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <label
                  htmlFor="name"
                  className="font-body text-sm text-sand-dark mb-2 block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-sand-light/10 border border-sand-light/20 rounded-lg font-body text-background placeholder:text-sand-dark/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-body text-sm text-sand-dark mb-2 block"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-sand-light/10 border border-sand-light/20 rounded-lg font-body text-background placeholder:text-sand-dark/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-body text-sm text-sand-dark mb-2 block"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-sand-light/10 border border-sand-light/20 rounded-lg font-body text-background placeholder:text-sand-dark/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                  placeholder="Tell us about your dream Moroccan adventure..."
                />
              </div>

              <Button variant="warm" size="xl" className="w-full" type="submit">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
