import reviews from "../assets/assets";
import ReviewCard from "../minor-components/ReviewCard";

const Reviews = () => {
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

      <div className="slider-container w-screen px-2 border-y border-slate-300 h-60 my-10">
        <div className="slider h-full flex w-max">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="h-full ml-2 basis-90 shrink-0 p-1.5 px-1"
            >
              <ReviewCard review={review} />
            </div>
          ))}
          {/* cover up divs: allowing the carousel animation to function */}
          {reviews.map((review, index) => (
            <div aria-hidden
              key={index}
              className=" h-full ml-2 basis-90 shrink-0 p-1.5 px-1"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
