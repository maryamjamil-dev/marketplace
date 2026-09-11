import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  Package,
  ArrowUpRight,
  BarChart3,
} from "lucide-react";

import SellerSidebar from "../../components/seller/SellerSidebar";

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const monthlySales = [
    { month: "Jan", sales: 42000, orders: 42 },
    { month: "Feb", sales: 56000, orders: 56 },
    { month: "Mar", sales: 48000, orders: 48 },
    { month: "Apr", sales: 72000, orders: 72 },
    { month: "May", sales: 64000, orders: 64 },
    { month: "Jun", sales: 88000, orders: 88 },
    { month: "Jul", sales: 76000, orders: 76 },
    { month: "Aug", sales: 95000, orders: 95 },
  ];

  const topProducts = [
    {
      name: "Nike Air Max Shoes",
      category: "Shoes",
      sales: 128,
      revenue: 1663872,
    },
    {
      name: "Casio Watch",
      category: "Watches",
      sales: 95,
      revenue: 854905,
    },
    {
      name: "Wireless Earbuds",
      category: "Electronics",
      sales: 86,
      revenue: 386914,
    },
    {
      name: "Backpack Bags",
      category: "Bags",
      sales: 72,
      revenue: 179928,
    },
  ];

  const categoryData = [
    { name: "Shoes", percentage: 38, sales: "Rs. 174,382" },
    { name: "Electronics", percentage: 27, sales: "Rs. 123,903" },
    { name: "Watches", percentage: 21, sales: "Rs. 96,369" },
    { name: "Bags", percentage: 14, sales: "Rs. 64,246" },
  ];

  const maxSales = Math.max(...monthlySales.map((item) => item.sales));

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="flex min-h-screen">
        <SellerSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

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
                    transition-colors hover:bg-[#EEF1FF]
                    hover:text-[#4B50D8] md:hidden
                  "
                  aria-label="Open sidebar"
                >
                  <Menu size={19} />
                </button>

                <div>
                  <h1 className="text-[18px] font-bold text-[#172D55] sm:text-[20px]">
                    Analytics
                  </h1>

                  <p className="text-[13px] text-slate-500">
                    Track your store performance and growth
                  </p>
                </div>
              </div>

              <Link
                to="/seller/dashboard"
                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-slate-200 bg-white px-4 py-2.5
                  text-[14px] font-semibold text-[#4B50D8]
                  transition-all duration-200
                  hover:border-[#D5D9FF] hover:bg-[#EEF1FF]
                "
              >
                <BarChart3 size={16} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            </div>
          </header>

          {/* Content */}
          <div className="mx-auto w-full max-w-[1500px] space-y-6 p-4 sm:p-6 lg:p-8">
            {/* Page Intro */}
            <section className="rounded-lg bg-[#EEF1FF] px-5 py-5 sm:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[14px] font-medium text-[#4B50D8]">
                    Store Analytics
                  </p>

                  <h2 className="mt-1 text-[22px] font-bold text-[#172D55]">
                    Understand your business better
                  </h2>

                  <p className="mt-1 max-w-[650px] text-[14px] text-slate-600">
                    Monitor your sales, orders, customers and products to see
                    how your store is performing.
                  </p>
                </div>

                <select
                  defaultValue="8"
                  className="
                    w-fit rounded-md border border-[#C9CEF5]
                    bg-white px-3 py-2 text-[13px] text-slate-600
                    outline-none focus:border-[#4B50D8]
                  "
                >
                  <option value="8">Last 8 Months</option>
                  <option value="6">Last 6 Months</option>
                  <option value="12">Last 12 Months</option>
                </select>
              </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {/* Revenue */}
              <div
                className="
                  rounded-lg border border-slate-200 bg-white p-5
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-md
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[14px] font-medium text-slate-500">
                      Total Revenue
                    </p>

                    <h3 className="mt-2 text-[24px] font-bold text-[#172D55]">
                      Rs. 458,900
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                    <DollarSign size={21} />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp size={15} className="text-emerald-600" />

                  <span className="text-[14px] font-semibold text-emerald-600">
                    +12.5%
                  </span>

                  <span className="text-[14px] text-slate-400">
                    vs last period
                  </span>
                </div>
              </div>

              {/* Orders */}
              <div
                className="
                  rounded-lg border border-slate-200 bg-white p-5
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-md
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[14px] font-medium text-slate-500">
                      Total Orders
                    </p>

                    <h3 className="mt-2 text-[24px] font-bold text-[#172D55]">
                      1,248
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                    <ShoppingBag size={21} />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp size={15} className="text-emerald-600" />

                  <span className="text-[14px] font-semibold text-emerald-600">
                    +8.2%
                  </span>

                  <span className="text-[14px] text-slate-400">
                    vs last period
                  </span>
                </div>
              </div>

              {/* Customers */}
              <div
                className="
                  rounded-lg border border-slate-200 bg-white p-5
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-md
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[14px] font-medium text-slate-500">
                      Customers
                    </p>

                    <h3 className="mt-2 text-[24px] font-bold text-[#172D55]">
                      3,642
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                    <Users size={21} />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp size={15} className="text-emerald-600" />

                  <span className="text-[14px] font-semibold text-emerald-600">
                    +10.8%
                  </span>

                  <span className="text-[14px] text-slate-400">
                    vs last period
                  </span>
                </div>
              </div>

              {/* Average Order */}
              <div
                className="
                  rounded-lg border border-slate-200 bg-white p-5
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-md
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[14px] font-medium text-slate-500">
                      Avg. Order Value
                    </p>

                    <h3 className="mt-2 text-[24px] font-bold text-[#172D55]">
                      Rs. 3,842
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                    <Package size={21} />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp size={15} className="text-emerald-600" />

                  <span className="text-[14px] font-semibold text-emerald-600">
                    +6.4%
                  </span>

                  <span className="text-[14px] text-slate-400">
                    vs last period
                  </span>
                </div>
              </div>
            </section>

            {/* Sales Chart */}
            <section className="rounded-lg border border-slate-200 bg-white">
              <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-[16px] font-bold text-[#172D55]">
                    Sales Performance
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Monthly revenue and order performance
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#4B50D8]" />
                    <span className="text-[13px] text-slate-500">
                      Revenue
                    </span>
                  </div>

                  <span className="text-[14px] font-semibold text-[#172D55]">
                    Rs. 95,000
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex h-[300px] items-end gap-2 sm:gap-4">
                  {monthlySales.map((item) => {
                    const height = (item.sales / maxSales) * 100;

                    return (
                      <div
                        key={item.month}
                        className="
                          flex h-full flex-1 flex-col
                          items-center justify-end gap-2
                        "
                      >
                        <div className="group relative flex h-[250px] w-full items-end justify-center">
                          <div
                            className="
                              relative w-full max-w-[48px]
                              rounded-t-md bg-[#4B50D8]
                              transition-all duration-300
                              hover:bg-[#3940C5]
                            "
                            style={{ height: `${height}%` }}
                          >
                            <div
                              className="
                                absolute bottom-full left-1/2 mb-2
                                hidden -translate-x-1/2 whitespace-nowrap
                                rounded-md bg-[#172D55] px-2 py-1
                                text-[11px] font-medium text-white
                                group-hover:block
                              "
                            >
                              Rs. {item.sales.toLocaleString()}
                            </div>
                          </div>
                        </div>

                        <span className="text-[12px] font-medium text-slate-500">
                          {item.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Bottom Analytics */}
            <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {/* Top Products */}
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <div>
                    <h2 className="text-[16px] font-bold text-[#172D55]">
                      Top Selling Products
                    </h2>

                    <p className="mt-1 text-[14px] text-slate-500">
                      Your best performing products
                    </p>
                  </div>

                  <Link
                    to="/seller/products"
                    className="
                      inline-flex items-center gap-1
                      text-[14px] font-semibold text-[#4B50D8]
                      hover:text-[#3940C5]
                    "
                  >
                    View All
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

                <div className="divide-y divide-slate-100">
                  {topProducts.map((product, index) => (
                    <div
                      key={product.name}
                      className="
                        flex items-center gap-4 px-5 py-4
                        transition-colors hover:bg-slate-50
                      "
                    >
                      <div
                        className="
                          flex h-9 w-9 shrink-0 items-center
                          justify-center rounded-full bg-[#EEF1FF]
                          text-[14px] font-bold text-[#4B50D8]
                        "
                      >
                        {index + 1}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[14px] font-semibold text-[#172D55]">
                          {product.name}
                        </p>

                        <p className="mt-1 text-[12px] text-slate-500">
                          {product.category} · {product.sales} sold
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[14px] font-semibold text-[#172D55]">
                          Rs. {product.revenue.toLocaleString()}
                        </p>

                        <p className="mt-1 text-[12px] text-emerald-600">
                          Revenue
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Sales */}
              <div className="rounded-lg border border-slate-200 bg-white">
                <div className="border-b border-slate-200 px-5 py-4">
                  <h2 className="text-[16px] font-bold text-[#172D55]">
                    Sales by Category
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Revenue distribution across categories
                  </p>
                </div>

                <div className="space-y-5 p-5">
                  {categoryData.map((category) => (
                    <div key={category.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] font-semibold text-[#172D55]">
                            {category.name}
                          </span>

                          <span className="text-[12px] text-slate-400">
                            {category.percentage}%
                          </span>
                        </div>

                        <span className="text-[14px] font-semibold text-[#172D55]">
                          {category.sales}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-[#4B50D8] transition-all duration-500"
                          style={{
                            width: `${category.percentage}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-medium text-slate-500">
                      Total Revenue
                    </span>

                    <span className="text-[16px] font-bold text-[#172D55]">
                      Rs. 458,900
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Summary */}
            <section className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-[16px] font-bold text-[#172D55]">
                    Store Performance
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Your store is showing positive growth this period.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">
                  <TrendingUp size={16} className="text-emerald-600" />

                  <span className="text-[14px] font-semibold text-emerald-600">
                    Growing 12.5%
                  </span>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;