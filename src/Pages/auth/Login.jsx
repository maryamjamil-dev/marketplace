import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Eye,
  EyeOff,
  Check,
  Store,
  CreditCard,
  Headphones,
  Globe2,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("buyer");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
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

    // Frontend demo login
    if (userType === "seller") {
      navigate("/seller/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] px-4 py-6 sm:px-6 lg:px-8">
      {/* Main Login Card */}
      <div className="mx-auto w-full max-w-[1080px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="grid min-h-[570px] grid-cols-1 lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col px-6 py-7 sm:px-10 lg:px-12">
            {/* Logo */}
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

            {/* Form Area */}
            <div className="mx-auto mt-10 w-full max-w-[390px]">
              <div>
                <h1 className="text-[24px] font-bold text-[#172D55]">
                  Welcome Back
                </h1>

                <p className="mt-1 text-[13px] text-slate-500">
                  Login to your account to continue.
                </p>
              </div>

              {/* Buyer / Seller Tabs */}
              <div className="mt-6 flex rounded-md bg-[#F8F9FC] p-1">
                <button
                  type="button"
                  onClick={() => setUserType("buyer")}
                  className={`flex-1 rounded px-4 py-2 text-[13px] font-semibold transition-all ${
                    userType === "buyer"
                      ? "bg-[#EEF1FF] text-[#4B50D8] shadow-sm"
                      : "text-slate-500 hover:text-[#4B50D8]"
                  }`}
                >
                  Buyer
                </button>

                <button
                  type="button"
                  onClick={() => setUserType("seller")}
                  className={`flex-1 rounded px-4 py-2 text-[13px] font-semibold transition-all ${
                    userType === "seller"
                      ? "bg-[#EEF1FF] text-[#4B50D8] shadow-sm"
                      : "text-slate-500 hover:text-[#4B50D8]"
                  }`}
                >
                  Seller
                </button>
              </div>

              {/* Login Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[13px] font-medium text-[#172D55]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="h-11 w-full rounded-md border border-slate-200 bg-white px-3.5 text-[13px] text-[#172D55] outline-none transition-all placeholder:text-slate-400 focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1.5 block text-[13px] font-medium text-[#172D55]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      className="h-11 w-full rounded-md border border-slate-200 bg-white px-3.5 pr-11 text-[13px] text-[#172D55] outline-none transition-all placeholder:text-slate-400 focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-[#4B50D8]"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between gap-3">
                  <label className="flex cursor-pointer items-center gap-2 text-[12px] text-slate-500">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="h-3.5 w-3.5 rounded border-slate-300 accent-[#4B50D8]"
                    />

                    Remember me
                  </label>

                  <button
                    type="button"
                    className="text-[12px] font-medium text-[#4B50D8] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center rounded-md bg-[#4B50D8] text-[13px] font-semibold text-white transition-colors hover:bg-[#3940C5]"
                >
                  Login
                </button>
              </form>

              {/* Signup */}
              <p className="mt-5 text-center text-[12px] text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-[#4B50D8] hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative hidden overflow-hidden bg-[#F0F2FF] lg:flex lg:flex-col lg:items-center lg:justify-center px-10">
            {/* Decorative Circles */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E2E5FF]" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#E2E5FF]" />

            <div className="relative z-10 w-full max-w-[390px] text-center">
              <h2 className="text-[25px] font-bold leading-tight text-[#172D55]">
                Your Store.
                <br />
                Your Rules.
              </h2>

              <p className="mx-auto mt-3 max-w-[300px] text-[13px] leading-5 text-slate-500">
                Sell anything, to anyone, anywhere
                with ShopHub.
              </p>

              {/* Illustration */}
              <div className="relative mx-auto mt-8 flex h-[220px] w-[280px] items-center justify-center">
                {/* Main Device */}
                <div className="relative h-[155px] w-[205px] rounded-[18px] border-[7px] border-[#D9DDFF] bg-white shadow-md">
                  {/* Screen */}
                  <div className="absolute inset-[7px] rounded-[10px] bg-[#F8F9FC]">
                    <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
                      <div className="h-2 w-12 rounded-full bg-[#4B50D8]" />
                      <div className="h-5 w-5 rounded-full bg-[#EEF1FF]" />
                    </div>

                    <div className="grid grid-cols-3 gap-2 p-3">
                      <div className="h-16 rounded-md bg-[#EEF1FF]" />
                      <div className="h-16 rounded-md bg-[#E7F0FF]" />
                      <div className="h-16 rounded-md bg-[#F0EAFF]" />
                    </div>

                    <div className="mx-3 h-2 rounded-full bg-slate-200" />
                    <div className="mx-3 mt-2 h-2 w-2/3 rounded-full bg-slate-100" />
                  </div>
                </div>

                {/* Phone */}
                <div className="absolute bottom-0 left-[22px] h-[115px] w-[58px] rounded-[10px] border-[5px] border-[#C9CEFA] bg-white shadow-md">
                  <div className="mt-3 h-[82px] rounded-[4px] bg-[#EEF1FF] p-2">
                    <div className="h-2 w-7 rounded-full bg-[#4B50D8]" />
                    <div className="mt-3 h-8 rounded bg-white" />
                    <div className="mt-2 h-2 w-8 rounded-full bg-slate-200" />
                  </div>
                </div>

                {/* Shopping Bag */}
                <div className="absolute bottom-2 right-[28px] flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[#4B50D8] shadow-md">
                  <ShoppingCart
                    size={27}
                    className="text-white"
                  />
                </div>

                {/* Floating Icons */}
                <div className="absolute left-[8px] top-[18px] flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4B50D8] shadow-sm">
                  <Store size={18} />
                </div>

                <div className="absolute right-[5px] top-[30px] flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4B50D8] shadow-sm">
                  <CreditCard size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BENEFITS ================= */}
        <div className="border-t border-slate-200 bg-white px-5 py-5 sm:px-8">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {/* Benefit 1 */}
            <div className="flex items-center gap-3 md:justify-center">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                <Store size={16} />
              </div>

              <div>
                <h3 className="text-[12px] font-semibold text-[#172D55]">
                  Free Store Setup
                </h3>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Get started in minutes
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center gap-3 md:justify-center">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                <CreditCard size={16} />
              </div>

              <div>
                <h3 className="text-[12px] font-semibold text-[#172D55]">
                  Secure Payments
                </h3>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Multiple payment options
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center gap-3 md:justify-center">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                <Headphones size={16} />
              </div>

              <div>
                <h3 className="text-[12px] font-semibold text-[#172D55]">
                  24/7 Support
                </h3>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  We're here to help
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-center gap-3 md:justify-center">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                <Globe2 size={16} />
              </div>

              <div>
                <h3 className="text-[12px] font-semibold text-[#172D55]">
                  Global Shopping
                </h3>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Shopping made easy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mx-auto mt-4 flex max-w-[1080px] items-center justify-between px-1 text-[10px] text-slate-400">
        <span>© 2025 ShopHub. All rights reserved.</span>

        <div className="flex gap-4">
          <button
            type="button"
            className="hover:text-[#4B50D8]"
          >
            Privacy Policy
          </button>

          <button
            type="button"
            className="hover:text-[#4B50D8]"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;