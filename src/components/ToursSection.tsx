import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TourCard } from "./TourCard";
import { tours } from "@/data/tours";

export const ToursSection = () => {
  return (
    <section id="tours" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4 block">
            Our Experiences
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Curated Moroccan <span className="italic text-primary">Tours</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Each journey is thoughtfully designed to reveal Morocco's authentic
            beauty, rich culture, and warm hospitality.
          </p>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tours.map((tour, index) => (
            <TourCard key={tour.id} id={tour.id} {...tour} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/custom-trip"
            className="font-body text-primary font-medium hover:underline underline-offset-4 transition-all"
          >
            Looking for something different? Let's create your perfect
            itinerary
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
