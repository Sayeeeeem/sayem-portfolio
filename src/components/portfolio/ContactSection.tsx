import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin, Facebook } from "lucide-react";
import { portfolioContent } from "@/config/portfolio";

const socialIcons = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  phone: Phone,
};

const ContactSection = () => {
  return (
    <section className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          {portfolioContent.contact.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-6 leading-tight">
          {portfolioContent.contact.title}
        </h2>
        <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
          {portfolioContent.contact.description}
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
          <MapPin className="w-4 h-4" />
          {portfolioContent.contact.location}
        </div>

        <div className="flex flex-wrap gap-4">
          {portfolioContent.contact.socials.map((social) => {
            const Icon = socialIcons[social.icon];

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                <Icon className="w-4 h-4" />
                {social.label}
              </a>
            );
          })}
        </div>
      </motion.div>

      <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {portfolioContent.ownerName}
        </p>
        <p className="text-xs text-muted-foreground tracking-wider">
          {portfolioContent.contact.footerNote}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
