import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ImageUpload from "@/components/ImageUpload";
import AnalysisResults from "@/components/AnalysisResults";
import DiseaseInfoSection from "@/components/DiseaseInfoSection";
import { getMockAnalysis, type AnalysisResult } from "@/lib/skin-analysis";

const Index = () => {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const uploadRef = useRef<HTMLDivElement>(null);

  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageSelected = async (file: File) => {
    setIsAnalyzing(true);
    setResult(null);
    try {
      const analysis = await getMockAnalysis(file);
      setResult(analysis);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onGetStarted={scrollToUpload} />

      {/* Upload Section */}
      <section ref={uploadRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Upload & Analyze
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Upload a clear image of the affected skin area for AI-powered screening.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!result ? (
              <ImageUpload
                key="upload"
                onImageSelected={handleImageSelected}
                isAnalyzing={isAnalyzing}
              />
            ) : (
              <AnalysisResults key="results" result={result} onReset={handleReset} />
            )}
          </AnimatePresence>
        </div>
      </section>

      <DiseaseInfoSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            DermAI Diagnostics · For educational and research purposes only · Not a substitute for professional medical advice
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
