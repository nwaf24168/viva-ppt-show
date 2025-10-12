import { useState, useEffect } from "react";
import { Navigation } from "@/components/presentation/Navigation";
import { CoverSlide } from "@/components/presentation/slides/CoverSlide";
import { TableOfContentsSlide } from "@/components/presentation/slides/TableOfContentsSlide";
import { VOCIntroSlide } from "@/components/presentation/slides/VOCIntroSlide";
import { VOCImportanceSlide } from "@/components/presentation/slides/VOCImportanceSlide";
import { CTQIntroSlide } from "@/components/presentation/slides/CTQIntroSlide";
import { VOCToCTQSlide } from "@/components/presentation/slides/VOCToCTQSlide";
import { DataOverviewSlide } from "@/components/presentation/slides/DataOverviewSlide";
import { ComplaintsDistributionSlide } from "@/components/presentation/slides/ComplaintsDistributionSlide";
import { MaintenanceProblemsSlide } from "@/components/presentation/slides/MaintenanceProblemsSlide";
import { KeywordsAnalysisSlide } from "@/components/presentation/slides/KeywordsAnalysisSlide";
import { CTQDetailedSlide } from "@/components/presentation/slides/CTQDetailedSlide";
import { RecommendationsSlide } from "@/components/presentation/slides/RecommendationsSlide";
import { ConclusionSlide } from "@/components/presentation/slides/ConclusionSlide";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <CoverSlide />,
    <TableOfContentsSlide />,
    <VOCIntroSlide />,
    <VOCImportanceSlide />,
    <CTQIntroSlide />,
    <VOCToCTQSlide />,
    <DataOverviewSlide />,
    <ComplaintsDistributionSlide />,
    <MaintenanceProblemsSlide />,
    <KeywordsAnalysisSlide />,
    <CTQDetailedSlide />,
    <RecommendationsSlide />,
    <ConclusionSlide />,
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="relative min-h-screen">
      <div className="transition-all duration-500 ease-in-out">
        {slides[currentSlide]}
      </div>
      
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default Index;
