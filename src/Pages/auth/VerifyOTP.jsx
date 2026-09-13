import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "your email";

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((current) => current - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pastedValue = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pastedValue) return;

    const updatedOtp = [...otp];

    pastedValue.split("").forEach((digit, index) => {
      updatedOtp[index] = digit;
    });

    setOtp(updatedOtp);

    const nextIndex = Math.min(
      pastedValue.length,
      5
    );

    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length !== 6) {
      return;
    }

    // Frontend demo
    navigate("/reset-password", {
      state: {
        email: email,
      },
    });
  };

  const handleResend = () => {
    setTimer(60);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
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
          to="/forgot-password"
          className="group mb-5 inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] font-medium text-slate-500 transition-all duration-300 hover:bg-white hover:text-[#4B50D8] hover:shadow-sm"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back
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

          <div className="mt-5 text-center">
            <h1 className="text-[24px] font-bold text-[#172D55]">
              Verify Your Email
            </h1>

            <p className="mx-auto mt-2 max-w-[350px] text-[13px] leading-5 text-slate-500">
              Enter the 6-digit verification code sent to
            </p>

            <p className="mt-1 break-all text-[12px] font-semibold text-[#4B50D8]">
              {email}
            </p>
          </div>

          {/* OTP Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-7"
          >
            <div className="flex justify-center gap-2 sm:gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleChange(index, e.target.value)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(index, e)
                  }
                  onPaste={handlePaste}
                  className="h-11 w-10 rounded-md border border-slate-200 bg-white text-center text-[18px] font-semibold text-[#172D55] outline-none transition-all duration-300 focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF] sm:h-12 sm:w-12"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={otp.join("").length !== 6}
              className="mt-6 flex h-11 w-full items-center justify-center rounded-md bg-[#4B50D8] text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#3940C5] hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Verify Code
            </button>
          </form>

          {/* Resend */}
          <div className="mt-5 text-center text-[12px] text-slate-500">
            Didn't receive the code?{" "}

            {timer > 0 ? (
              <span className="font-medium text-slate-400">
                Resend in {timer}s
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="font-semibold text-[#4B50D8] hover:underline"
              >
                Resend Code
              </button>
            )}
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] text-slate-400">
          © 2025 ShopHub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;