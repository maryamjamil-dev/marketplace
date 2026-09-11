import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import Hero from "../../components/buyer/Hero";
import CategoryCard from "../../components/buyer/CategoryCard";
import ProductCard from "../../components/buyer/ProductCard";
import DealBanner from "../../components/buyer/DealBanner";
import StoreCard from "../../components/buyer/StoreCard";
import stores from "../../data/stores";
import Footer from "../../components/common/Footer";
import { Link } from "react-router-dom";

import {
  Footprints,
  Watch,
  Shirt,
  Laptop,
  Home,
} from "lucide-react";

import products from "../../data/products";

const categories = [
  {
    name: "Shoes",
    slug: "shoes",
    icon: <Footprints size={21} strokeWidth={1.8} />,
  },
  {
    name: "Watches",
    slug: "watches",
    icon: <Watch size={21} strokeWidth={1.8} />,
  },
  {
    name: "Fashion",
    slug: "fashion",
    icon: <Shirt size={21} strokeWidth={1.8} />,
  },
  {
    name: "Electronics",
    slug: "electronics",
    icon: <Laptop size={21} strokeWidth={1.8} />,
  },
  {
    name: "Home & Living",
    slug: "home-living",
    icon: <Home size={21} strokeWidth={1.8} />,
  },
];

function BuyerHome() {
  // Initially 15 products = 3 rows × 5 cards
  const [visibleProducts, setVisibleProducts] = useState(5);

  // Load 5 more products
  const handleLoadMore = () => {
    setVisibleProducts((previous) => previous + 5);
  };

  // Products currently visible
  const displayedProducts = products.slice(0, visibleProducts);

  // Check if more products are available
  const hasMoreProducts = visibleProducts < products.length;

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Categories */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-4 sm:px-6 lg:px-10">
          <div className="flex w-full items-center justify-center gap-5 overflow-x-auto scrollbar-hide sm:gap-7 md:gap-10">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                icon={category.icon}
                name={category.name}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
<section className="w-full bg-white">
  <div className="mx-auto w-full max-w-[1440px] px-4 pb-7 sm:px-6 lg:px-10">

    {/* Section Header */}
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-[17px] font-bold text-[#172D55] sm:text-[18px]">
        Featured Products
      </h2>

      <Link
        to="/products"
        className="
          text-[14px]
          font-medium
          text-[#4B50D8]
          transition-colors
          duration-200
          hover:text-[#3940C5]
        "
      >
        View All →
      </Link>
    </div>

    {/* Single Row Product Grid */}
    <div
      className="
        grid
        grid-cols-2
        gap-3
        sm:grid-cols-3
        md:grid-cols-5
        lg:gap-4
      "
    >
      {displayedProducts.map((product) => (
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

    {/* Load More */}
    {hasMoreProducts && (
      <div className="mt-7 flex justify-center">
        <button
          type="button"
          onClick={handleLoadMore}
          className="
            rounded-full
            border
            border-[#4B50D8]
            bg-white
            px-7
            py-2.5
            text-[14px]
            font-semibold
            text-[#4B50D8]
            transition-all
            duration-200
            hover:bg-[#4B50D8]
            hover:text-white
            hover:shadow-md
          "
        >
          Load More
        </button>
      </div>
    )}

  </div>
</section>

      {/* Deal Banner */}
      <DealBanner />

      {/* Popular Stores */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-5 sm:px-6 lg:px-10">

          {/* Section Header */}
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[17px] font-bold text-[#172D55] sm:text-[18px]">
              Popular Stores
            </h2>

            <Link
              to="/stores"
              className="
                text-[14px]
                font-medium
                text-[#4B50D8]
                transition-colors
                duration-200
                hover:text-[#3940C5]
              "
            >
              View All →
            </Link>
          </div>

          {/* Store Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:gap-4">
            {stores.slice(0, 4).map((store) => (
              <StoreCard
                key={store.id}
                id={store.id}
                name={store.name}
                category={store.category}
                image={store.image}
                rating={store.rating}
                reviews={store.reviews}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default BuyerHome;