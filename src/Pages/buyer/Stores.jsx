import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowLeft,
  Store,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import StoreCard from "../../components/buyer/StoreCard";

import stores from "../../data/stores";

const Stores = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    "All",
    "Fashion & Clothing",
    "Electronics",
    "Shoes",
    "Beauty & Personal Care",
    "Home & Living",
  ];

  const filteredStores = useMemo(() => {
    let result = [...stores];

    // Search
    if (search.trim()) {
      const searchValue = search.toLowerCase();

      result = result.filter(
        (store) =>
          store.name.toLowerCase().includes(searchValue) ||
          store.category.toLowerCase().includes(searchValue)
      );
    }

    // Category
    if (category !== "All") {
      result = result.filter((store) => store.category === category);
    }

    // Sorting
    if (sortBy === "Top Rated") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "Most Reviews") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    if (sortBy === "Name A-Z") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, category, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSortBy("Featured");
  };

  const hasFilters =
    search.trim() !== "" ||
    category !== "All" ||
    sortBy !== "Featured";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="border-b border-slate-100 bg-[#F8F9FC]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="flex w-fit items-center gap-2 text-[13px] font-medium text-slate-500 transition-colors hover:text-[#4B50D8]"
            >
              <ArrowLeft size={15} />
              Back to Home
            </Link>

            <div>
              <h1 className="text-[28px] font-bold text-[#172D55] sm:text-[32px]">
                Explore Stores
              </h1>

              <p className="mt-1 text-[14px] text-slate-500">
                Discover trusted stores and shop from your favorite sellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
        {/* Search + Filter */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-[480px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search stores..."
              className="
                h-11 w-full rounded-full border border-slate-200
                bg-white pl-11 pr-10 text-[14px] text-[#172D55]
                outline-none transition-all
                placeholder:text-slate-400
                focus:border-[#4B50D8] focus:ring-2
                focus:ring-[#4B50D8]/10
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  absolute right-3 top-1/2 flex
                  -translate-y-1/2 items-center justify-center
                  text-slate-400 transition-colors
                  hover:text-slate-600
                "
              >
                <X size={17} />
              </button>
            )}
          </div>

          {/* Desktop Filters */}
          <div className="hidden items-center gap-3 md:flex">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                h-11 rounded-full border border-slate-200
                bg-white px-4 text-[14px] text-[#172D55]
                outline-none focus:border-[#4B50D8]
              "
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
                h-11 rounded-full border border-slate-200
                bg-white px-4 text-[14px] text-[#172D55]
                outline-none focus:border-[#4B50D8]
              "
            >
              <option value="Featured">Featured</option>
              <option value="Top Rated">Top Rated</option>
              <option value="Most Reviews">Most Reviews</option>
              <option value="Name A-Z">Name A-Z</option>
            </select>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  flex h-11 items-center gap-1.5
                  rounded-full px-4 text-[13px]
                  font-medium text-[#4B50D8]
                  transition-colors hover:bg-[#EEF1FF]
                "
              >
                <X size={15} />
                Clear
              </button>
            )}
          </div>

          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="
              flex h-11 items-center justify-center gap-2
              rounded-full border border-slate-200
              bg-white px-5 text-[14px] font-medium
              text-[#172D55] md:hidden
            "
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="mt-4 rounded-lg border border-slate-200 bg-[#F8F9FC] p-4 md:hidden">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-[#172D55]">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="
                    h-10 w-full rounded-md border
                    border-slate-200 bg-white px-3
                    text-[13px] text-[#172D55]
                    outline-none focus:border-[#4B50D8]
                  "
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-[#172D55]">
                  Sort By
                </label>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="
                    h-10 w-full rounded-md border
                    border-slate-200 bg-white px-3
                    text-[13px] text-[#172D55]
                    outline-none focus:border-[#4B50D8]
                  "
                >
                  <option value="Featured">Featured</option>
                  <option value="Top Rated">Top Rated</option>
                  <option value="Most Reviews">Most Reviews</option>
                  <option value="Name A-Z">Name A-Z</option>
                </select>
              </div>
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-3 flex items-center gap-1.5
                  text-[13px] font-medium text-[#4B50D8]
                "
              >
                <X size={14} />
                Clear All Filters
              </button>
            )}
          </div>
        )}

        {/* Results Header */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <h2 className="text-[20px] font-bold text-[#172D55]">
              All Stores
            </h2>

            <p className="mt-1 text-[13px] text-slate-500">
              {filteredStores.length}{" "}
              {filteredStores.length === 1 ? "store" : "stores"} found
            </p>
          </div>

          <div className="hidden items-center gap-2 text-slate-400 sm:flex">
            <Store size={18} />
            <span className="text-[13px]">
              Shop from trusted sellers
            </span>
          </div>
        </div>

        {/* Store Grid */}
        {filteredStores.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredStores.map((store) => (
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
        ) : (
          /* Empty State */
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-[#F8F9FC] px-5 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
              <Store size={27} />
            </div>

            <h3 className="mt-5 text-[19px] font-bold text-[#172D55]">
              No stores found
            </h3>

            <p className="mt-2 max-w-[400px] text-[14px] leading-6 text-slate-500">
              We couldn't find any stores matching your search or filters.
              Try changing your search or category.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="
                mt-5 rounded-full bg-[#4B50D8]
                px-5 py-2.5 text-[13px]
                font-semibold text-white
                transition-colors hover:bg-[#3940C5]
              "
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Stores;