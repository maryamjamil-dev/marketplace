import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Mail,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo
    navigate("/verify-otp", {
      state: {
        email: email,
      },
    });
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#F8F9FC] px-4 py-6 sm:px-6"
      style={{
        paddingTop: "max(24px, env(safe-area-inset-top))",
        paddingBottom: "max(24px, env(safe-area-inset-bottom))",
      }}
    >
      <div className="w-full max-w-[470px]">
        {/* Back */}
        <Link
          to="/login"
          className="group mb-5 inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] font-medium text-slate-500 transition-all duration-300 hover:bg-white hover:text-[#4B50D8] hover:shadow-sm"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Login
        </Link>

        {/* Card */}
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-8 shadow-sm transition-shadow duration-300 hover:shadow-md sm:px-10 sm:py-10">
          {/* Logo */}
          <Link
            to="/"
            className="mx-auto flex w-fit items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#EEF1FF] text-[#4B50D8]">
              <ShoppingCart size={18} />
            </div>

            <span className="text-[19px] font-bold text-[#172D55]">
              ShopHub
            </span>
          </Link>

          {/* Icon */}
          <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
            <ShieldCheck size={27} />
          </div>

          {/* Heading */}
          <div className="mt-5 text-center">
            <h1 className="text-[24px] font-bold text-[#172D55]">
              Forgot Password?
            </h1>

            <p className="mx-auto mt-2 max-w-[340px] text-[13px] leading-5 text-slate-500">
              Enter your email address and we'll send you a verification
              code to reset your password.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-4"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-[13px] font-medium text-[#172D55]"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="h-11 w-full rounded-md border border-slate-200 bg-white pl-10 pr-3 text-[13px] text-[#172D55] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex h-11 w-full items-center justify-center rounded-md bg-[#4B50D8] text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#3940C5] hover:shadow-md active:scale-[0.98]"
            >
              Send Verification Code
            </button>
          </form>

          <p className="mt-5 text-center text-[12px] text-slate-500">
            Remember your password?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#4B50D8] hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

        <p className="mt-4 text-center text-[10px] text-slate-400">
          © 2025 ShopHub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;