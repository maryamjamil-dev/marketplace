import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Search,
  Star,
  Store,
  Package,
  Users,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ProductCard from "../../components/buyer/ProductCard";

import stores from "../../data/stores";
import products from "../../data/products";

const StoreDetails = () => {
  const { id } = useParams();

  const [search, setSearch] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);

  // Selected store
  const store = useMemo(
    () => stores.find((item) => item.id === id),
    [id]
  );

  /*
    Temporary frontend mapping.

    Later, when backend/database is connected,
    each product will have a storeId and this
    mapping will no longer be needed.
  */
  const storeProductMap = {
    "urban-fashion": [
      "nike-air-max-shoes",
      "backpack-bags",
    ],

    "tech-world": [
      "wireless-earbuds",
    ],

    "style-hub": [
      "nike-air-max-shoes",
    ],

    "home-decor": [
      "backpack-bags",
    ],
  };

  const storeProducts = useMemo(() => {
    if (!store) return [];

    const productIds = storeProductMap[store.id] || [];

    return products.filter((product) =>
      productIds.includes(product.id)
    );
  }, [store]);

  const filteredProducts = useMemo(() => {
    if (!search.trim()) {
      return storeProducts;
    }

    const searchValue = search.toLowerCase();

    return storeProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue)
    );
  }, [search, storeProducts]);

  if (!store) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <main className="mx-auto flex min-h-[500px] w-full max-w-[1440px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
            <Store size={24} />
          </div>

          <h1 className="mt-5 text-[18px] font-bold text-[#172D55]">
            Store Not Found
          </h1>

          <p className="mt-2 max-w-[380px] text-[13px] leading-6 text-slate-500">
            The store you're looking for doesn't exist or may have
            been removed.
          </p>

          <Link
            to="/stores"
            className="
              mt-5 inline-flex items-center gap-2
              rounded-full bg-[#4B50D8] px-5 py-2.5
              text-[12px] font-semibold text-white
              transition-colors hover:bg-[#3940C5]
            "
          >
            <ArrowLeft size={15} />
            Back to Stores
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-[#F8F9FC]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-3.5 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-2 text-[12px] text-slate-500">
            <Link
              to="/"
              className="transition-colors hover:text-[#4B50D8]"
            >
              Home
            </Link>

            <span className="text-slate-300">/</span>

            <Link
              to="/stores"
              className="transition-colors hover:text-[#4B50D8]"
            >
              Stores
            </Link>

            <span className="text-slate-300">/</span>

            <span className="font-medium text-[#172D55]">
              {store.name}
            </span>
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
        {/* Store Profile */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          {/* Cover */}
          <div className="relative h-[160px] overflow-hidden bg-[#EEF1FF] sm:h-[200px]">
            <img
              src={store.image}
              alt={store.name}
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            <Link
              to="/stores"
              className="
                absolute left-4 top-4 flex h-9 w-9
                items-center justify-center rounded-full
                bg-white/95 text-slate-600 shadow-sm
                backdrop-blur-sm
                transition-colors hover:text-[#4B50D8]
              "
              aria-label="Back to stores"
            >
              <ArrowLeft size={16} />
            </Link>
          </div>

          {/* Store Information */}
          <div className="px-5 pb-6 sm:px-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="-mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-end">
                {/* Store Logo */}
                <div className="
                  flex h-[76px] w-[76px] shrink-0 items-center
                  justify-center overflow-hidden rounded-xl
                  border-4 border-white bg-[#EEF1FF]
                  shadow-md
                ">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="pb-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h1 className="text-[19px] font-bold leading-tight text-[#172D55] sm:text-[21px]">
                      {store.name}
                    </h1>

                    <CheckCircle2
                      size={16}
                      fill="currentColor"
                      className="text-[#4B50D8]"
                    />
                  </div>

                  <p className="mt-1 text-[12.5px] text-slate-500">
                    {store.category}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star
                        size={13}
                        fill="currentColor"
                        className="text-amber-400"
                      />

                      <span className="text-[12px] font-semibold text-[#172D55]">
                        {store.rating}
                      </span>
                    </div>

                    <span className="text-[12px] text-slate-400">
                      {store.reviews} reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Follow */}
              <button
                type="button"
                onClick={() => setIsFollowing(!isFollowing)}
                className={`
                  inline-flex items-center justify-center gap-2
                  rounded-full px-5 py-2.5 text-[13px]
                  font-semibold transition-all
                  ${
                    isFollowing
                      ? "border border-[#4B50D8] bg-[#EEF1FF] text-[#4B50D8]"
                      : "bg-[#4B50D8] text-white hover:bg-[#3940C5] hover:shadow-md"
                  }
                `}
              >
                <Heart
                  size={15}
                  className={isFollowing ? "fill-[#4B50D8]" : ""}
                />

                {isFollowing ? "Following" : "Follow Store"}
              </button>
            </div>

            {/* Store Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 pt-5 sm:grid-cols-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                  <Package size={17} />
                </div>

                <div>
                  <p className="text-[14px] font-bold leading-tight text-[#172D55]">
                    {storeProducts.length}
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Products
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                  <Users size={17} />
                </div>

                <div>
                  <p className="text-[14px] font-bold leading-tight text-[#172D55]">
                    {store.reviews}+
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Customers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                  <Star size={17} fill="currentColor" />
                </div>

                <div>
                  <p className="text-[14px] font-bold leading-tight text-[#172D55]">
                    {store.rating}/5
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Store Rating
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={17} />
                </div>

                <div>
                  <p className="text-[14px] font-bold leading-tight text-[#172D55]">
                    Verified
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Trusted Seller
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Header */}
        <section className="mt-9">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-[17px] font-bold text-[#172D55] sm:text-[18px]">
                Products from {store.name}
              </h2>

              <p className="mt-1 text-[12.5px] text-slate-500">
                Explore products available from this store.
              </p>
            </div>

            {/* Product Search */}
            <div className="relative w-full md:w-[300px]">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search store products..."
                className="
                  h-10 w-full rounded-full border
                  border-slate-200 bg-white pl-10 pr-4
                  text-[12.5px] text-[#172D55]
                  outline-none placeholder:text-slate-400
                  focus:border-[#4B50D8]
                  focus:ring-2 focus:ring-[#4B50D8]/10
                "
              />
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  reviews={product.reviews}
                />
              ))}
            </div>
          ) : (
            <div className="
              mt-5 flex min-h-[260px] flex-col
              items-center justify-center rounded-lg
              border border-dashed border-slate-200
              bg-[#F8F9FC] px-5 text-center
            ">
              <div className="
                flex h-13 w-13 items-center justify-center
                rounded-full bg-[#EEF1FF] text-[#4B50D8]
              ">
                <Package size={22} />
              </div>

              <h3 className="mt-4 text-[15px] font-bold text-[#172D55]">
                No products found
              </h3>

              <p className="mt-1 max-w-[360px] text-[12.5px] leading-6 text-slate-500">
                No products from this store match your search.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  mt-4 rounded-full bg-[#4B50D8]
                  px-5 py-2 text-[12.5px] font-semibold
                  text-white transition-colors
                  hover:bg-[#3940C5]
                "
              >
                Show All Products
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StoreDetails;