import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../utils/cn";

interface MobileNavProps {
  handleSlide: (direction: "left" | "right") => void;
}

export const CarouselControls = ({ handleSlide }: MobileNavProps) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => handleSlide("left")}
        className={cn(
          "flex items-center justify-center p-3 rounded-full transition-transform active:scale-95",
          "bg-stone-900 text-white shadow-lg border border-stone-800",
          "hover:bg-stone-800 shadow"
        )}
        aria-label="Slide Left"
      >
        <ChevronLeft size={24} strokeWidth={2.5} />
      </button>

      <button
        onClick={() => handleSlide("right")}
        className={cn(
          "flex items-center justify-center p-3 rounded-full transition-transform active:scale-95",
          "bg-stone-900 text-white shadow-lg",
          "hover:bg-stone-800 shadow"
        )}
        aria-label="Slide Right"
      >
        <ChevronRight size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
};