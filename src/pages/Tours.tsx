import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { tours } from "@/data/tours";

const Tours = () => {
  const [bookingModal, setBookingModal] = useState<{
    isOpen: boolean;
    tour?: (typeof tours)[0];
  }>({ isOpen: false });

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
              Explore Morocco
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Our <span className="italic text-primary">Curated</span> Tours
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              From desert expeditions to mountain treks, discover authentic
              Moroccan experiences crafted with passion and local expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {tours.map((tour, index) => (
              <motion.article
                key={tour.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <Link to={`/tours/${tour.id}`}>
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </Link>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent md:bg-gradient-to-r" />
                    <div className="absolute bottom-4 left-4 md:bottom-auto md:top-4">
                      <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-body font-medium rounded-full">
                        {tour.price.toLowerCase() === "on request"
                          ? tour.price
                          : `From ${tour.price}`}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                    <Link to={`/tours/${tour.id}`}>
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        {tour.title}
                      </h2>
                    </Link>

                    <div className="flex items-center gap-1 text-muted-foreground mb-3">
                      <MapPin size={14} />
                      <span className="font-body text-sm">{tour.location}</span>
                    </div>

                    <p className="font-body text-muted-foreground mb-4 flex-grow">
                      {tour.description}
                    </p>

                    <div className="flex items-center gap-6 mb-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span className="font-body text-sm">{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span className="font-body text-sm">{tour.groupSize}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => setBookingModal({ isOpen: true, tour })}
                        className="flex-1"
                      >
                        Book Now
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <Link to={`/tours/${tour.id}`}>
                          View Details <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Custom Trip CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10"
          >
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Let us design a custom itinerary tailored to your interests,
              timeline, and budget. Your perfect Moroccan adventure awaits.
            </p>
            <Button asChild size="lg">
              <Link to="/custom-trip">Plan Your Custom Trip</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false })}
        tourTitle={bookingModal.tour?.title}
        tourPrice={
          bookingModal.tour?.price.toLowerCase() === "on request"
            ? bookingModal.tour?.price
            : bookingModal.tour?.price
              ? `From ${bookingModal.tour.price}`
              : undefined
        }
      />
    </main>
  );
};

export default Tours;
