import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useExportPowerPoint } from "@/hooks/useExportPowerPoint";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Navigation = ({ currentSlide, totalSlides, onNext, onPrev }: NavigationProps) => {
  const { exportToPowerPoint } = useExportPowerPoint();
  
  return (
    <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 px-4">
      <div className="flex items-center gap-2 sm:gap-4 bg-card/95 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-3 rounded-full shadow-lg border border-border touch-manipulation">
        <Button
          variant="ghost"
          size="icon"
          onClick={exportToPowerPoint}
          className="rounded-full h-10 w-10 sm:h-9 sm:w-9 flex-shrink-0"
          title="تصدير PowerPoint"
        >
          <Download className="w-5 h-5 sm:w-5 sm:h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="rounded-full h-10 w-10 sm:h-9 sm:w-9 flex-shrink-0"
        >
          <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 rotate-180" />
        </Button>
        
        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2.5 sm:h-2 rounded-full transition-all duration-300",
                i === currentSlide 
                  ? "w-8 sm:w-8 bg-primary" 
                  : "w-2.5 sm:w-2 bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="rounded-full h-10 w-10 sm:h-9 sm:w-9 flex-shrink-0"
        >
          <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </div>
  );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
