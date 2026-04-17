import { motion } from "framer-motion";
import { useState } from "react";
import { portfolioContent } from "@/config/portfolio";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-14">
        <a href="#" className="font-display font-semibold text-foreground tracking-tight">
          {portfolioContent.brandName}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {portfolioContent.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden flex flex-col space-y-1 p-2"
        >
          <span className="w-5 h-0.5 bg-foreground"></span>
          <span className="w-5 h-0.5 bg-foreground"></span>
          <span className="w-5 h-0.5 bg-foreground"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 px-6 py-4">
          {portfolioContent.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
