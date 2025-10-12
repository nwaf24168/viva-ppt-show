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
        "min-h-screen w-full flex items-center justify-center p-8 md:p-16",
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
