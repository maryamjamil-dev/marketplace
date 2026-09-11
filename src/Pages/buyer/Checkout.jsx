import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  MapPin,
  ShieldCheck,
  Truck,
  WalletCards,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const CART_KEY = "shophub-cart";

const Checkout = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Load cart
  useEffect(() => {
    try {
      const savedCart =
        JSON.parse(localStorage.getItem(CART_KEY)) || [];

      setCartItems(savedCart);
    } catch {
      setCartItems([]);
    }
  }, []);

  // Form handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Price calculations
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total +
        Number(item.price) * Number(item.quantity || 1),
      0
    );
  }, [cartItems]);

  const shipping = subtotal > 0 ? 250 : 0;
  const total = subtotal + shipping;

  const totalItems = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + Number(item.quantity || 1),
      0
    );
  }, [cartItems]);

  // Place order
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      return;
    }

    const order = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      customer: formData,
      paymentMethod,
      subtotal,
      shipping,
      total,
      status: "Processing",
      createdAt: new Date().toISOString(),
    };

    // Save order locally for frontend demo
    const existingOrders =
      JSON.parse(localStorage.getItem("shophub-orders")) || [];

    localStorage.setItem(
      "shophub-orders",
      JSON.stringify([order, ...existingOrders])
    );

    // Empty cart
    localStorage.removeItem(CART_KEY);

    window.dispatchEvent(
      new CustomEvent("shophub-cart-updated", {
        detail: [],
      })
    );

    setOrderPlaced(true);
  };

  // Empty cart
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-[#F8F9FC]">
        <Navbar />

        <main className="mx-auto flex min-h-[500px] w-full max-w-[1440px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
            <Truck size={28} />
          </div>

          <h1 className="mt-5 text-[24px] font-bold text-[#172D55]">
            Your cart is empty
          </h1>

          <p className="mt-2 text-[14px] text-slate-500">
            Add some products to your cart before checking out.
          </p>

          <Link
            to="/products"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#4B50D8] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#3940C5]"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  // Order success
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#F8F9FC]">
        <Navbar />

        <main className="mx-auto flex min-h-[600px] w-full max-w-[1440px] items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
          <div className="w-full max-w-[560px] rounded-xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
              <CheckCircle2 size={42} />
            </div>

            <h1 className="mt-6 text-[27px] font-bold text-[#172D55]">
              Order Placed Successfully!
            </h1>

            <p className="mx-auto mt-3 max-w-[430px] text-[14px] leading-6 text-slate-500">
              Thank you for shopping with ShopHub. Your order has been
              received and is now being processed.
            </p>

            <div className="mt-6 rounded-lg bg-[#F8F9FC] p-4 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-slate-500">
                  Items
                </span>

                <span className="text-[13px] font-semibold text-[#172D55]">
                  {totalItems}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[13px] text-slate-500">
                  Payment
                </span>

                <span className="text-[13px] font-semibold text-[#172D55]">
                  {paymentMethod === "cod"
                    ? "Cash on Delivery"
                    : "Card Payment"}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">
                <span className="text-[14px] font-semibold text-[#172D55]">
                  Total
                </span>

                <span className="text-[18px] font-bold text-[#4B50D8]">
                  Rs. {total.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/orders")}
                className="flex-1 rounded-full bg-[#4B50D8] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#3940C5]"
              >
                View My Orders
              </button>

              <Link
                to="/products"
                className="flex-1 rounded-full border border-slate-200 px-5 py-3 text-[14px] font-semibold text-[#172D55] transition-colors hover:bg-[#F8F9FC]"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <Navbar />

      {/* Header */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-7 sm:px-6 lg:px-10">
          <Link
            to="/cart"
            className="flex w-fit items-center gap-2 text-[13px] font-medium text-slate-500 transition-colors hover:text-[#4B50D8]"
          >
            <ArrowLeft size={15} />
            Back to Cart
          </Link>

          <h1 className="mt-4 text-[27px] font-bold text-[#172D55]">
            Checkout
          </h1>

          <p className="mt-1 text-[13px] text-slate-500">
            Complete your order by providing your delivery details.
          </p>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]"
        >
          {/* Left Side */}
          <div className="space-y-6">
            {/* Delivery Information */}
            <section className="rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 sm:px-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                  <MapPin size={18} />
                </div>

                <div>
                  <h2 className="text-[17px] font-bold text-[#172D55]">
                    Delivery Information
                  </h2>

                  <p className="mt-0.5 text-[12px] text-slate-500">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:p-6">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[13px] font-medium text-[#172D55]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="
                      h-11 w-full rounded-md border
                      border-slate-200 bg-white px-4
                      text-[14px] text-[#172D55]
                      outline-none placeholder:text-slate-400
                      focus:border-[#4B50D8]
                      focus:ring-2 focus:ring-[#4B50D8]/10
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#172D55]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="
                      h-11 w-full rounded-md border
                      border-slate-200 bg-white px-4
                      text-[14px] text-[#172D55]
                      outline-none placeholder:text-slate-400
                      focus:border-[#4B50D8]
                      focus:ring-2 focus:ring-[#4B50D8]/10
                    "
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#172D55]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="03XX XXXXXXX"
                    required
                    className="
                      h-11 w-full rounded-md border
                      border-slate-200 bg-white px-4
                      text-[14px] text-[#172D55]
                      outline-none placeholder:text-slate-400
                      focus:border-[#4B50D8]
                      focus:ring-2 focus:ring-[#4B50D8]/10
                    "
                  />
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[13px] font-medium text-[#172D55]">
                    Delivery Address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House / Street / Area"
                    rows={3}
                    required
                    className="
                      w-full resize-none rounded-md border
                      border-slate-200 bg-white px-4 py-3
                      text-[14px] text-[#172D55]
                      outline-none placeholder:text-slate-400
                      focus:border-[#4B50D8]
                      focus:ring-2 focus:ring-[#4B50D8]/10
                    "
                  />
                </div>

                {/* City */}
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#172D55]">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                    className="
                      h-11 w-full rounded-md border
                      border-slate-200 bg-white px-4
                      text-[14px] text-[#172D55]
                      outline-none placeholder:text-slate-400
                      focus:border-[#4B50D8]
                      focus:ring-2 focus:ring-[#4B50D8]/10
                    "
                  />
                </div>

                {/* Postal Code */}
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#172D55]">
                    Postal Code
                  </label>

                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Postal code"
                    required
                    className="
                      h-11 w-full rounded-md border
                      border-slate-200 bg-white px-4
                      text-[14px] text-[#172D55]
                      outline-none placeholder:text-slate-400
                      focus:border-[#4B50D8]
                      focus:ring-2 focus:ring-[#4B50D8]/10
                    "
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 sm:px-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                  <CreditCard size={18} />
                </div>

                <div>
                  <h2 className="text-[17px] font-bold text-[#172D55]">
                    Payment Method
                  </h2>

                  <p className="mt-0.5 text-[12px] text-slate-500">
                    Select your preferred payment method.
                  </p>
                </div>
              </div>

              <div className="space-y-3 p-5 sm:p-6">
                {/* COD */}
                <label
                  className={`
                    flex cursor-pointer items-center gap-4
                    rounded-lg border p-4 transition-all
                    ${
                      paymentMethod === "cod"
                        ? "border-[#4B50D8] bg-[#EEF1FF]"
                        : "border-slate-200 hover:border-slate-300"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                    className="h-4 w-4 accent-[#4B50D8]"
                  />

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4B50D8]">
                    <WalletCards size={19} />
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-[#172D55]">
                      Cash on Delivery
                    </p>

                    <p className="mt-0.5 text-[12px] text-slate-500">
                      Pay when your order arrives.
                    </p>
                  </div>
                </label>

                {/* Card */}
                <label
                  className={`
                    flex cursor-pointer items-center gap-4
                    rounded-lg border p-4 transition-all
                    ${
                      paymentMethod === "card"
                        ? "border-[#4B50D8] bg-[#EEF1FF]"
                        : "border-slate-200 hover:border-slate-300"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                    className="h-4 w-4 accent-[#4B50D8]"
                  />

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4B50D8]">
                    <CreditCard size={19} />
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-[#172D55]">
                      Credit / Debit Card
                    </p>

                    <p className="mt-0.5 text-[12px] text-slate-500">
                      Secure online card payment.
                    </p>
                  </div>
                </label>
              </div>
            </section>

            {/* Security */}
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-[#4B50D8]"
              />

              <div>
                <p className="text-[13px] font-semibold text-[#172D55]">
                  Secure Checkout
                </p>

                <p className="mt-1 text-[12px] leading-5 text-slate-500">
                  Your personal information is protected. Payment
                  processing will be securely connected when the
                  backend is implemented.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-[17px] font-bold text-[#172D55]">
                Order Summary
              </h2>

              <p className="mt-0.5 text-[12px] text-slate-500">
                {totalItems}{" "}
                {totalItems === 1 ? "item" : "items"}
              </p>
            </div>

            {/* Products */}
            <div className="max-h-[330px] divide-y divide-slate-100 overflow-y-auto px-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 py-4"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-[#F8F9FC]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="truncate text-[13px] font-semibold text-[#172D55]"
                      title={item.name}
                    >
                      {item.name}
                    </p>

                    <p className="mt-1 text-[12px] text-slate-500">
                      Qty: {item.quantity || 1}
                    </p>

                    <p className="mt-1 text-[13px] font-semibold text-[#172D55]">
                      Rs.{" "}
                      {(
                        Number(item.price) *
                        Number(item.quantity || 1)
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="border-t border-slate-200 p-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-slate-500">
                    Subtotal
                  </span>

                  <span className="text-[13px] font-medium text-[#172D55]">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-slate-500">
                    Shipping
                  </span>

                  <span className="text-[13px] font-medium text-[#172D55]">
                    Rs. {shipping.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-[15px] font-semibold text-[#172D55]">
                    Total
                  </span>

                  <span className="text-[21px] font-bold text-[#4B50D8]">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="
                  mt-6 flex w-full items-center
                  justify-center gap-2 rounded-full
                  bg-[#4B50D8] px-5 py-3
                  text-[14px] font-semibold text-white
                  transition-colors hover:bg-[#3940C5]
                "
              >
                <CheckCircle2 size={17} />
                Place Order
              </button>

              <p className="mt-3 text-center text-[11px] leading-5 text-slate-400">
                By placing your order, you agree to ShopHub's
                terms and conditions.
              </p>
            </div>
          </aside>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;