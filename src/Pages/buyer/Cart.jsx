import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const CART_KEY = "shophub-cart";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
      setCartItems(savedCart);
    } catch {
      setCartItems([]);
    }
  }, []);

  // Update localStorage
  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);

    localStorage.setItem(
      CART_KEY,
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new CustomEvent("shophub-cart-updated", {
        detail: updatedCart,
      })
    );
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Number(item.quantity || 1) + 1,
          }
        : item
    );

    updateCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(
              1,
              Number(item.quantity || 1) - 1
            ),
          }
        : item
    );

    updateCart(updatedCart);
  };

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    updateCart(updatedCart);
  };

  // Subtotal
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total +
        Number(item.price) *
          Number(item.quantity || 1),
      0
    );
  }, [cartItems]);

  // Shipping
  const shipping = subtotal > 0 ? 250 : 0;

  // Total
  const total = subtotal + shipping;

  // Total number of products
  const totalItems = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total + Number(item.quantity || 1),
      0
    );
  }, [cartItems]);

  // Clear cart
  const clearCart = () => {
    updateCart([]);
  };

  // Go to checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <Navbar />

      {/* Header */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-7 sm:px-6 lg:px-10">
          <Link
            to="/products"
            className="flex w-fit items-center gap-2 text-[13px] font-medium text-slate-500 transition-colors hover:text-[#4B50D8]"
          >
            <ArrowLeft size={15} />
            Continue Shopping
          </Link>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
              <ShoppingCart size={21} />
            </div>

            <div>
              <h1 className="text-[27px] font-bold text-[#172D55]">
                Shopping Cart
              </h1>

              <p className="mt-0.5 text-[13px] text-slate-500">
                {totalItems}{" "}
                {totalItems === 1 ? "item" : "items"} in your
                cart
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <section className="flex min-h-[450px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
              <ShoppingCart size={34} />
            </div>

            <h2 className="mt-6 text-[23px] font-bold text-[#172D55]">
              Your cart is empty
            </h2>

            <p className="mt-2 max-w-[420px] text-[14px] leading-6 text-slate-500">
              Looks like you haven't added anything to your
              cart yet. Explore our products and find something
              you love.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4B50D8] px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#3940C5]"
            >
              <ShoppingCart size={17} />
              Start Shopping
            </Link>
          </section>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
            {/* Cart Items */}
            <section>
              <div className="rounded-xl border border-slate-200 bg-white">
                {/* Cart Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
                  <div>
                    <h2 className="text-[17px] font-bold text-[#172D55]">
                      Cart Items
                    </h2>

                    <p className="mt-0.5 text-[12px] text-slate-500">
                      Review your selected products
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-[12px] font-medium text-red-500 transition-colors hover:text-red-600"
                  >
                    Clear Cart
                  </button>
                </div>

                {/* Items */}
                <div className="divide-y divide-slate-200">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:px-6"
                    >
                      {/* Image */}
                      <Link
                        to={`/products/${item.id}`}
                        className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-[#F8F9FC] sm:h-28 sm:w-28"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </Link>

                      {/* Product Info */}
                      <div className="min-w-0 flex-1">
                        <Link
                          to={`/products/${item.id}`}
                          className="block truncate text-[15px] font-semibold text-[#172D55] transition-colors hover:text-[#4B50D8]"
                          title={item.name}
                        >
                          {item.name}
                        </Link>

                        <p className="mt-1 text-[12px] text-slate-500">
                          {item.category}
                        </p>

                        <p className="mt-2 text-[15px] font-bold text-[#172D55]">
                          Rs.{" "}
                          {Number(item.price).toLocaleString()}
                        </p>

                        {/* Quantity + Remove */}
                        <div className="mt-3 flex flex-wrap items-center gap-4">
                          <div className="flex items-center overflow-hidden rounded-md border border-slate-200">
                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="flex h-8 w-8 items-center justify-center text-slate-500 transition-colors hover:bg-[#EEF1FF] hover:text-[#4B50D8]"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="flex h-8 min-w-[36px] items-center justify-center border-x border-slate-200 text-[13px] font-semibold text-[#172D55]">
                              {item.quantity || 1}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="flex h-8 w-8 items-center justify-center text-slate-500 transition-colors hover:bg-[#EEF1FF] hover:text-[#4B50D8]"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="flex items-center gap-1.5 text-[12px] font-medium text-red-500 transition-colors hover:text-red-600"
                          >
                            <Trash2 size={14} />
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="text-left sm:text-right">
                        <p className="text-[12px] text-slate-400">
                          Item Total
                        </p>

                        <p className="mt-1 text-[16px] font-bold text-[#172D55]">
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
              </div>

              {/* Benefits */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Fast Delivery */}
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                    <Truck size={17} />
                  </div>

                  <div>
                    <p className="text-[13px] font-semibold text-[#172D55]">
                      Fast Delivery
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500">
                      Quick & reliable
                    </p>
                  </div>
                </div>

                {/* Secure Payment */}
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                    <ShieldCheck size={17} />
                  </div>

                  <div>
                    <p className="text-[13px] font-semibold text-[#172D55]">
                      Secure Payment
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500">
                      100% secure
                    </p>
                  </div>
                </div>

                {/* Easy Returns */}
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                    <RotateCcw size={17} />
                  </div>

                  <div>
                    <p className="text-[13px] font-semibold text-[#172D55]">
                      Easy Returns
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500">
                      Simple returns
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Order Summary */}
            <aside className="h-fit rounded-xl border border-slate-200 bg-white lg:sticky lg:top-6">
              <div className="border-b border-slate-200 px-5 py-4">
                <h2 className="text-[17px] font-bold text-[#172D55]">
                  Order Summary
                </h2>
              </div>

              <div className="p-5">
                <div className="space-y-4">
                  {/* Subtotal */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[14px] text-slate-500">
                      Subtotal
                    </span>

                    <span className="text-[14px] font-medium text-[#172D55]">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>

                  {/* Shipping */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[14px] text-slate-500">
                      Shipping
                    </span>

                    <span className="text-[14px] font-medium text-[#172D55]">
                      Rs. {shipping.toLocaleString()}
                    </span>
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
                    <span className="text-[15px] font-semibold text-[#172D55]">
                      Total
                    </span>

                    <span className="text-[21px] font-bold text-[#4B50D8]">
                      Rs. {total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout */}
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="mt-6 flex w-full items-center justify-center rounded-full bg-[#4B50D8] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#3940C5]"
                >
                  Proceed to Checkout
                </button>

                {/* Continue Shopping */}
                <Link
                  to="/products"
                  className="mt-3 flex w-full items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-[14px] font-semibold text-[#172D55] transition-colors hover:bg-[#F8F9FC]"
                >
                  Continue Shopping
                </Link>

                {/* Secure Checkout */}
                <div className="mt-5 rounded-lg bg-[#F8F9FC] p-4">
                  <div className="flex items-start gap-2">
                    <ShieldCheck
                      size={16}
                      className="mt-0.5 shrink-0 text-[#4B50D8]"
                    />

                    <p className="text-[12px] leading-5 text-slate-500">
                      Your order information is protected with
                      secure checkout technology.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;