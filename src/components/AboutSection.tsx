import { motion } from "framer-motion";
import { Shield, Heart, Compass, Users } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Local Expertise",
    description:
      "Our guides are born and raised in Morocco, offering authentic insights and hidden gems you won't find in guidebooks.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "Every tour is tailored to your preferences. From luxury riads to desert camps, we craft experiences that match your dreams.",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description:
      "Travel with confidence knowing our team ensures your safety and comfort throughout your Moroccan adventure.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description:
      "Intimate group sizes mean more meaningful connections, personalized attention, and authentic cultural exchanges.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Your Gateway to{" "}
              <span className="italic text-primary">Authentic</span> Morocco
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              For over 15 years, Sahara Dreams has been connecting travelers
              with the soul of Morocco. We believe the best journeys go beyond
              sightseeing—they create memories, friendships, and a deeper
              understanding of this magnificent land.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <span className="font-display text-4xl md:text-5xl font-semibold text-primary">
                  15+
                </span>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Years Experience
                </p>
              </div>
              <div className="w-px h-16 bg-border" />
              <div>
                <span className="font-display text-4xl md:text-5xl font-semibold text-primary">
                  5000+
                </span>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Happy Travelers
                </p>
              </div>
              <div className="w-px h-16 bg-border" />
              <div>
                <span className="font-display text-4xl md:text-5xl font-semibold text-primary">
                  50+
                </span>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Unique Routes
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
