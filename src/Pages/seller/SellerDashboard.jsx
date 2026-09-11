import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Plus,
  ShoppingBag,
  Package,
  Users,
  DollarSign,
  ArrowUpRight,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
} from "lucide-react";

import SellerSidebar from "../../components/seller/SellerSidebar";
import StatsCard from "../../components/seller/StatsCard";
import ProductTable from "../../components/seller/ProductTable";
import StoreProfile from "../../components/seller/StoreProfile";

import products from "../../data/products";

const SellerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Temporary dashboard data
  // Later these values will come from the backend/API.
  const dashboardProducts = products.map((product, index) => ({
    ...product,
    stock: [24, 15, 32, 8][index] ?? 10,
    status: index === 3 ? "Out of Stock" : "Active",
  }));

  const recentOrders = [
    {
      id: "#ORD-1001",
      customer: "Ali Khan",
      product: "Nike Air Max Shoes",
      amount: 12999,
      status: "Delivered",
    },
    {
      id: "#ORD-1002",
      customer: "Sara Ahmed",
      product: "Casio Watch",
      amount: 8999,
      status: "Processing",
    },
    {
      id: "#ORD-1003",
      customer: "Hamza Malik",
      product: "Wireless Earbuds",
      amount: 4499,
      status: "Shipped",
    },
    {
      id: "#ORD-1004",
      customer: "Ayesha Noor",
      product: "Backpack Bags",
      amount: 2499,
      status: "Cancelled",
    },
  ];

  const salesData = [
    { month: "Jan", value: 42000 },
    { month: "Feb", value: 56000 },
    { month: "Mar", value: 48000 },
    { month: "Apr", value: 72000 },
    { month: "May", value: 64000 },
    { month: "Jun", value: 88000 },
    { month: "Jul", value: 76000 },
  ];

  const maxSales = Math.max(...salesData.map((item) => item.value));

  const getOrderStatus = (status) => {
    const statusStyles = {
      Delivered: "bg-emerald-50 text-emerald-600",
      Processing: "bg-amber-50 text-amber-600",
      Shipped: "bg-blue-50 text-blue-600",
      Cancelled: "bg-red-50 text-red-600",
    };

    const statusIcons = {
      Delivered: CheckCircle,
      Processing: Clock,
      Shipped: Truck,
      Cancelled: XCircle,
    };

    const Icon = statusIcons[status] || Clock;

    return (
      <span
        className={`
          inline-flex items-center gap-1.5 rounded-full px-3 py-1
          text-[12px] font-semibold
          ${statusStyles[status] || "bg-slate-100 text-slate-600"}
        `}
      >
        <Icon size={13} />
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SellerSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          {/* Top Bar */}
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
                    Seller Dashboard
                  </h1>

                  <p className="text-[13px] text-slate-500">
                    Manage your store and track your business
                  </p>
                </div>
              </div>

              <Link
                to="/seller/add-product"
                className="
                  inline-flex items-center gap-2 rounded-full
                  bg-[#4B50D8] px-4 py-2.5 text-[14px]
                  font-semibold text-white transition-all duration-200
                  hover:bg-[#3940C5] hover:shadow-md
                "
              >
                <Plus size={16} />
                <span className="hidden sm:inline">Add Product</span>
              </Link>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="mx-auto w-full max-w-[1500px] space-y-6 p-4 sm:p-6 lg:p-8">
            {/* Welcome Section */}
            <section className="rounded-lg bg-[#EEF1FF] px-5 py-5 sm:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[14px] font-medium text-[#4B50D8]">
                    Welcome back 👋
                  </p>

                  <h2 className="mt-1 text-[22px] font-bold text-[#172D55]">
                    Grow your store with ShopHub
                  </h2>

                  <p className="mt-1 max-w-[650px] text-[14px] text-slate-600">
                    Keep track of your sales, orders, products and customers
                    from one place.
                  </p>
                </div>

                <Link
                  to="/seller/store"
                  className="
                    inline-flex w-fit items-center gap-2 rounded-full
                    border border-[#C9CEF5] bg-white px-4 py-2.5
                    text-[14px] font-semibold text-[#4B50D8]
                    transition-colors hover:bg-[#F8F9FC]
                  "
                >
                  View Store
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatsCard
                title="Total Sales"
                value="Rs. 458,900"
                icon={<DollarSign size={21} />}
                change="+12.5%"
                changeType="positive"
              />

              <StatsCard
                title="Total Orders"
                value="1,248"
                icon={<ShoppingBag size={21} />}
                change="+8.2%"
                changeType="positive"
              />

              <StatsCard
                title="Products"
                value="86"
                icon={<Package size={21} />}
                change="+5.4%"
                changeType="positive"
              />

              <StatsCard
                title="Customers"
                value="3,642"
                icon={<Users size={21} />}
                change="+10.8%"
                changeType="positive"
              />
            </section>

            {/* Sales Overview + Quick Actions */}
            <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_300px]">
              {/* Sales Overview */}
              <div className="rounded-lg border border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <div>
                    <h2 className="text-[16px] font-bold text-[#172D55]">
                      Sales Overview
                    </h2>

                    <p className="mt-1 text-[14px] text-slate-500">
                      Your sales performance over the last 7 months
                    </p>
                  </div>

                  <select
                    className="
                      rounded-md border border-slate-200 bg-white
                      px-3 py-2 text-[13px] text-slate-600
                      outline-none focus:border-[#4B50D8]
                    "
                    defaultValue="7"
                  >
                    <option value="7">Last 7 Months</option>
                    <option value="6">Last 6 Months</option>
                    <option value="12">Last 12 Months</option>
                  </select>
                </div>

                <div className="p-5">
                  {/* Chart */}
                  <div className="flex h-[260px] items-end gap-3 sm:gap-5">
                    {salesData.map((item) => {
                      const height = (item.value / maxSales) * 100;

                      return (
                        <div
                          key={item.month}
                          className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                        >
                          <div className="group relative flex h-[210px] w-full items-end justify-center">
                            <div
                              className="
                                w-full max-w-[42px] rounded-t-md
                                bg-[#4B50D8] transition-all duration-300
                                hover:bg-[#3940C5]
                              "
                              style={{ height: `${height}%` }}
                              title={`Rs. ${item.value.toLocaleString()}`}
                            >
                              <div
                                className="
                                  absolute bottom-full left-1/2 mb-2
                                  hidden -translate-x-1/2 rounded-md
                                  bg-[#172D55] px-2 py-1
                                  text-[11px] font-medium text-white
                                  group-hover:block
                                "
                              >
                                Rs. {item.value.toLocaleString()}
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
              </div>

              {/* Quick Actions */}
              <div className="rounded-lg border border-slate-200 bg-white">
                <div className="border-b border-slate-200 px-5 py-4">
                  <h2 className="text-[16px] font-bold text-[#172D55]">
                    Quick Actions
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Manage your store quickly
                  </p>
                </div>

                <div className="space-y-3 p-5">
                  <Link
                    to="/seller/add-product"
                    className="
                      flex items-center gap-3 rounded-lg border
                      border-slate-200 p-3.5 transition-all duration-200
                      hover:border-[#D5D9FF] hover:bg-[#EEF1FF]
                    "
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                      <Plus size={19} />
                    </div>

                    <div>
                      <p className="text-[14px] font-semibold text-[#172D55]">
                        Add Product
                      </p>
                      <p className="mt-0.5 text-[12px] text-slate-500">
                        Add a new product
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/seller/products"
                    className="
                      flex items-center gap-3 rounded-lg border
                      border-slate-200 p-3.5 transition-all duration-200
                      hover:border-[#D5D9FF] hover:bg-[#EEF1FF]
                    "
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                      <Package size={19} />
                    </div>

                    <div>
                      <p className="text-[14px] font-semibold text-[#172D55]">
                        Manage Products
                      </p>
                      <p className="mt-0.5 text-[12px] text-slate-500">
                        View all products
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/seller/orders"
                    className="
                      flex items-center gap-3 rounded-lg border
                      border-slate-200 p-3.5 transition-all duration-200
                      hover:border-[#D5D9FF] hover:bg-[#EEF1FF]
                    "
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                      <ShoppingBag size={19} />
                    </div>

                    <div>
                      <p className="text-[14px] font-semibold text-[#172D55]">
                        View Orders
                      </p>
                      <p className="mt-0.5 text-[12px] text-slate-500">
                        Manage customer orders
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </section>

            {/* Recent Orders */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <h2 className="text-[16px] font-bold text-[#172D55]">
                    Recent Orders
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Latest orders from your customers
                  </p>
                </div>

                <Link
                  to="/seller/orders"
                  className="
                    text-[14px] font-semibold text-[#4B50D8]
                    transition-colors hover:text-[#3940C5]
                  "
                >
                  View All
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead className="bg-[#F8F9FC]">
                    <tr className="border-b border-slate-200">
                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Order
                      </th>

                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Customer
                      </th>

                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Product
                      </th>

                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Amount
                      </th>

                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="
                          border-b border-slate-100 last:border-b-0
                          transition-colors hover:bg-slate-50
                        "
                      >
                        <td className="px-5 py-4 text-[14px] font-semibold text-[#4B50D8]">
                          {order.id}
                        </td>

                        <td className="px-5 py-4 text-[14px] font-medium text-[#172D55]">
                          {order.customer}
                        </td>

                        <td className="max-w-[220px] truncate px-5 py-4 text-[14px] text-slate-600">
                          {order.product}
                        </td>

                        <td className="px-5 py-4 text-[14px] font-semibold text-[#172D55]">
                          Rs. {order.amount.toLocaleString()}
                        </td>

                        <td className="px-5 py-4">
                          {getOrderStatus(order.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Product Table */}
            <ProductTable products={dashboardProducts} />

            {/* Store Profile */}
            <StoreProfile
              store={{
                name: "Your Store",
                description:
                  "Welcome to your ShopHub store. Add your products and start growing your online business.",
                category: "Fashion & Clothing",
                location: "Islamabad, Pakistan",
                email: "seller@example.com",
                phone: "+92 300 1234567",
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;