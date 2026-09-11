import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#172D55] text-white">

      {/* Main Footer */}
      <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white">
                <ShoppingCart
                  size={18}
                  strokeWidth={2.5}
                  className="text-[#233D91]"
                />
              </div>

              <span className="text-[18px] font-bold">
                ShopHub
              </span>
            </Link>

            <p className="mt-3 max-w-[220px] text-[13px] leading-relaxed text-slate-300">
              Your online store for everything you need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[14px] font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                to="/"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/stores"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Stores
              </Link>

              <Link
                to="/products"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Categories
              </Link>

              <Link
                to="/about"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* For Shoppers */}
          <div>
            <h3 className="text-[14px] font-semibold text-white">
              For Shoppers
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                to="/profile"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                My Account
              </Link>

              <Link
                to="/orders"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Orders
              </Link>

              <Link
                to="/wishlist"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Wishlist
              </Link>

              <Link
                to="/support"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Help & Support
              </Link>
            </div>
          </div>

          {/* For Sellers */}
          <div>
            <h3 className="text-[14px] font-semibold text-white">
              For Sellers
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                to="/seller"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Become a Seller
              </Link>

              <Link
                to="/seller/dashboard"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Seller Guide
              </Link>

              <Link
                to="/seller/dashboard"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Dashboard
              </Link>

              <Link
                to="/pricing"
                className="text-[13px] text-slate-300 transition-colors hover:text-white"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[14px] font-semibold text-white">
              Subscribe to our newsletter
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-10
                  w-full
                  rounded-md
                  border
                  border-slate-500
                  bg-white/10
                  px-3
                  text-[13px]
                  text-white
                  outline-none
                  placeholder:text-slate-400
                  focus:border-[#6B70E8]
                "
              />

              <button
                type="button"
                className="
                  h-10
                  w-full
                  rounded-md
                  bg-[#4B50D8]
                  text-[13px]
                  font-semibold
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-[#3940C5]
                "
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10" />

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-3
            pt-5
            text-[12px]
            text-slate-400
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © 2025 ShopHub. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="text-slate-600">|</span>

            <Link
              to="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;