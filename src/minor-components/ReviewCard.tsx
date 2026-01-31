import { assets, type Review } from "../assets/assets"
import DateRender from "./DateRender"
import StarRender from "./StarRender"

const ReviewCard = ( {review} : {review: Review} ) => {
  return (
    <div className="w-full bg-gray-200/60 h-full rounded-lg p-2 px-2.5 grid grid-rows-[33%_66%]">
      <div className="flex items-center gap-3">
        <div className="img shrink-0 size-11 rounded-lg overflow-hidden">
          <img src={review.clientImage || assets.images.defaultUser} alt='client image' />
        </div>
        <div className="flex flex-col justify-center">
          <p className="whitespace-nowrap font-medium">
          {review.name}
        </p>
        <StarRender rating={Number(review.rating)} />
        </div>
      </div>
      <div className="bg-yellow-200/50 px-2 py-2 text-sm md-contrast flex flex-col">
        <p className="line-clamp-4 text-base">
          {review.reviewText}
        </p>
        <p className="mt-auto flex items-center justify-between">
          {<DateRender date={review.createdAt} />}
          {<span className="text-sm low-contrast">{review.rating}{" "} rating</span>}
        </p>
      </div>
    </div>
  )
}

export default ReviewCard