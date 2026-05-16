import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    text: "An absolutely magical experience! From the moment we landed, Sahara Dreams took care of everything. The desert camp under the stars was the highlight of our honeymoon.",
    tour: "Sahara Desert Expedition",
  },
  {
    name: "David Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "Our guide Hassan was incredible—his knowledge of Moroccan history and culture made every moment special. The Atlas trek was challenging but so rewarding.",
    tour: "Atlas Mountains Trek",
  },
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "Chefchaouen exceeded all expectations. The team arranged a private photography tour that captured memories I'll treasure forever. Highly recommend!",
    tour: "Blue Pearl of Morocco",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
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
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Stories from Our{" "}
            <span className="italic text-primary">Travelers</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Don't just take our word for it—hear from adventurers who've
            experienced the magic of Morocco with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card p-8 rounded-xl shadow-soft relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-display text-lg font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
                <p className="font-body text-xs text-primary mt-1">
                  {testimonial.tour}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
