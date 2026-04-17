import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { portfolioContent } from "@/config/portfolio";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroImage = `${import.meta.env.BASE_URL}sayemicon.jpg`;

  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative">
      <div className="md:hidden absolute top-6 right-6 z-20">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-card/95 p-2 text-foreground shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
        </button>

        {menuOpen && (
          <div className="mt-2 w-52 rounded-3xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur-sm">
            {portfolioContent.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm text-foreground hover:bg-accent/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="hidden md:block absolute top-44 right-0 md:right-4 lg:right-16"
      >
        <img
          src={heroImage}
          alt="Abdullah Al Mahmud Sayem"
          className="max-w-full w-[20rem] md:w-[24rem] lg:w-[29rem] h-auto rounded-2xl object-cover shadow-xl border border-border/60"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl lg:pr-72"
      >
        <p className="text-muted-foreground text-sm tracking-[0.22em] uppercase mb-6 font-body md:whitespace-nowrap">
          {portfolioContent.hero.intro}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight text-foreground">
          <span className="block md:whitespace-nowrap">{portfolioContent.hero.nameTop}</span>
          <span className="block md:whitespace-nowrap">{portfolioContent.hero.nameMiddle}</span>
          <span className="block md:whitespace-nowrap text-accent">{portfolioContent.hero.nameAccent}</span>
        </h1>
        <p className="mt-8 text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed font-light">
          {portfolioContent.hero.summary}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="block md:hidden mt-10"
        >
          <img
            src={heroImage}
            alt="Abdullah Al Mahmud Sayem"
            className="mx-auto w-full max-w-[22rem] h-auto rounded-2xl object-cover shadow-xl border border-border/60"
          />
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={portfolioContent.hero.resumeHref}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            {portfolioContent.hero.resumeLabel}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-foreground hover:bg-card transition-colors"
          >
            {portfolioContent.hero.contactLabel}
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24"
      >
        <a href="#about" className="flex items-center gap-2 text-muted-foreground text-sm tracking-wider hover:text-accent transition-colors">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          {portfolioContent.hero.scrollLabel}
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
