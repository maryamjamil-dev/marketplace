import { Link } from "react-router-dom";

const CategoryCard = ({ icon, name, slug }) => {
  return (
    <Link
      to={`/products?category=${slug}`}
      className="
        group
        flex
        min-w-[80px]
        flex-col
        items-center
        gap-1.5
        px-1
      "
    >
      {/* Icon Circle */}
      <div
        className="
          flex
          h-[52px]
          w-[52px]
          items-center
          justify-center
          rounded-full
          bg-[#EEF2FF]
          text-[#4F46E5]
          transition-all
          duration-200
          group-hover:bg-[#4F46E5]
          group-hover:text-white
          group-hover:shadow-md
          group-hover:-translate-y-0.5
        "
      >
        <div className="transition-transform duration-200 group-hover:scale-105">
          {icon}
        </div>
      </div>

      {/* Category Name */}
      <span
        className="
          whitespace-nowrap
          text-center
          text-[13px]
          font-medium
          text-[#1F2937]
          transition-colors
          duration-200
          group-hover:text-[#4F46E5]
        "
      >
        {name}
      </span>
    </Link>
  );
};

export default CategoryCard;