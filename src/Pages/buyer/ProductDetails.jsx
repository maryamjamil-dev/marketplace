import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import products from "../../data/products";

const CART_KEY = "shophub-cart";

const ProductDetails = () => {
  const { id } = useParams();

  const product = useMemo(
    () => products.find((item) => item.id === id),
    [id]
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    product?.image || ""
  );
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <main className="mx-auto flex min-h-[500px] w-full max-w-[1440px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
            <ShoppingCart size={26} />
          </div>

          <h1 className="mt-5 text-[24px] font-bold text-[#172D55]">
            Product Not Found
          </h1>

          <p className="mt-2 text-[14px] text-slate-500">
            The product you're looking for doesn't exist or has been
            removed.
          </p>

          <Link
            to="/products"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#4B50D8] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#3940C5]"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  const images = [product.image, product.image, product.image];

  const totalPrice = Number(product.price) * quantity;

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  // Add product to cart
  const handleAddToCart = () => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);

      let existingCart = [];

      if (savedCart) {
        try {
          existingCart = JSON.parse(savedCart);

          if (!Array.isArray(existingCart)) {
            existingCart = [];
          }
        } catch {
          existingCart = [];
        }
      }

      const existingItem = existingCart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingItem) {
        updatedCart = existingCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  Number(item.quantity || 1) + quantity,
              }
            : item
        );
      } else {
        updatedCart = [
          ...existingCart,
          {
            ...product,
            quantity,
          },
        ];
      }

      // Save cart
      localStorage.setItem(
        CART_KEY,
        JSON.stringify(updatedCart)
      );

      // Update navbar cart count
      window.dispatchEvent(
        new CustomEvent("shophub-cart-updated", {
          detail: updatedCart,
        })
      );

      // Show success state
      setAddedToCart(true);

      // Reset success state after 2 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to add product to cart:", error);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-[#F8F9FC]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-slate-500">
            <Link
              to="/"
              className="transition-colors hover:text-[#4B50D8]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/products"
              className="transition-colors hover:text-[#4B50D8]"
            >
              Products
            </Link>

            <span>/</span>

            <span className="max-w-[220px] truncate font-medium text-[#172D55]">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Images */}
          <section>
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-[#F8F9FC]">
              <div className="aspect-square w-full">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  setIsWishlisted((current) => !current)
                }
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:scale-105"
                aria-label="Add to wishlist"
              >
                <Heart
                  size={19}
                  className={
                    isWishlisted
                      ? "fill-red-500 text-red-500"
                      : "text-slate-500"
                  }
                />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`h-20 w-20 overflow-hidden rounded-md border-2 bg-[#F8F9FC] transition-all ${
                    selectedImage === image
                      ? "border-[#4B50D8]"
                      : "border-slate-200 hover:border-[#C9CEF5]"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </section>

          {/* Product Information */}
          <section className="flex flex-col">
            <p className="text-[14px] font-medium text-[#4B50D8]">
              {product.category}
            </p>

            <h1 className="mt-2 text-[28px] font-bold leading-tight text-[#172D55] sm:text-[34px]">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Star
                  size={17}
                  fill="currentColor"
                  className="text-amber-400"
                />

                <span className="text-[14px] font-semibold text-[#172D55]">
                  {product.rating}
                </span>
              </div>

              <span className="text-[14px] text-slate-400">
                ({product.reviews} reviews)
              </span>

              <span className="h-4 w-px bg-slate-200" />

              <span className="text-[14px] font-medium text-emerald-600">
                In Stock
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 border-y border-slate-200 py-5">
              <p className="text-[30px] font-bold text-[#172D55]">
                Rs. {totalPrice.toLocaleString()}
              </p>

              {quantity > 1 && (
                <p className="mt-1 text-[13px] text-slate-500">
                  Rs. {Number(product.price).toLocaleString()} per
                  item
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mt-6">
              <h2 className="text-[16px] font-bold text-[#172D55]">
                Product Description
              </h2>

              <p className="mt-2 text-[14px] leading-7 text-slate-600">
                Experience quality and style with the{" "}
                <span className="font-medium text-[#172D55]">
                  {product.name}
                </span>
                . This product is carefully selected from our
                trusted sellers to provide you with a reliable
                shopping experience.
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-2 text-[14px] font-semibold text-[#172D55]">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-10 w-10 items-center justify-center text-slate-500 transition-colors hover:bg-[#EEF1FF] hover:text-[#4B50D8]"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>

                <span className="flex h-10 min-w-[45px] items-center justify-center border-x border-slate-200 text-[14px] font-semibold text-[#172D55]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-10 w-10 items-center justify-center text-slate-500 transition-colors hover:bg-[#EEF1FF] hover:text-[#4B50D8]"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {/* Add to Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-5 py-3 text-[14px] font-semibold transition-all ${
                  addedToCart
                    ? "border-emerald-500 bg-emerald-50 text-emerald-600"
                    : "border-[#4B50D8] text-[#4B50D8] hover:bg-[#EEF1FF] hover:shadow-sm"
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check size={18} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    Add to Cart
                  </>
                )}
              </button>

              {/* Buy Now */}
              <button
                type="button"
                onClick={handleBuyNow}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#4B50D8] px-5 py-3 text-[14px] font-semibold text-white transition-all hover:bg-[#3940C5] hover:shadow-md"
              >
                Buy Now
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-slate-200 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                  <Truck size={17} />
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-[#172D55]">
                    Fast Delivery
                  </p>

                  <p className="mt-0.5 text-[12px] text-slate-500">
                    Quick shipping
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                  <ShieldCheck size={17} />
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-[#172D55]">
                    Secure Payment
                  </p>

                  <p className="mt-0.5 text-[12px] text-slate-500">
                    Safe checkout
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                  <RotateCcw size={17} />
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-[#172D55]">
                    Easy Returns
                  </p>

                  <p className="mt-0.5 text-[12px] text-slate-500">
                    Simple returns
                  </p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-6 rounded-lg bg-[#F8F9FC] p-5">
              <h2 className="text-[15px] font-bold text-[#172D55]">
                Product Information
              </h2>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
                  <span className="text-[13px] text-slate-500">
                    Category
                  </span>

                  <span className="text-[13px] font-medium text-[#172D55]">
                    {product.category}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
                  <span className="text-[13px] text-slate-500">
                    Product ID
                  </span>

                  <span className="text-[13px] font-medium text-[#172D55]">
                    {product.id}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-[13px] text-slate-500">
                    Availability
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-emerald-600">
                    <Check size={14} />
                    In Stock
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;