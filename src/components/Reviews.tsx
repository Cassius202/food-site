import reviews from "../assets/assets";
import { CarouselControls } from "../minor-components/CarouselControls";
import ReviewCard from "../minor-components/ReviewCard";
import { cn } from "../utils/cn";
import { useEffect, useRef, useState } from "react";

const Reviews = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  // Handle scroll for touch devices (simple scroll)
 useEffect(() => {
  setIsTouchDevice(window.matchMedia("(max-width: 640px)").matches);
}, []);

  useEffect(() => {
    if (!sliderRef.current || !isTouchDevice) return;

    const minWidth = sliderRef.current.clientWidth;

    sliderRef.current.scrollTo({
      left: currentIndex * minWidth,
      behavior: "smooth",
    });
  }, [currentIndex, isTouchDevice]);

  const handleSlide = (direction: "left" | "right"): void => {
    if (!sliderRef.current) return;

    if (direction === "left") {
      setCurrentIndex((prev) => {
        if (prev === 0) {
          return reviews.length - 1;
        } else {
          return prev - 1;
        }
      });
    } else if (direction === "right") {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }
  };

  return (
    <div className="section bg-slate-100 min-h-60 w-full">
      <span
        className="text-primary font-bold uppercase tracking-widest text-sm mb-2"
        style={{ color: "#F9A01B" }}
      >
        reviews
      </span>
      <h1 className="title max-lg:px-10 leading-tight">
        People seem to Enjoy Foodie's Meals
      </h1>
      <p className="subtitle mb-4">
        A lot of people have good things to say about our quality and service
      </p>

      <div
        className={cn(
          "slider-container relative w-screen px-2 border-y border-slate-300 h-60 my-10",
          isTouchDevice && "mb-4",
        )}
      >
        <div
          className={cn(
            "h-full flex",
            isTouchDevice
              ? "w-full max-w-4xl overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
              : "slider w-max",
          )}
          ref={sliderRef}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className={cn(
                "h-full ml-2 basis-90 shrink-0 p-1.5 px-1",
                isTouchDevice && "ml-0 basis-full px-10 max-[500px]:px-4",
              )}
            >
              <ReviewCard review={review} />
            </div>
          ))}

          {/* Duplicate cards for infinite scroll on NON-touch devices */}
          {!isTouchDevice &&
            reviews.map((review, index) => (
              <div
                aria-hidden
                key={`duplicate-${index}`}
                className="h-full ml-2 basis-90 shrink-0 p-1.5 px-1"
              >
                <ReviewCard review={review} />
              </div>
            ))}
        </div>
      </div>

      {isTouchDevice && <CarouselControls handleSlide={handleSlide} />}
    </div>
  );
};

export default Reviews;
