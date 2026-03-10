export interface AnalysisResult {
  disease: string;
  confidence: number;
  risk: "Low" | "Moderate" | "High";
  description: string;
  recommendations: string[];
  topPredictions: { disease: string; confidence: number }[];
}

export const DISEASES = [
  {
    name: "Acne",
    description: "A common skin condition that occurs when hair follicles become clogged with oil and dead skin cells.",
    symptoms: ["Pimples", "Blackheads", "Whiteheads", "Cysts"],
    severity: "Low" as const,
  },
  {
    name: "Eczema",
    description: "A condition that causes the skin to become inflamed, itchy, cracked, and rough.",
    symptoms: ["Itching", "Dry skin", "Redness", "Swelling"],
    severity: "Moderate" as const,
  },
  {
    name: "Psoriasis",
    description: "An autoimmune condition that causes rapid skin cell buildup, resulting in scaling on the skin's surface.",
    symptoms: ["Red patches", "Silvery scales", "Dry cracked skin", "Itching"],
    severity: "Moderate" as const,
  },
  {
    name: "Ringworm",
    description: "A common fungal infection that creates a ring-shaped rash on the skin.",
    symptoms: ["Ring-shaped rash", "Itching", "Red scaly patches", "Hair loss in area"],
    severity: "Low" as const,
  },
  {
    name: "Melanoma",
    description: "The most serious type of skin cancer, developing in melanocytes that produce melanin.",
    symptoms: ["Asymmetric mole", "Irregular borders", "Color variation", "Diameter > 6mm"],
    severity: "High" as const,
  },
];

export function getMockAnalysis(imageFile: File): Promise<AnalysisResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * DISEASES.length);
      const disease = DISEASES[randomIndex];
      const confidence = 0.7 + Math.random() * 0.25;

      const otherDiseases = DISEASES.filter((_, i) => i !== randomIndex);
      const topPredictions = [
        { disease: disease.name, confidence },
        ...otherDiseases.slice(0, 2).map((d) => ({
          disease: d.name,
          confidence: Math.random() * 0.2,
        })),
      ].sort((a, b) => b.confidence - a.confidence);

      resolve({
        disease: disease.name,
        confidence,
        risk: disease.severity,
        description: disease.description,
        recommendations: [
          "Consult a dermatologist for professional diagnosis",
          "Avoid self-medication based on AI predictions",
          "Monitor the affected area for changes",
          "Take clear photos for medical records",
        ],
        topPredictions,
      });
    }, 3000);
  });
}
