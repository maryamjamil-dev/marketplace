import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Store,
  Package,
  BadgePercent,
  Zap,
  CheckCircle2,
  ArrowLeft,
  Apple,
} from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("seller");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    storeName: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userType === "seller") {
      navigate("/seller/create-store");
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="min-h-screen bg-[#F8F9FC] px-4 py-5 sm:px-6 lg:px-8"
      style={{
        paddingTop: "max(20px, env(safe-area-inset-top))",
        paddingBottom: "max(20px, env(safe-area-inset-bottom))",
      }}
    >
      {/* Back To Home */}
      <div className="mx-auto mb-4 w-full max-w-[1080px]">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] font-medium text-slate-500 transition-all duration-300 hover:bg-white hover:text-[#4B50D8] hover:shadow-sm"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Home
        </Link>
      </div>

      {/* Main Signup Card */}
      <div className="mx-auto w-full max-w-[1080px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
        <div className="grid min-h-[650px] grid-cols-1 lg:grid-cols-[42%_58%]">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative hidden overflow-hidden bg-[#F0F2FF] px-10 py-10 lg:flex lg:flex-col">
            {/* Decorative Background */}
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#E1E5FF]" />
            <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-[#E1E5FF]" />
            <div className="absolute -right-20 bottom-20 h-36 w-36 rounded-full bg-[#E7E9FF]" />

            <div className="relative z-10">
              {/* Logo */}
              <Link
                to="/"
                className="group flex w-fit items-center gap-2"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#4B50D8] shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <ShoppingCart size={17} />
                </div>

                <span className="text-[18px] font-bold text-[#172D55]">
                  ShopHub
                </span>
              </Link>

              {/* Heading */}
              <div className="mt-12">
                <h1 className="text-[25px] font-bold leading-tight text-[#172D55]">
                  Create Your Account
                </h1>

                <p className="mt-2 max-w-[280px] text-[13px] leading-5 text-slate-500">
                  Join our community and grow your online journey.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-9 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#4B50D8] shadow-sm">
                    <Store size={16} />
                  </div>

                  <p className="text-[13px] font-semibold text-[#172D55]">
                    Shop from trusted stores
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#4B50D8] shadow-sm">
                    <Package size={16} />
                  </div>

                  <p className="text-[13px] font-semibold text-[#172D55]">
                    Sell your products
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#4B50D8] shadow-sm">
                    <BadgePercent size={16} />
                  </div>

                  <p className="text-[13px] font-semibold text-[#172D55]">
                    Get exclusive deals
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#4B50D8] shadow-sm">
                    <Zap size={16} />
                  </div>

                  <p className="text-[13px] font-semibold text-[#172D55]">
                    Fast & secure checkout
                  </p>
                </div>
              </div>

              {/* Illustration */}
              <div className="relative mx-auto mt-10 h-[175px] w-[250px]">
                <div className="absolute bottom-5 left-4 h-20 w-20 rotate-[-8deg] rounded-lg bg-[#D9DDFD] shadow-sm" />

                <div className="absolute bottom-2 left-1/2 flex h-[105px] w-[125px] -translate-x-1/2 items-center justify-center rounded-xl bg-white shadow-md">
                  <div className="absolute -top-5 h-8 w-14 rounded-t-full border-[5px] border-b-0 border-[#4B50D8]" />

                  <ShoppingCart
                    size={38}
                    className="text-[#4B50D8]"
                  />
                </div>

                <div className="absolute bottom-1 right-4 h-14 w-14 rotate-[8deg] rounded-lg bg-[#4B50D8] shadow-sm">
                  <div className="flex h-full items-center justify-center">
                    <Package
                      size={24}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="absolute right-7 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-500 shadow-md">
                  <CheckCircle2 size={19} />
                </div>

                <div className="absolute left-2 top-12 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#4B50D8] shadow-md">
                  <Store size={17} />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col px-5 py-7 sm:px-10 lg:px-12">
            {/* Mobile Logo */}
            <div className="lg:hidden">
              <Link
                to="/"
                className="flex w-fit items-center gap-2"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#EEF1FF] text-[#4B50D8]">
                  <ShoppingCart size={17} />
                </div>

                <span className="text-[18px] font-bold text-[#172D55]">
                  ShopHub
                </span>
              </Link>
            </div>

            <div className="mx-auto mt-7 w-full max-w-[410px] lg:mt-4">
              <h2 className="text-[22px] font-bold text-[#172D55]">
                Create {userType === "seller" ? "Seller" : "Buyer"} Account
              </h2>

              <p className="mt-1 text-[13px] text-slate-500">
                Join ShopHub and start your journey today.
              </p>

              {/* Buyer / Seller Tabs */}
              <div className="mt-5 flex rounded-md border border-slate-200 bg-[#F8F9FC] p-1">
                <button
                  type="button"
                  onClick={() => setUserType("buyer")}
                  className={`flex-1 rounded py-2 text-[12px] font-semibold transition-all duration-300 ${userType === "buyer"
                      ? "bg-white text-[#4B50D8] shadow-sm"
                      : "text-slate-500 hover:text-[#4B50D8]"
                    }`}
                >
                  Buyer
                </button>

                <button
                  type="button"
                  onClick={() => setUserType("seller")}
                  className={`flex-1 rounded py-2 text-[12px] font-semibold transition-all duration-300 ${userType === "seller"
                      ? "bg-white text-[#4B50D8] shadow-sm"
                      : "text-slate-500 hover:text-[#4B50D8]"
                    }`}
                >
                  Seller
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-5 space-y-3.5"
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1.5 block text-[12px] font-medium text-[#172D55]"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="h-10 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-[12px] text-[#172D55] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[12px] font-medium text-[#172D55]"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="h-10 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-[12px] text-[#172D55] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1.5 block text-[12px] font-medium text-[#172D55]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      required
                      minLength={6}
                      className="h-10 w-full rounded-md border border-slate-200 bg-white pl-9 pr-10 text-[12px] text-[#172D55] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-300 hover:text-[#4B50D8]"
                    >
                      {showPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Store Name */}
                {userType === "seller" && (
                  <div>
                    <label
                      htmlFor="storeName"
                      className="mb-1.5 block text-[12px] font-medium text-[#172D55]"
                    >
                      Store Name
                    </label>

                    <div className="relative">
                      <Store
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="storeName"
                        type="text"
                        name="storeName"
                        value={formData.storeName}
                        onChange={handleChange}
                        placeholder="Enter your store name"
                        required
                        className="h-10 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-[12px] text-[#172D55] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                      />
                    </div>
                  </div>
                )}

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#4B50D8]"
                  />

                  <span className="text-[11px] leading-4 text-slate-500">
                    I agree to ShopHub's{" "}
                    <button
                      type="button"
                      className="font-medium text-[#4B50D8] hover:underline"
                    >
                      Terms & Conditions
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="font-medium text-[#4B50D8] hover:underline"
                    >
                      Privacy Policy
                    </button>
                  </span>
                </label>

                {/* Create Account */}
                <button
                  type="submit"
                  className="flex h-10 w-full items-center justify-center rounded-md bg-[#4B50D8] text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#3940C5] hover:shadow-md active:scale-[0.98]"
                >
                  Create Account
                </button>
              </form>
              {/* Social Login Divider */}
              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-[11px] text-slate-400">
                  OR CONTINUE WITH
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Google + Apple */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* Google */}
                <button
                  type="button"
                  onClick={() => {
                    // Google authentication will be connected later
                  }}
                  className="flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white text-[12px] font-semibold text-[#172D55] transition-all duration-300 hover:border-[#4B50D8] hover:bg-[#F8F9FC] hover:shadow-sm active:scale-[0.98]"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.805 10.023H21V10H12V14H17.651C16.827 16.329 14.612 18 12 18C8.686 18 6 15.314 6 12C6 8.686 8.686 6 12 6C13.529 6 14.925 6.577 15.985 7.515L18.813 4.687C17.026 3.022 14.635 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 11.329 21.931 10.675 21.805 10.023Z"
                      fill="#FFC107"
                    />

                    <path
                      d="M3.153 7.345L6.438 9.755C7.327 7.554 9.482 6 12 6C13.529 6 14.925 6.577 15.985 7.515L18.813 4.687C17.026 3.022 14.635 2 12 2C8.159 2 4.828 4.17 3.153 7.345Z"
                      fill="#FF3D00"
                    />

                    <path
                      d="M12 22C14.583 22 16.932 21.011 18.704 19.404L15.608 16.785C14.604 17.54 13.35 18 12 18C9.399 18 7.193 16.343 6.36 14.03L3.1 16.546C4.754 19.787 8.117 22 12 22Z"
                      fill="#4CAF50"
                    />

                    <path
                      d="M21.805 10.023H21V10H12V14H17.651C17.255 15.118 16.549 16.083 15.608 16.785L18.704 19.404C18.484 19.604 22 17 22 12C22 11.329 21.931 10.675 21.805 10.023Z"
                      fill="#1976D2"
                    />
                  </svg>
                  Continue with Google
                </button>

                {/* Apple */}
                <button
                  type="button"
                  onClick={() => {
                    // Apple authentication will be connected later
                  }}
                  className="flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white text-[12px] font-semibold text-[#172D55] transition-all duration-300 hover:border-[#4B50D8] hover:bg-[#F8F9FC] hover:shadow-sm active:scale-[0.98]"
                >
                  <Apple size={17} />

                  Continue with Apple
                </button>
              </div>

              {/* Login */}
              <p className="mt-4 text-center text-[12px] text-slate-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-[#4B50D8] hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-4 flex max-w-[1080px] flex-col items-center justify-between gap-2 px-1 text-[10px] text-slate-400 sm:flex-row">
        <span>© 2025 ShopHub. All rights reserved.</span>

        <div className="flex gap-4">
          <button
            type="button"
            className="transition-colors hover:text-[#4B50D8]"
          >
            Privacy Policy
          </button>

          <button
            type="button"
            className="transition-colors hover:text-[#4B50D8]"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;