import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Mail,
  Phone,
  User,
  MapPin,
  Compass,
  Heart,
  Sparkles,
  DollarSign,
  Clock,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const destinations = [
  "Marrakech",
  "Fes",
  "Chefchaouen",
  "Sahara Desert",
  "Atlas Mountains",
  "Essaouira",
  "Casablanca",
  "Tangier",
  "Ouarzazate",
  "Agadir",
];

const interests = [
  "History & Culture",
  "Adventure & Trekking",
  "Food & Cooking",
  "Photography",
  "Relaxation & Wellness",
  "Wildlife & Nature",
  "Architecture",
  "Shopping & Souks",
  "Desert Experience",
  "Beach & Coastal",
];

const accommodationTypes = [
  "Luxury Riads & Hotels",
  "Boutique Guesthouses",
  "Desert Camps",
  "Mountain Lodges",
  "Mix of All",
];

const CustomTrip = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    []
  );
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    duration: "",
    travelers: "2",
    budget: "",
    accommodation: "",
    message: "",
  });

  const toggleSelection = (
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams(new FormData(e.target as HTMLFormElement) as unknown as Record<string, string>);
      params.set("destinations", selectedDestinations.join(", "));
      params.set("interests", selectedInterests.join(", "));

      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      toast({
        title: "Custom Trip Request Sent!",
        description:
          "Our travel experts will craft your personalized itinerary and contact you within 48 hours.",
      });

      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        startDate: "",
        duration: "",
        travelers: "2",
        budget: "",
        accommodation: "",
        message: "",
      });
      setSelectedDestinations([]);
      setSelectedInterests([]);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-sand">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4 block">
              Your Dream Journey
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Plan Your <span className="italic text-primary">Custom</span> Trip
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              Tell us about your perfect Moroccan adventure. Our travel experts
              will design a personalized itinerary tailored to your interests,
              timeline, and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <form
            name="custom-trip"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto"
          >
            <input type="hidden" name="form-name" value="custom-trip" />
            <input type="hidden" name="bot-field" />
            {/* Step 1: Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User size={20} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-card-foreground">
                  Your Details
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Full Name *
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
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Email Address *
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
                <div className="md:col-span-2">
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900 (WhatsApp preferred)"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 2: Trip Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Compass size={20} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-card-foreground">
                  Trip Details
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <Calendar size={16} />
                    Preferred Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <Clock size={16} />
                    Trip Duration *
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    <option value="">Select duration</option>
                    <option value="3-5">3-5 days</option>
                    <option value="6-8">6-8 days</option>
                    <option value="9-12">9-12 days</option>
                    <option value="13+">13+ days</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <Users size={16} />
                    Number of Travelers *
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Traveler" : "Travelers"}
                      </option>
                    ))}
                    <option value="10+">10+ Travelers</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <DollarSign size={16} />
                    Budget Per Person
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="budget">Budget ($50-100/day)</option>
                    <option value="mid-range">Mid-range ($100-200/day)</option>
                    <option value="comfort">Comfort ($200-350/day)</option>
                    <option value="luxury">Luxury ($350+/day)</option>
                  </select>
                </div>
              </div>

              {/* Accommodation */}
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-3 block">
                  Preferred Accommodation Style
                </label>
                <div className="flex flex-wrap gap-2">
                  {accommodationTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          accommodation:
                            prev.accommodation === type ? "" : type,
                        }))
                      }
                      className={`px-4 py-2 rounded-full font-body text-sm transition-all ${
                        formData.accommodation === type
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Step 3: Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-card-foreground">
                  Destinations
                </h2>
              </div>

              <p className="font-body text-muted-foreground mb-4">
                Select all destinations you'd like to visit (or let us
                surprise you!)
              </p>

              <div className="flex flex-wrap gap-2">
                {destinations.map((dest) => (
                  <button
                    key={dest}
                    type="button"
                    onClick={() =>
                      toggleSelection(
                        dest,
                        selectedDestinations,
                        setSelectedDestinations
                      )
                    }
                    className={`px-4 py-2 rounded-full font-body text-sm transition-all ${
                      selectedDestinations.includes(dest)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                    }`}
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 4: Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart size={20} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-card-foreground">
                  Your Interests
                </h2>
              </div>

              <p className="font-body text-muted-foreground mb-4">
                What experiences are you most excited about?
              </p>

              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() =>
                      toggleSelection(
                        interest,
                        selectedInterests,
                        setSelectedInterests
                      )
                    }
                    className={`px-4 py-2 rounded-full font-body text-sm transition-all ${
                      selectedInterests.includes(interest)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 5: Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles size={20} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-card-foreground">
                  Anything Else?
                </h2>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us more about your dream trip! Any special occasions, accessibility needs, dietary requirements, or specific experiences you've been dreaming of..."
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
            </motion.div>

            {/* Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <Button
                type="submit"
                size="xl"
                disabled={isSubmitting}
                className="min-w-[200px]"
              >
                {isSubmitting ? "Sending Request..." : "Submit Trip Request"}
              </Button>
              <p className="font-body text-sm text-muted-foreground mt-4">
                We'll respond within 48 hours with a personalized itinerary proposal.
              </p>
            </motion.div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CustomTrip;
