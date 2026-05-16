import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  MapPin,
  Check,
  X,
  ChevronLeft,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { getTourById, tours } from "@/data/tours";

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tour = getTourById(id || "");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!tour) {
    return <Navigate to="/tours" replace />;
  }

  const otherTours = tours.filter((t) => t.id !== tour.id).slice(0, 2);
  const priceLabel =
    tour.price.toLowerCase() === "on request" ? tour.price : `From ${tour.price}`;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/tours"
                className="inline-flex items-center gap-2 text-sand-light/80 hover:text-sand-light font-body text-sm mb-4 transition-colors"
              >
                <ChevronLeft size={16} />
                Back to Tours
              </Link>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-sand-light mb-4">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sand-light/90 font-body">
                <span className="flex items-center gap-2">
                  <MapPin size={18} />
                  {tour.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users size={18} />
                  {tour.groupSize}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Overview
                </h2>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  {tour.longDescription}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Tour Highlights
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-body text-foreground"
                    >
                      <Check
                        size={20}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Day-by-Day Itinerary
                </h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 border border-border"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-display text-lg font-semibold text-primary">
                            {day.day}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                            {day.title}
                          </h3>
                          <p className="font-body text-muted-foreground">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Included / Not Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 font-body text-foreground"
                      >
                        <Check
                          size={18}
                          className="text-green-600 mt-0.5 flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Not Included
                  </h3>
                  <ul className="space-y-2">
                    {tour.notIncluded.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 font-body text-muted-foreground"
                      >
                        <X
                          size={18}
                          className="text-destructive mt-0.5 flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-medium sticky top-24 border border-border"
              >
                <div className="mb-6">
                  <span className="font-body text-sm text-muted-foreground">
                    Price
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-semibold text-primary">
                      {tour.price}
                    </span>
                    {tour.price.toLowerCase() !== "on request" && (
                      <span className="font-body text-muted-foreground">
                        / person
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center justify-between font-body text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-foreground font-medium">
                      {tour.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-body text-sm">
                    <span className="text-muted-foreground">Group Size</span>
                    <span className="text-foreground font-medium">
                      {tour.groupSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-body text-sm">
                    <span className="text-muted-foreground">Tour Type</span>
                    <span className="text-foreground font-medium">
                      Private
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full mb-3"
                  size="lg"
                >
                  Book This Tour
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/custom-trip">Customize This Trip</Link>
                </Button>

                <p className="font-body text-xs text-center text-muted-foreground mt-4">
                  Availability and final price confirmed after request
                </p>
              </motion.div>
            </div>
          </div>

          {/* Other Tours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-12 border-t border-border"
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherTours.map((otherTour) => (
                <Link
                  key={otherTour.id}
                  to={`/tours/${otherTour.id}`}
                  className="group flex bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-all"
                >
                  <div className="w-1/3 overflow-hidden">
                    <img
                      src={otherTour.image}
                      alt={otherTour.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-2/3 p-4 md:p-6">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors mb-1">
                      {otherTour.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-2">
                      {otherTour.duration} • {otherTour.location}
                    </p>
                    <span className="font-body text-primary font-medium">
                      {otherTour.price.toLowerCase() === "on request"
                        ? otherTour.price
                        : `From ${otherTour.price}`}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tourTitle={tour.title}
        tourPrice={priceLabel}
      />
    </main>
  );
};

export default TourDetail;
