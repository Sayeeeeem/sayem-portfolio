import { motion } from "framer-motion";
import { Users, Shield, Monitor, Globe, Droplets, Megaphone, Heart, Zap } from "lucide-react";
import { portfolioContent } from "@/config/portfolio";

const clubIcons = {
  heart: Heart,
  shield: Shield,
  monitor: Monitor,
  globe: Globe,
  users: Users,
  droplets: Droplets,
  megaphone: Megaphone,
  zap: Zap,
};

const ClubsSection = () => {
  return (
    <section className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          {portfolioContent.clubs.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-16 max-w-2xl leading-tight">
          {portfolioContent.clubs.title}
        </h2>
      </motion.div>

      <div className="space-y-2">
        {portfolioContent.clubs.items.map((club, i) => {
          const Icon = clubIcons[club.icon];

          return (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-5 p-5 rounded-lg hover:bg-card transition-colors group cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors mt-0.5">
                <Icon className="w-4 h-4 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-1">
                  <h3 className="font-display font-medium text-foreground">{club.name}</h3>
                  <span className="text-xs tracking-wider uppercase text-accent">{club.role}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{club.desc}</p>
                <p className="text-xs text-muted-foreground/60">{club.period}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ClubsSection;
