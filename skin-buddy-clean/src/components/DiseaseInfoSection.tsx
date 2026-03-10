import { motion } from "framer-motion";
import { DISEASES } from "@/lib/skin-analysis";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

const severityConfig = {
  Low: { icon: CheckCircle, className: "text-success" },
  Moderate: { icon: Info, className: "text-warning" },
  High: { icon: AlertTriangle, className: "text-destructive" },
};

const DiseaseInfoSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Conditions We Screen
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our model is trained to identify these five common dermatological conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {DISEASES.map((disease, i) => {
            const sev = severityConfig[disease.severity];
            const SevIcon = sev.icon;
            return (
              <motion.div
                key={disease.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-semibold text-lg text-card-foreground">
                    {disease.name}
                  </h3>
                  <SevIcon className={`w-5 h-5 ${sev.className}`} />
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {disease.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {disease.symptoms.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiseaseInfoSection;
