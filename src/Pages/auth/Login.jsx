import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
   ShoppingCart,
  Eye,
  EyeOff,
  Store,
  CreditCard,
  Headphones,
  Globe2,
  ArrowLeft,
  Apple,
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

    if (userType === "seller") {
      navigate("/seller/dashboard");
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

      {/* Main Login Card */}
      <div className="mx-auto w-full max-w-[1080px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
        <div className="grid min-h-[570px] grid-cols-1 lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col px-5 py-7 sm:px-10 lg:px-12">
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

            {/* Form */}
            <div className="mx-auto mt-10 w-full max-w-[390px]">
              <h1 className="text-[24px] font-bold text-[#172D55]">
                Welcome Back
              </h1>

              <p className="mt-1 text-[13px] text-slate-500">
                Login to your account to continue.
              </p>

              {/* Buyer / Seller */}
              <div className="mt-6 flex rounded-md bg-[#F8F9FC] p-1">
                <button
                  type="button"
                  onClick={() => setUserType("buyer")}
                  className={`flex-1 rounded px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
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
                  className={`flex-1 rounded px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                    userType === "seller"
                      ? "bg-[#EEF1FF] text-[#4B50D8] shadow-sm"
                      : "text-slate-500 hover:text-[#4B50D8]"
                  }`}
                >
                  Seller
                </button>
              </div>

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
                    className="h-11 w-full rounded-md border border-slate-200 bg-white px-3.5 text-[13px] text-[#172D55] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
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
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      className="h-11 w-full rounded-md border border-slate-200 bg-white px-3.5 pr-11 text-[13px] text-[#172D55] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-300 hover:text-[#4B50D8]"
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
                      className="h-3.5 w-3.5 accent-[#4B50D8]"
                    />

                    Remember me
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-[12px] font-medium text-[#4B50D8] transition-colors hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Login */}
                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center rounded-md bg-[#4B50D8] text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#3940C5] hover:shadow-md active:scale-[0.98]"
                >
                  Login
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
          <div className="relative hidden overflow-hidden bg-[#F0F2FF] px-10 lg:flex lg:flex-col lg:items-center lg:justify-center">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E2E5FF]" />

            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#E2E5FF]" />

            <div className="relative z-10 w-full max-w-[390px] text-center">
              <h2 className="text-[25px] font-bold leading-tight text-[#172D55]">
                Your Store.
                <br />
                Your Rules.
              </h2>

              <p className="mx-auto mt-3 max-w-[300px] text-[13px] leading-5 text-slate-500">
                Sell anything, to anyone, anywhere with ShopHub.
              </p>

              {/* Illustration */}
              <div className="relative mx-auto mt-8 flex h-[220px] w-[280px] items-center justify-center">
                <div className="relative h-[155px] w-[205px] rounded-[18px] border-[7px] border-[#D9DDFF] bg-white shadow-md">
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

                <div className="absolute bottom-0 left-[22px] h-[115px] w-[58px] rounded-[10px] border-[5px] border-[#C9CEFA] bg-white shadow-md">
                  <div className="mt-3 h-[82px] rounded-[4px] bg-[#EEF1FF] p-2">
                    <div className="h-2 w-7 rounded-full bg-[#4B50D8]" />
                    <div className="mt-3 h-8 rounded bg-white" />
                    <div className="mt-2 h-2 w-8 rounded-full bg-slate-200" />
                  </div>
                </div>

                <div className="absolute bottom-2 right-[28px] flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[#4B50D8] shadow-md">
                  <ShoppingCart
                    size={27}
                    className="text-white"
                  />
                </div>

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

        {/* Benefits */}
        <div className="border-t border-slate-200 bg-white px-5 py-5 sm:px-8">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
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

      {/* Footer */}
      <div className="mx-auto mt-4 flex max-w-[1080px] flex-col items-center justify-between gap-2 px-1 text-[10px] text-slate-400 sm:flex-row">
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