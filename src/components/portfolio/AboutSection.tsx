import { motion } from "framer-motion";
import { Code, Palette, Heart, Briefcase, Shield, GraduationCap } from "lucide-react";
import { portfolioContent } from "@/config/portfolio";

const aboutIcons = {
  graduationCap: GraduationCap,
  palette: Palette,
  heart: Heart,
  shield: Shield,
  code: Code,
  briefcase: Briefcase,
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">{portfolioContent.about.eyebrow}</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-8 max-w-2xl leading-tight">
          {portfolioContent.about.title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-16">
          {portfolioContent.about.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioContent.about.traits.map((trait, i) => {
          const Icon = aboutIcons[trait.icon];

          return (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 group hover:bg-accent/10 transition-colors"
            >
              <Icon className="w-5 h-5 text-accent mb-4" />
              <h3 className="font-display font-medium text-foreground mb-1">{trait.label}</h3>
              <p className="text-sm text-muted-foreground">{trait.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
