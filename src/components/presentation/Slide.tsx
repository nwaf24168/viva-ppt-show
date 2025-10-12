import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideProps {
  children: ReactNode;
  className?: string;
  background?: string;
}

export const Slide = ({ children, className, background }: SlideProps) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 overflow-x-hidden",
        background || "bg-background",
        className
      )}
    >
      <div className="max-w-7xl w-full">
        {children}
      </div>
    </div>
  );
};
