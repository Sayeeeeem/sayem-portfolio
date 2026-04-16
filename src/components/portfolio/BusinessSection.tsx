import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioContent } from "@/config/portfolio";

const BusinessSection = () => {
  return (
    <section className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          {portfolioContent.ventures.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-16 max-w-2xl leading-tight">
          {portfolioContent.ventures.titleTop}
          <br />{portfolioContent.ventures.titleBottom}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {portfolioContent.ventures.items.map((biz, i) => (
          <motion.a
            key={biz.name}
            href={biz.link || undefined}
            target={biz.link ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-card rounded-lg p-8 group hover:bg-accent/10 transition-colors relative ${biz.link ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {biz.link && <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />}
            <div className={`inline-block px-2 py-0.5 rounded-full text-xs tracking-wider uppercase mb-4 ${biz.status === 'Active' ? 'bg-accent/10 text-accent' : 'bg-muted text-muted-foreground'}`}>
              {biz.status}
            </div>
            <h3 className="font-display font-medium text-foreground text-xl mb-2">{biz.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{biz.desc}</p>
            <p className="text-xs text-muted-foreground">{biz.mail}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BusinessSection;
