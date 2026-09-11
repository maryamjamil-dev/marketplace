import { Link } from "react-router-dom";
import {
  UserPlus,
  PackagePlus,
  Megaphone,
  TrendingUp,
  Store,
  Boxes,
  Settings,
  Headphones,
  ShoppingCart,
} from "lucide-react";

import Footer from "../../components/common/Footer";
import readyToStartImg from "../../assets/images/ready-to-start.png";
import heroImg from "../../assets/images/hero-seller.png"

const SellerHome = () => {
  return (
    <>
      {/* ==================== SELLER NAVBAR ==================== */}
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[62px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 text-[20px] font-bold tracking-[-0.02em] text-[#172D55]"
          >
            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-[6px] bg-[#233D91] text-white">
              <ShoppingCart size={17} strokeWidth={2.5} />
            </span>

            <span>ShopHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">

            <Link
              to="/"
              className="text-[14px] font-medium text-slate-600 transition-colors hover:text-[#4B50D8]"
            >
              Home
            </Link>

            <Link
              to="/stores"
              className="text-[14px] font-medium text-slate-600 transition-colors hover:text-[#4B50D8]"
            >
              Stores
            </Link>

            <Link
              to="/products"
              className="text-[14px] font-medium text-slate-600 transition-colors hover:text-[#4B50D8]"
            >
              Categories
            </Link>

            <Link
              to="#extensions"
              className="text-[14px] font-medium text-slate-600 transition-colors hover:text-[#4B50D8]"
            >
              Extensions
            </Link>

            <Link
              to="#pricing"
              className="text-[14px] font-medium text-slate-600 transition-colors hover:text-[#4B50D8]"
            >
              Pricing
            </Link>

          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">

            <Link
              to="/login"
              className="
                hidden
                px-3
                py-2
                text-[14px]
                font-semibold
                text-[#172D55]
                transition-colors
                hover:text-[#4B50D8]
                sm:block
              "
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="
                rounded-md
                bg-[#4B50D8]
                px-4
                py-2
                text-[14px]
                font-semibold
                text-white
                transition-colors
                hover:bg-[#3940C5]
              "
            >
              Sign Up
            </Link>

          </div>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="w-full bg-[#F8F9FC]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6 lg:px-10">

          <div
            className="
              relative
              min-h-[400px]
              overflow-hidden
              rounded-lg
              border
              border-[#E3E7F5]
              bg-[#EEF1FF]
              bg-cover
              bg-center
              bg-no-repeat
            "
            style={{
              backgroundImage: `url(${heroImg})`,
            }}
          >

            {/* Left Side Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#EEF1FF]
                via-[#EEF1FF]/90
                to-transparent
              "
            />

            {/* Hero Text */}
            <div
              className="
                relative
                z-10
                flex
                min-h-[400px]
                w-full
                items-center
                px-6
                py-10
                sm:w-[60%]
                sm:px-8
                lg:w-[55%]
                lg:px-12
              "
            >
              <div className="max-w-[500px]">

                {/* Badge */}
                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-[#D5D9FF]
                    bg-white
                    px-4
                    py-1.5
                    text-[14px]
                    font-semibold
                    text-[#4B50D8]
                    shadow-sm
                  "
                >
                  For Small Businesses
                </span>

                {/* Heading */}
                <h1
                  className="
                    mt-4
                    text-[30px]
                    font-bold
                    leading-[1.08]
                    text-[#172D55]
                    sm:text-[38px]
                    lg:text-[46px]
                  "
                >
                  Start Your Online Store
                  <br />
                  Today
                </h1>

                {/* Description */}
                <p
                  className="
                    mt-4
                    max-w-[420px]
                    text-[14px]
                    leading-relaxed
                    text-[#53627C]
                    sm:text-[15px]
                  "
                >
                  Sell your products, reach more customers, and grow your
                  business with ShopHub.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">

                  <Link
                    to="/seller/create-store"
                    className="
                      rounded-full
                      bg-[#4B50D8]
                      px-6
                      py-3
                      text-[14px]
                      font-semibold
                      text-white
                      shadow-sm
                      transition-all
                      hover:bg-[#3940C5]
                      hover:shadow-md
                    "
                  >
                    Create Your Store
                  </Link>

                  <Link
                    to="#how-it-works"
                    className="
                      rounded-full
                      border
                      border-slate-300
                      bg-white
                      px-6
                      py-3
                      text-[14px]
                      font-semibold
                      text-[#172D55]
                      transition-all
                      hover:border-[#4B50D8]
                      hover:text-[#4B50D8]
                    "
                  >
                    Learn More
                  </Link>

                </div>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B9C0D5]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#4B50D8]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#B9C0D5]" />
            </div>

          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section
        id="how-it-works"
        className="w-full bg-white"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">

          <h2 className="text-[18px] font-bold text-[#172D55]">
            How It Works
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <HowItWorksCard
              icon={<UserPlus size={20} />}
              title="Create Account"
              description="Sign up as a seller and set up your store."
            />

            <HowItWorksCard
              icon={<PackagePlus size={20} />}
              title="Add Products"
              description="Upload your products and set your prices."
            />

            <HowItWorksCard
              icon={<Megaphone size={20} />}
              title="Start Selling"
              description="Share your store link and get orders."
            />

            <HowItWorksCard
              icon={<TrendingUp size={20} />}
              title="Grow Your Business"
              description="Use extensions and tools to scale faster."
            />

          </div>
        </div>
      </section>

      {/* ==================== SELLER BENEFITS ==================== */}
      <section
        id="benefits"
        className="w-full bg-[#F8F9FC]"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">

          <h2 className="text-[18px] font-bold text-[#172D55]">
            Seller Benefits
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <BenefitCard
              icon={<Store size={21} />}
              title="Free Store Setup"
              description="Get your online store up and running in minutes."
              iconBg="bg-[#EEF1FF]"
              iconColor="text-[#4B50D8]"
            />

            <BenefitCard
              icon={<Boxes size={21} />}
              title="5 Products Free"
              description="Start with 5 products on the free plan."
              iconBg="bg-emerald-50"
              iconColor="text-emerald-600"
            />

            <BenefitCard
              icon={<Settings size={21} />}
              title="Easy Management"
              description="Manage orders, products and customers."
              iconBg="bg-sky-50"
              iconColor="text-sky-600"
            />

            <BenefitCard
              icon={<Headphones size={21} />}
              title="Marketing Support"
              description="Get discovered on our marketplace and social media."
              iconBg="bg-orange-50"
              iconColor="text-orange-500"
            />

          </div>
        </div>
      </section>

      {/* ==================== READY TO START ==================== */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-5 sm:px-6 lg:px-10">

          <div className="relative overflow-hidden rounded-lg border border-[#E3E7F5] bg-[#EEF1FF]">

            <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr]">

              {/* Text */}
              <div className="px-6 py-7 sm:px-9">

                <h2 className="text-[20px] font-bold text-[#172D55]">
                  Ready to Start?
                </h2>

                <p className="mt-1.5 max-w-[340px] text-[14px] leading-relaxed text-[#53627C]">
                  Join thousands of sellers and grow your business online.
                </p>

                <Link
                  to="/seller/create-store"
                  className="
                    mt-4
                    inline-flex
                    items-center
                    rounded-full
                    bg-[#4B50D8]
                    px-5
                    py-2.5
                    text-[14px]
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-[#3940C5]
                    hover:shadow-md
                  "
                >
                  Create Your Store
                </Link>

              </div>

              {/* Photo */}
              <div className="relative hidden min-h-[180px] sm:block">
                <img
                  src={readyToStartImg}
                  alt="Seller packing orders"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </>
  );
};


/* ==================== HOW IT WORKS CARD ==================== */

const HowItWorksCard = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="relative flex flex-col items-center text-center">

      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-3 text-[14px] font-bold text-[#172D55]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-1 max-w-[190px] text-[14px] leading-relaxed text-slate-500">
        {description}
      </p>

    </div>
  );
};


/* ==================== BENEFIT CARD ==================== */

const BenefitCard = ({
  icon,
  title,
  description,
  iconBg = "bg-[#EEF1FF]",
  iconColor = "text-[#4B50D8]",
}) => {
  return (
    <div className="rounded-md border border-slate-200 bg-white px-4 py-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">

      {/* Icon */}
      <div
        className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-3 text-[14px] font-bold text-[#172D55]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-1.5 text-[14px] leading-relaxed text-slate-500">
        {description}
      </p>

    </div>
  );
};

export default SellerHome;