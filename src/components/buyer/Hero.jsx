import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroImage from "../../assets/images/hero.png";
import bannerImage from "../../assets/images/banner2.png";

const slides = [
  {
    id: 1,
    title: "Everything You Need",
    subtitle: "In One Place",
    description:
      "Discover amazing products from independent sellers and trusted stores.",
    buttonText: "Shop Now",
    buttonLink: "/products",
    image: heroImage,
  },
  {
    id: 2,
    title: "Discover Great Deals",
    subtitle: "From Trusted Stores",
    description:
      "Find quality products at amazing prices from sellers you can trust.",
    buttonText: "Explore Deals",
    buttonLink: "/deals",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 3,
    title: "Shop Your Favorite",
    subtitle: "Products Today",
    description:
      "Explore fashion, electronics, shoes, beauty and much more in one place.",
    buttonText: "Explore Products",
    buttonLink: "/products",
    image: bannerImage,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const previousSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10">

        {/* ================= HERO SLIDER ================= */}
        <div className="relative h-[380px] w-full overflow-hidden rounded-xl shadow-[0_8px_30px_rgba(23,45,85,0.10)] sm:h-[440px] lg:h-[500px]">

          <div className="relative h-full w-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 h-full w-full transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "translate-x-0 opacity-100"
                    : index < currentSlide
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                {/* ================= BACKGROUND IMAGE ================= */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* ================= DARK GRADIENT OVERLAY (readability for left text) ================= */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1730]/85 via-[#0B1730]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/30 via-transparent to-transparent" />

                {/* ================= LEFT CONTENT ================= */}
                <div className="relative z-10 flex h-full w-[85%] flex-col justify-center px-6 sm:w-[62%] sm:px-12 lg:w-[46%] lg:px-16">
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white ring-1 ring-white/25 backdrop-blur-sm">
                    New Arrivals
                  </span>

                  <h1 className="text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-white sm:text-[42px] lg:text-[52px]">
                    {slide.title}
                    <br />
                    {slide.subtitle}
                  </h1>

                  <p className="mt-4 max-w-[420px] text-[13px] leading-[1.7] text-white/80 sm:text-[15px] lg:text-[16px]">
                    {slide.description}
                  </p>

                  <Link
                    to={slide.buttonLink}
                    className="mt-7 inline-flex h-[42px] w-fit items-center justify-center gap-2 rounded-[6px] bg-[#4B50D8] px-8 text-[13px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#3940C5] hover:shadow-lg sm:h-[46px] sm:text-[14px]"
                  >
                    {slide.buttonText}
                    <ChevronRight size={15} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ================= LEFT ARROW ================= */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 flex h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/30 sm:left-6 sm:h-[44px] sm:w-[44px]"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>

          {/* ================= RIGHT ARROW ================= */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 flex h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/30 sm:right-6 sm:h-[44px] sm:w-[44px]"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>

          {/* ================= SLIDER DOTS ================= */}
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`h-[7px] rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-[24px] bg-white"
                    : "w-[7px] bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;