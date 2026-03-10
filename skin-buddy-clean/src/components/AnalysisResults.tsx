import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Info, TrendingUp } from "lucide-react";
import type { AnalysisResult } from "@/lib/skin-analysis";

interface AnalysisResultsProps {
  result: AnalysisResult;
  onReset: () => void;
}

const riskConfig = {
  Low: { icon: CheckCircle, className: "bg-success/10 text-success border-success/20" },
  Moderate: { icon: Info, className: "bg-warning/10 text-warning border-warning/20" },
  High: { icon: AlertTriangle, className: "bg-destructive/10 text-destructive border-destructive/20" },
};

const AnalysisResults = ({ result, onReset }: AnalysisResultsProps) => {
  const risk = riskConfig[result.risk];
  const RiskIcon = risk.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto space-y-6"
    >
      {/* Main result card */}
      <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden">
        <div className="p-6 border-b border-border/50">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Predicted Condition</p>
              <h2 className="text-3xl font-display font-bold text-card-foreground">
                {result.disease}
              </h2>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium ${risk.className}`}>
              <RiskIcon className="w-4 h-4" />
              {result.risk} Risk
            </div>
          </div>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            {result.description}
          </p>
        </div>

        {/* Confidence bar */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-card-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Confidence Score
            </span>
            <span className="text-2xl font-display font-bold text-primary">
              {(result.confidence * 100).toFixed(1)}%
            </span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${result.confidence * 100}%` }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="h-full gradient-hero rounded-full"
            />
          </div>
        </div>

        {/* Top predictions */}
        <div className="p-6">
          <h3 className="text-sm font-medium text-card-foreground mb-4">
            Top Predictions
          </h3>
          <div className="space-y-3">
            {result.topPredictions.map((pred, i) => (
              <motion.div
                key={pred.disease}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm text-muted-foreground w-6 font-medium">
                  #{i + 1}
                </span>
                <span className="text-sm font-medium text-card-foreground flex-1">
                  {pred.disease}
                </span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pred.confidence * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                    className="h-full bg-primary/60 rounded-full"
                  />
                </div>
                <span className="text-sm text-muted-foreground w-14 text-right">
                  {(pred.confidence * 100).toFixed(1)}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-accent/50 rounded-2xl p-6 border border-border/50"
      >
        <h3 className="font-display font-semibold text-foreground mb-3">
          Recommendations
        </h3>
        <ul className="space-y-2">
          {result.recommendations.map((rec, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {rec}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-warning/5 border border-warning/20 rounded-xl p-4 flex items-start gap-3"
      >
        <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Disclaimer:</strong> This tool is for educational
          purposes only and does not replace professional medical diagnosis. Always consult a
          qualified dermatologist.
        </p>
      </motion.div>

      {/* Reset */}
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onReset}
          className="gradient-hero text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-card hover:shadow-elevated transition-shadow"
        >
          Analyze Another Image
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AnalysisResults;
