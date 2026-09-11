import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const StoreCard = ({
  id,
  name,
  category,
  image,
  rating = 4.8,
  reviews = 0,
}) => {
  return (
    <Link
      to={`/stores/${id}`}
      className="
        group
        block
        overflow-hidden
        rounded-md
        border
        border-slate-200
        bg-white
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      {/* Store Image */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#F8F9FC]">
        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Store Details */}
      <div className="px-4 py-3">

        {/* Store Name */}
        <h3
          className="
            truncate
            text-[16px]
            font-semibold
            text-[#172D55]
            transition-colors
            duration-200
            group-hover:text-[#4B50D8]
          "
          title={name}
        >
          {name}
        </h3>

        {/* Category */}
        <p className="mt-1 text-[13px] text-slate-500">
          {category}
        </p>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <Star
            size={14}
            fill="currentColor"
            className="text-amber-400"
          />

          <span className="text-[13px] font-medium text-slate-600">
            {rating}
          </span>

          <span className="text-[12px] text-slate-400">
            ({reviews})
          </span>
        </div>

      </div>
    </Link>
  );
};

export default StoreCard;