const StatsCard = ({
  title,
  value,
  icon,
  change,
  changeType = "positive",
}) => {
  return (
    <div
      className="
        rounded-lg
        border
        border-slate-200
        bg-white
        p-5
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between">

        {/* Text */}
        <div>
          <p className="text-[14px] font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-[24px] font-bold text-[#172D55]">
            {value}
          </h3>
        </div>

        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
          {icon}
        </div>
      </div>

      {/* Bottom */}
      {change && (
        <div className="mt-4 flex items-center gap-2">
          <span
            className={`
              text-[14px]
              font-semibold
              ${
                changeType === "positive"
                  ? "text-emerald-600"
                  : "text-red-500"
              }
            `}
          >
            {change}
          </span>

          <span className="text-[14px] text-slate-400">
            vs last month
          </span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;