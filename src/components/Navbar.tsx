import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation, useNavigate } from "react-router-dom"; // added useNavigate

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Tours", href: "/#tours" },
  { name: "About", href: "/#about" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // added navigate
  const isHomePage = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(() =>
    isHomePage ? window.scrollY > 50 : true
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll listener only on homepage
  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled
      ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
      : "bg-transparent py-6"
  }`;

  const logoClasses = `font-display text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 ${
    isScrolled ? "text-foreground" : "text-sand-light"
  }`;

  const linkClasses = (scrolled: boolean) =>
    `font-body text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
      scrolled ? "text-foreground" : "text-sand-light"
    }`;

  const buttonVariant = isScrolled ? "default" : "hero";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={headerClasses}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/#home" className="flex items-center gap-2">
          <span className={logoClasses}>Sahara Dreams</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={linkClasses(isScrolled)}>
              {link.name}
            </a>
          ))}
          <Button
            variant={buttonVariant}
            size="lg"
            onClick={() => navigate("/tours")} // redirect to /tours
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? "text-foreground" : "text-sand-light"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-body text-base font-medium text-foreground hover:text-primary py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="default"
                size="lg"
                className="mt-2"
                onClick={() => navigate("/tours")} // redirect to /tours
              >
                Book Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
