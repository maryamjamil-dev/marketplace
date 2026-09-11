import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Package,
  Filter,
} from "lucide-react";

import SellerSidebar from "../../components/seller/SellerSidebar";
import products from "../../data/products";

const Products = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const sellerProducts = products.map((product, index) => ({
    ...product,
    stock: [24, 15, 32, 8][index] ?? 10,
    status: index === 3 ? "Out of Stock" : "Active",
  }));

  const categories = [
    "All",
    ...new Set(sellerProducts.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return sellerProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SellerSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main */}
        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
            <div className="flex h-[70px] items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="
                    flex h-9 w-9 items-center justify-center rounded-lg
                    border border-slate-200 text-slate-600
                    hover:bg-[#EEF1FF] hover:text-[#4B50D8]
                    md:hidden
                  "
                >
                  <span className="text-[18px]">☰</span>
                </button>

                <div>
                  <h1 className="text-[20px] font-bold text-[#172D55]">
                    Products
                  </h1>

                  <p className="text-[13px] text-slate-500">
                    Manage your store products
                  </p>
                </div>
              </div>

              <Link
                to="/seller/add-product"
                className="
                  inline-flex items-center gap-2 rounded-full
                  bg-[#4B50D8] px-4 py-2.5 text-[14px]
                  font-semibold text-white transition-all
                  hover:bg-[#3940C5] hover:shadow-md
                "
              >
                <Plus size={16} />
                <span className="hidden sm:inline">
                  Add Product
                </span>
              </Link>
            </div>
          </header>

          {/* Content */}
          <div className="mx-auto w-full max-w-[1500px] p-4 sm:p-6 lg:p-8">
            {/* Page Intro */}
            <div className="mb-6">
              <h2 className="text-[18px] font-bold text-[#172D55]">
                My Products
              </h2>

              <p className="mt-1 text-[14px] text-slate-500">
                View, edit and manage all products in your store.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-5 rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                {/* Search */}
                <div className="relative w-full lg:max-w-[420px]">
                  <Search
                    size={18}
                    className="
                      absolute left-4 top-1/2
                      -translate-y-1/2 text-slate-400
                    "
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="
                      w-full rounded-lg border border-slate-200
                      bg-white py-3 pl-11 pr-4 text-[14px]
                      text-[#172D55] outline-none
                      placeholder:text-slate-400
                      focus:border-[#4B50D8]
                      focus:ring-2 focus:ring-[#4B50D8]/10
                    "
                  />
                </div>

                {/* Category */}
                <div className="flex items-center gap-2">
                  <Filter
                    size={17}
                    className="text-slate-400"
                  />

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="
                      rounded-lg border border-slate-200
                      bg-white px-4 py-3 text-[14px]
                      text-slate-600 outline-none
                      focus:border-[#4B50D8]
                      focus:ring-2 focus:ring-[#4B50D8]/10
                    "
                  >
                    {categories.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Product Table */}
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <h3 className="text-[16px] font-bold text-[#172D55]">
                    All Products
                  </h3>

                  <p className="mt-1 text-[14px] text-slate-500">
                    {filteredProducts.length} product
                    {filteredProducts.length !== 1 ? "s" : ""} found
                  </p>
                </div>

                <div className="hidden items-center gap-2 rounded-full bg-[#EEF1FF] px-3 py-1.5 sm:flex">
                  <Package size={15} className="text-[#4B50D8]" />

                  <span className="text-[13px] font-semibold text-[#4B50D8]">
                    {sellerProducts.length} Total
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[850px]">
                  <thead className="bg-[#F8F9FC]">
                    <tr className="border-b border-slate-200">
                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Product
                      </th>

                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Category
                      </th>

                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Price
                      </th>

                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Stock
                      </th>

                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Status
                      </th>

                      <th className="px-5 py-3 text-right text-[14px] font-semibold text-slate-500">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <tr
                          key={product.id}
                          className="
                            border-b border-slate-100
                            last:border-b-0
                            hover:bg-slate-50
                          "
                        >
                          {/* Product */}
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-[#F8F9FC]">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>

                              <div className="min-w-0">
                                <p className="max-w-[240px] truncate text-[14px] font-semibold text-[#172D55]">
                                  {product.name}
                                </p>

                                <p className="mt-1 text-[12px] text-slate-400">
                                  ID: {product.id}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* Category */}
                          <td className="px-5 py-4 text-[14px] text-slate-600">
                            {product.category}
                          </td>

                          {/* Price */}
                          <td className="px-5 py-4 text-[14px] font-semibold text-[#172D55]">
                            Rs.{" "}
                            {Number(product.price).toLocaleString()}
                          </td>

                          {/* Stock */}
                          <td className="px-5 py-4">
                            <span
                              className={`
                                text-[14px] font-medium
                                ${
                                  product.stock === 0 ||
                                  product.status === "Out of Stock"
                                    ? "text-red-500"
                                    : "text-slate-600"
                                }
                              `}
                            >
                              {product.stock}
                            </span>
                          </td>

                          {/* Status */}
                          <td className="px-5 py-4">
                            <span
                              className={`
                                inline-flex rounded-full
                                px-3 py-1 text-[12px] font-semibold
                                ${
                                  product.status === "Out of Stock"
                                    ? "bg-red-50 text-red-600"
                                    : "bg-emerald-50 text-emerald-600"
                                }
                              `}
                            >
                              {product.status}
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="px-5 py-4">
                            <div className="flex justify-end gap-2">
                              <Link
                                to={`/seller/products/${product.id}/edit`}
                                title="Edit Product"
                                className="
                                  flex h-8 w-8 items-center
                                  justify-center rounded-md
                                  border border-slate-200
                                  text-slate-500
                                  transition-colors
                                  hover:border-[#D5D9FF]
                                  hover:bg-[#EEF1FF]
                                  hover:text-[#4B50D8]
                                "
                              >
                                <Edit size={15} />
                              </Link>

                              <button
                                type="button"
                                title="Delete Product"
                                onClick={() =>
                                  alert(
                                    `Delete ${product.name}?`
                                  )
                                }
                                className="
                                  flex h-8 w-8 items-center
                                  justify-center rounded-md
                                  border border-slate-200
                                  text-slate-500
                                  transition-colors
                                  hover:border-red-200
                                  hover:bg-red-50
                                  hover:text-red-500
                                "
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-5 py-16 text-center"
                        >
                          <div className="flex flex-col items-center">
                            <div
                              className="
                                flex h-14 w-14 items-center
                                justify-center rounded-full
                                bg-[#EEF1FF] text-[#4B50D8]
                              "
                            >
                              <Package size={25} />
                            </div>

                            <h3 className="mt-4 text-[16px] font-semibold text-[#172D55]">
                              No Products Found
                            </h3>

                            <p className="mt-1 text-[14px] text-slate-500">
                              Try changing your search or category filter.
                            </p>

                            <button
                              type="button"
                              onClick={() => {
                                setSearch("");
                                setCategory("All");
                              }}
                              className="
                                mt-4 rounded-full
                                bg-[#4B50D8] px-5 py-2.5
                                text-[14px] font-semibold text-white
                                hover:bg-[#3940C5]
                              "
                            >
                              Clear Filters
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;