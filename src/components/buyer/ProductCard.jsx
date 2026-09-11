import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const ProductCard = ({
  id,
  name,
  category,
  image,
  price,
  rating = 4.5,
  reviews = 0,
}) => {
  return (
    <Link
      to={`/products/${id}`}
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
      {/* Product Image */}
      <div className="aspect-square w-full overflow-hidden bg-[#F8F9FC]">
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

      {/* Product Information */}
      <div className="px-3 py-2.5">

        {/* Product Name */}
        <h3
          className="
            truncate
            text-[14px]
            font-semibold
            leading-tight
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
        <p className="mt-0.5 truncate text-[12px] text-slate-500">
          {category}
        </p>

        {/* Price */}
        <p className="mt-1 text-[14px] font-bold text-[#172D55]">
          Rs. {Number(price).toLocaleString()}
        </p>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-1">
          <Star
            size={12}
            fill="currentColor"
            className="text-amber-400"
          />

          <span className="text-[12px] font-medium text-slate-600">
            {rating}
          </span>

          <span className="text-[11px] text-slate-400">
            ({reviews})
          </span>
        </div>

      </div>
    </Link>
  );
};

export default ProductCard;