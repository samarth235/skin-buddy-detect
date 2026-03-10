import { motion } from "framer-motion";
import { Shield, Brain, Eye, Upload } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Deep Learning",
    description: "Xception CNN with transfer learning for accurate classification",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    description: "Grad-CAM visualization shows what the model focuses on",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Confidence-based risk categorization with clinical logic",
  },
  {
    icon: Upload,
    title: "Instant Analysis",
    description: "Upload an image and receive results in seconds",
  },
];

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden gradient-surface">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            AI-Powered Screening
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Derm<span className="text-primary">AI</span>{" "}
            <span className="block text-muted-foreground text-3xl md:text-4xl lg:text-5xl font-medium mt-2">
              Diagnostics
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Skin disease screening powered by deep learning. Upload an image for
            instant AI-assisted analysis with confidence scoring and explainable
            results.
          </p>

          <motion.button
            onClick={onGetStarted}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="gradient-hero text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-elevated hover:shadow-xl transition-shadow"
          >
            Start Analysis →
          </motion.button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 max-w-5xl mx-auto"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-card-foreground mb-1.5">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
