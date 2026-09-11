import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";
import dealShoes from "../../assets/images/deal-shoes.png";

const DealBanner = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6 lg:px-10">

        {/* Deal Banner */}
        <div
          className="
            relative
            h-[220px]
            w-full
            overflow-hidden
            rounded-2xl
            bg-[#FDE9DC]
            shadow-[0_8px_30px_rgba(23,45,85,0.08)]
            sm:h-[260px]
            lg:h-[320px]
          "
        >

          {/* Background Image */}
          <img
            src={dealShoes}
            alt="Deal shoes"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-center
              
              object-[70%_bottom]
            "
          />

          {/* Gradient overlay for text readability */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#1A1206]/90
              via-[#1A1206]/55
              to-transparent
              sm:from-[#1A1206]/85
              sm:via-[#1A1206]/40
              sm:to-transparent
            "
          />

          {/* LEFT SIDE TEXT */}
          <div
            className="
              relative
              z-10
              flex
              h-full
              w-[80%]
              flex-col
              justify-center
              px-6
              sm:w-[58%]
              sm:px-10
              lg:w-[48%]
              lg:px-14
            "
          >

            <span
              className="
                mb-3
                inline-flex
                w-fit
                items-center
                gap-1.5
                rounded-full
                bg-white/15
                px-3
                py-1
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-white
                backdrop-blur-sm
                ring-1
                ring-white/25
              "
            >
              <Sparkles size={11} className="text-[#FFD08A]" />
              Limited Time Offer
            </span>

            <h2
              className="
                text-[26px]
                font-bold
                leading-[1.15]
                tracking-[-0.01em]
                text-white
                sm:text-[32px]
                lg:text-[38px]
              "
            >
              Big Deals,
              <br />
              Bigger Smiles
            </h2>

            <p
              className="
                mt-3
                max-w-[300px]
                text-[12px]
                leading-relaxed
                text-white/80
                sm:text-[13px]
              "
            >
              Get up to 50% off on selected footwear from top brands.
            </p>

            <Link
              to="/products?deal=true"
              className="
                mt-6
                flex
                w-fit
                items-center
                gap-1.5
                rounded-full
                bg-white
                px-6
                py-2.5
                text-[12px]
                font-semibold
                text-[#172D55]
                transition-all
                duration-200
                hover:bg-[#4B50D8]
                hover:text-white
                hover:shadow-lg
              "
            >
              Shop Now
              <ChevronRight size={13} />
            </Link>

          </div>

          {/* Discount Badge */}
          <div
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-[56px]
              w-[56px]
              flex-col
              items-center
              justify-center
              rounded-full
              bg-[#4B50D8]
              text-white
              shadow-lg
              sm:h-[68px]
              sm:w-[68px]
              lg:right-8
              lg:top-8
            "
          >
            <span className="text-[15px] font-bold leading-none sm:text-[18px]">50%</span>
            <span className="text-[8px] font-medium uppercase tracking-wide sm:text-[9px]">Off</span>
          </div>

          {/* Slider Dots */}
          <div
            className="
              absolute
              bottom-4
              left-1/2
              z-20
              flex
              -translate-x-1/2
              items-center
              gap-1.5
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            <span className="h-1.5 w-6 rounded-full bg-white" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DealBanner;