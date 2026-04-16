import { motion } from "framer-motion";
import { portfolioContent } from "@/config/portfolio";

const Navbar = () => {
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
      </div>
    </motion.nav>
  );
};

export default Navbar;
