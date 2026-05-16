import { motion } from "framer-motion";
import { Clock, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface TourCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  description: string;
  index: number;
}

export const TourCard = ({
  id,
  image,
  title,
  location,
  duration,
  groupSize,
  price,
  description,
  index,
}: TourCardProps) => {
  const priceLabel = price.toLowerCase() === "on request" ? price : `From ${price}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-body font-medium rounded-full">
            {priceLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin size={14} />
          <span className="font-body text-sm">{location}</span>
        </div>

        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-4 mb-5 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span className="font-body text-xs">{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={14} />
            <span className="font-body text-xs">{groupSize}</span>
          </div>
        </div>

        <Button variant="default" className="w-full" asChild>
          <Link to={`/tours/${id}`}>View Details</Link>
        </Button>
      </div>
    </motion.div>
  );
};
