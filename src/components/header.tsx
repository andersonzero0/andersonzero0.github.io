import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const navItems = [
  { id: "hero", label: "HOME" },
  { id: "stack", label: "STACK" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      // Check if we're at the bottom of the page
      const isBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;
      
      // If at bottom, activate last section (contact)
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      // Get current scroll position with offset for header
      const scrollPosition = window.scrollY + 200;

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      
      // Force scroll event after smooth scroll animation completes
      setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
      }, 500);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-white/5 flex justify-between items-center px-8 py-4">
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("hero");
        }}
        className="text-xl font-bold text-accent tracking-widest font-headline uppercase tracking-tighter hover:text-primary transition-colors"
      >
        ANDERSON_DEV_V1
      </a>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen || isMediumScreen ? "auto" : 0,
          opacity: isMenuOpen || isMediumScreen ? 1 : 0,
        }}
        transition={{ height: { duration: 0.3 }, opacity: { duration: 0.3 } }}
        className={`${
          isMenuOpen
            ? "absolute top-full left-0 w-full bg-background border-b border-white/5 px-8 py-4 flex flex-col gap-4"
            : "hidden"
        } md:flex md:relative md:top-0 md:w-auto md:bg-transparent md:border-0 md:p-0 md:flex-row md:gap-8 md:items-center`}
      >
        {navItems.slice(1).map((item) => (
          <a
            key={item.id}
            className={`font-headline uppercase tracking-tighter transition-colors ${
              activeSection === item.id
                ? "text-accent border-b border-accent pb-1"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </motion.div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Terminal className="text-accent" size={20} />
        <button
          className="md:hidden text-on-surface"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

