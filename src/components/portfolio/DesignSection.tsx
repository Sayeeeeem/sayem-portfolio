import { motion } from "framer-motion";
import { Award, Trophy, ExternalLink } from "lucide-react";
import { portfolioContent } from "@/config/portfolio";

const DesignSection = () => {
  return (
    <section className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          {portfolioContent.achievements.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-16 max-w-2xl leading-tight">
          {portfolioContent.achievements.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <h3 className="font-display font-medium text-foreground text-sm tracking-wider uppercase">{portfolioContent.achievements.certificationsLabel}</h3>
          </div>
          <div className="space-y-0">
            {portfolioContent.achievements.certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start justify-between py-4 border-b border-border group"
              >
                <div className="flex-1 pr-4">
                  <h4 className="font-display text-foreground text-sm font-medium leading-snug">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {portfolioContent.achievements.verifyLabel}
                    </a>
                    <span className="text-xs text-muted-foreground/60">{portfolioContent.achievements.idLabel}: {cert.credentialId}</span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-4 h-4 text-accent" />
            <h3 className="font-display font-medium text-foreground text-sm tracking-wider uppercase">{portfolioContent.achievements.awardsLabel}</h3>
          </div>
          <div className="space-y-0">
            {portfolioContent.achievements.awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start justify-between py-4 border-b border-border group"
              >
                <div className="flex-1 pr-4">
                  <h4 className="font-display text-foreground text-sm font-medium leading-snug">{award.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{award.org}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{award.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
