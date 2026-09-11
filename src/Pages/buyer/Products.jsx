import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SlidersHorizontal,
  Search,
  X,
  ChevronDown,
  Grid2X2,
  List,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ProductCard from "../../components/buyer/ProductCard";

import products from "../../data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "All";
  const searchFromUrl = searchParams.get("search") || "";

  const [search, setSearch] = useState(searchFromUrl);
  const [category, setCategory] = useState(categoryFromUrl);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    "All",
    "Shoes",
    "Watches",
    "Fashion",
    "Electronics",
    "Home & Living",
    "Bags",
  ];

  const updateFilters = (newCategory, newSearch) => {
    const params = new URLSearchParams();

    if (newCategory && newCategory !== "All") {
      params.set("category", newCategory);
    }

    if (newSearch.trim()) {
      params.set("search", newSearch.trim());
    }

    setSearchParams(params);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    updateFilters(value, search);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    updateFilters(category, search);
  };

  const clearFilters = () => {
    setCategory("All");
    setSearch("");
    setPriceRange("all");
    setSortBy("featured");
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const searchText = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchText) ||
          product.category.toLowerCase().includes(searchText)
      );
    }

    // Category
    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Price
    if (priceRange === "under-5000") {
      result = result.filter((product) => Number(product.price) < 5000);
    }

    if (priceRange === "5000-10000") {
      result = result.filter(
        (product) =>
          Number(product.price) >= 5000 &&
          Number(product.price) <= 10000
      );
    }

    if (priceRange === "above-10000") {
      result = result.filter((product) => Number(product.price) > 10000);
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (sortBy === "rating") {
      result.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, category, priceRange, sortBy]);

  const hasActiveFilters =
    category !== "All" ||
    search.trim() !== "" ||
    priceRange !== "all";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="border-b border-slate-200 bg-[#F8F9FC]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[13px] text-slate-500">
              <Link
                to="/"
                className="transition-colors hover:text-[#4B50D8]"
              >
                Home
              </Link>

              <span>/</span>

              <span className="font-medium text-[#172D55]">
                Products
              </span>
            </div>

            <h1 className="mt-1 text-[26px] font-bold text-[#172D55] sm:text-[30px]">
              All Products
            </h1>

            <p className="text-[14px] text-slate-500">
              Discover products from our trusted sellers.
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10">
        {/* Top Controls */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex w-full max-w-[520px] items-center"
          >
            <div className="relative w-full">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="
                  w-full rounded-full border border-slate-200
                  bg-[#F8F9FC] py-2.5 pl-10 pr-24
                  text-[14px] text-[#172D55] outline-none
                  transition-colors
                  focus:border-[#4B50D8]
                  focus:bg-white
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    updateFilters(category, "");
                  }}
                  className="
                    absolute right-[76px] top-1/2
                    -translate-y-1/2 text-slate-400
                    hover:text-[#4B50D8]
                  "
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}

              <button
                type="submit"
                className="
                  absolute right-1 top-1/2
                  -translate-y-1/2 rounded-full
                  bg-[#4B50D8] px-4 py-1.5
                  text-[13px] font-semibold text-white
                  transition-colors hover:bg-[#3940C5]
                "
              >
                Search
              </button>
            </div>
          </form>

          {/* Right Controls */}
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="
                inline-flex items-center gap-2 rounded-full
                border border-slate-200 bg-white px-4 py-2.5
                text-[14px] font-semibold text-slate-600
                transition-colors hover:border-[#D5D9FF]
                hover:bg-[#EEF1FF] hover:text-[#4B50D8]
                lg:hidden
              "
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            <div className="hidden items-center rounded-lg border border-slate-200 bg-white p-1 sm:flex">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`
                  flex h-8 w-8 items-center justify-center rounded-md
                  transition-colors
                  ${
                    viewMode === "grid"
                      ? "bg-[#EEF1FF] text-[#4B50D8]"
                      : "text-slate-400 hover:text-[#4B50D8]"
                  }
                `}
                aria-label="Grid view"
              >
                <Grid2X2 size={16} />
              </button>

              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`
                  flex h-8 w-8 items-center justify-center rounded-md
                  transition-colors
                  ${
                    viewMode === "list"
                      ? "bg-[#EEF1FF] text-[#4B50D8]"
                      : "text-slate-400 hover:text-[#4B50D8]"
                  }
                `}
                aria-label="List view"
              >
                <List size={17} />
              </button>
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="
                  appearance-none rounded-full border border-slate-200
                  bg-white py-2.5 pl-4 pr-9 text-[14px]
                  font-medium text-slate-600 outline-none
                  transition-colors focus:border-[#4B50D8]
                "
              >
                <option value="featured">Featured</option>
                <option value="rating">Top Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>

              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 flex flex-col gap-6 lg:flex-row">
          {/* Desktop Filters */}
          <aside
            className={`
              w-full shrink-0 lg:block lg:w-[230px]
              ${showFilters ? "block" : "hidden"}
            `}
          >
            <div className="sticky top-24 rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-bold text-[#172D55]">
                  Filters
                </h2>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[13px] font-semibold text-[#4B50D8] hover:text-[#3940C5]"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mt-5">
                <h3 className="text-[14px] font-semibold text-[#172D55]">
                  Category
                </h3>

                <div className="mt-3 space-y-2">
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleCategoryChange(item)}
                      className={`
                        flex w-full items-center justify-between
                        rounded-md px-3 py-2 text-left
                        text-[14px] transition-colors
                        ${
                          category === item
                            ? "bg-[#EEF1FF] font-semibold text-[#4B50D8]"
                            : "text-slate-600 hover:bg-slate-50"
                        }
                      `}
                    >
                      <span>{item}</span>

                      {category === item && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4B50D8]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <h3 className="text-[14px] font-semibold text-[#172D55]">
                  Price Range
                </h3>

                <div className="mt-3 space-y-2">
                  {[
                    { value: "all", label: "All Prices" },
                    { value: "under-5000", label: "Under Rs. 5,000" },
                    { value: "5000-10000", label: "Rs. 5,000 - 10,000" },
                    { value: "above-10000", label: "Above Rs. 10,000" },
                  ].map((item) => (
                    <label
                      key={item.value}
                      className="flex cursor-pointer items-center gap-3 py-1.5"
                    >
                      <input
                        type="radio"
                        name="price"
                        value={item.value}
                        checked={priceRange === item.value}
                        onChange={(e) =>
                          setPriceRange(e.target.value)
                        }
                        className="h-4 w-4 accent-[#4B50D8]"
                      />

                      <span className="text-[14px] text-slate-600">
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <section className="min-w-0 flex-1">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[14px] text-slate-500">
                  Showing{" "}
                  <span className="font-semibold text-[#172D55]">
                    {filteredProducts.length}
                  </span>{" "}
                  product
                  {filteredProducts.length !== 1 ? "s" : ""}
                </p>

                {category !== "All" && (
                  <p className="mt-1 text-[13px] text-slate-400">
                    Category:{" "}
                    <span className="font-medium text-[#4B50D8]">
                      {category}
                    </span>
                  </p>
                )}
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    hidden items-center gap-1 text-[13px]
                    font-semibold text-slate-500
                    hover:text-[#4B50D8] sm:flex
                  "
                >
                  <X size={14} />
                  Clear filters
                </button>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              viewMode === "grid" ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4">
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
                <div className="space-y-3">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="
                        group flex gap-4 overflow-hidden rounded-lg
                        border border-slate-200 bg-white p-3
                        transition-all duration-200
                        hover:-translate-y-0.5 hover:shadow-md
                      "
                    >
                      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-md bg-[#F8F9FC] sm:h-36 sm:w-36">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="
                            h-full w-full object-cover
                            transition-transform duration-300
                            group-hover:scale-105
                          "
                        />
                      </div>

                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <p className="text-[13px] text-slate-500">
                          {product.category}
                        </p>

                        <h3 className="mt-1 truncate text-[17px] font-semibold text-[#172D55] group-hover:text-[#4B50D8]">
                          {product.name}
                        </h3>

                        <p className="mt-2 text-[17px] font-bold text-[#172D55]">
                          Rs. {Number(product.price).toLocaleString()}
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-[13px] font-medium text-amber-500">
                            ★ {product.rating}
                          </span>

                          <span className="text-[12px] text-slate-400">
                            ({product.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )
            ) : (
              <div className="flex min-h-[350px] flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-[#F8F9FC] px-5 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                  <Search size={22} />
                </div>

                <h2 className="mt-4 text-[17px] font-bold text-[#172D55]">
                  No Products Found
                </h2>

                <p className="mt-1 max-w-[400px] text-[14px] text-slate-500">
                  We couldn't find any products matching your current
                  search or filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    mt-4 rounded-full bg-[#4B50D8]
                    px-5 py-2.5 text-[14px] font-semibold
                    text-white transition-colors
                    hover:bg-[#3940C5]
                  "
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;