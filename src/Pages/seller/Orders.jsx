import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  ShoppingBag,
  Eye,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
  Menu,
} from "lucide-react";

import SellerSidebar from "../../components/seller/SellerSidebar";

const Orders = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Temporary orders data
  // Later this will come from the backend/API.
  const orders = [
    {
      id: "#ORD-1001",
      customer: "Ali Khan",
      email: "ali@example.com",
      product: "Nike Air Max Shoes",
      quantity: 1,
      amount: 12999,
      date: "Sep 10, 2026",
      status: "Delivered",
    },
    {
      id: "#ORD-1002",
      customer: "Sara Ahmed",
      email: "sara@example.com",
      product: "Casio Watch",
      quantity: 1,
      amount: 8999,
      date: "Sep 10, 2026",
      status: "Processing",
    },
    {
      id: "#ORD-1003",
      customer: "Hamza Malik",
      email: "hamza@example.com",
      product: "Wireless Earbuds",
      quantity: 2,
      amount: 8998,
      date: "Sep 09, 2026",
      status: "Shipped",
    },
    {
      id: "#ORD-1004",
      customer: "Ayesha Noor",
      email: "ayesha@example.com",
      product: "Backpack Bags",
      quantity: 1,
      amount: 2499,
      date: "Sep 08, 2026",
      status: "Cancelled",
    },
    {
      id: "#ORD-1005",
      customer: "Usman Raza",
      email: "usman@example.com",
      product: "Nike Air Max Shoes",
      quantity: 2,
      amount: 25998,
      date: "Sep 08, 2026",
      status: "Delivered",
    },
    {
      id: "#ORD-1006",
      customer: "Maham Ali",
      email: "maham@example.com",
      product: "Casio Watch",
      quantity: 1,
      amount: 8999,
      date: "Sep 07, 2026",
      status: "Processing",
    },
  ];

  const statuses = [
    "All",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        order.id.toLowerCase().includes(searchValue) ||
        order.customer.toLowerCase().includes(searchValue) ||
        order.product.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const getStatus = (status) => {
    const styles = {
      Processing: "bg-amber-50 text-amber-600",
      Shipped: "bg-blue-50 text-blue-600",
      Delivered: "bg-emerald-50 text-emerald-600",
      Cancelled: "bg-red-50 text-red-600",
    };

    const icons = {
      Processing: Clock,
      Shipped: Truck,
      Delivered: CheckCircle,
      Cancelled: XCircle,
    };

    const Icon = icons[status] || Clock;

    return (
      <span
        className={`
          inline-flex items-center gap-1.5 rounded-full
          px-3 py-1 text-[12px] font-semibold
          ${styles[status] || "bg-slate-100 text-slate-600"}
        `}
      >
        <Icon size={13} />
        {status}
      </span>
    );
  };

  const totalOrders = orders.length;

  const processingOrders = orders.filter(
    (order) => order.status === "Processing"
  ).length;

  const shippedOrders = orders.filter(
    (order) => order.status === "Shipped"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

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
            <div className="flex h-[70px] items-center px-4 sm:px-6 lg:px-8">

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-lg border border-slate-200
                    text-slate-600 hover:bg-[#EEF1FF]
                    hover:text-[#4B50D8] md:hidden
                  "
                  aria-label="Open sidebar"
                >
                  <Menu size={19} />
                </button>

                <div>
                  <h1 className="text-[20px] font-bold text-[#172D55]">
                    Orders
                  </h1>

                  <p className="text-[13px] text-slate-500">
                    Manage and track customer orders
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="mx-auto w-full max-w-[1500px] space-y-6 p-4 sm:p-6 lg:p-8">

            {/* Stats */}
            <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">

              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] font-medium text-slate-500">
                      Total Orders
                    </p>

                    <h2 className="mt-2 text-[24px] font-bold text-[#172D55]">
                      {totalOrders}
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                    <ShoppingBag size={21} />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] font-medium text-slate-500">
                      Processing
                    </p>

                    <h2 className="mt-2 text-[24px] font-bold text-[#172D55]">
                      {processingOrders}
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                    <Clock size={21} />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] font-medium text-slate-500">
                      Shipped
                    </p>

                    <h2 className="mt-2 text-[24px] font-bold text-[#172D55]">
                      {shippedOrders}
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Truck size={21} />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] font-medium text-slate-500">
                      Delivered
                    </p>

                    <h2 className="mt-2 text-[24px] font-bold text-[#172D55]">
                      {deliveredOrders}
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <CheckCircle size={21} />
                  </div>
                </div>
              </div>

            </section>

            {/* Orders */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">

              {/* Section Header */}
              <div className="border-b border-slate-200 px-5 py-4">
                <h2 className="text-[16px] font-bold text-[#172D55]">
                  All Orders
                </h2>

                <p className="mt-1 text-[14px] text-slate-500">
                  View and manage orders from your customers.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-col gap-3 border-b border-slate-200 p-4 lg:flex-row lg:items-center lg:justify-between">

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
                    placeholder="Search order, customer or product..."
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

                {/* Status Filter */}
                <div className="flex items-center gap-2">
                  <Filter size={17} className="text-slate-400" />

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="
                      rounded-lg border border-slate-200
                      bg-white px-4 py-3 text-[14px]
                      text-slate-600 outline-none
                      focus:border-[#4B50D8]
                      focus:ring-2 focus:ring-[#4B50D8]/10
                    "
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status === "All"
                          ? "All Orders"
                          : status}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[950px]">

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
                        Date
                      </th>

                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Amount
                      </th>

                      <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                        Status
                      </th>

                      <th className="px-5 py-3 text-right text-[14px] font-semibold text-slate-500">
                        Action
                      </th>

                    </tr>
                  </thead>

                  <tbody>
                    {filteredOrders.length > 0 ? (
                      filteredOrders.map((order) => (
                        <tr
                          key={order.id}
                          className="
                            border-b border-slate-100
                            last:border-b-0
                            transition-colors
                            hover:bg-slate-50
                          "
                        >

                          {/* Order */}
                          <td className="px-5 py-4">
                            <p className="text-[14px] font-semibold text-[#4B50D8]">
                              {order.id}
                            </p>
                          </td>

                          {/* Customer */}
                          <td className="px-5 py-4">
                            <p className="text-[14px] font-semibold text-[#172D55]">
                              {order.customer}
                            </p>

                            <p className="mt-1 text-[12px] text-slate-400">
                              {order.email}
                            </p>
                          </td>

                          {/* Product */}
                          <td className="px-5 py-4">
                            <p className="max-w-[220px] truncate text-[14px] font-medium text-slate-600">
                              {order.product}
                            </p>

                            <p className="mt-1 text-[12px] text-slate-400">
                              Qty: {order.quantity}
                            </p>
                          </td>

                          {/* Date */}
                          <td className="px-5 py-4 text-[14px] text-slate-600">
                            {order.date}
                          </td>

                          {/* Amount */}
                          <td className="px-5 py-4 text-[14px] font-semibold text-[#172D55]">
                            Rs. {order.amount.toLocaleString()}
                          </td>

                          {/* Status */}
                          <td className="px-5 py-4">
                            {getStatus(order.status)}
                          </td>

                          {/* Action */}
                          <td className="px-5 py-4">
                            <div className="flex justify-end">
                              <Link
                                to={`/seller/orders/${order.id}`}
                                title="View Order"
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
                                <Eye size={16} />
                              </Link>
                            </div>
                          </td>

                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="px-5 py-16 text-center"
                        >
                          <div className="flex flex-col items-center">

                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                              <ShoppingBag size={25} />
                            </div>

                            <h3 className="mt-4 text-[16px] font-semibold text-[#172D55]">
                              No Orders Found
                            </h3>

                            <p className="mt-1 text-[14px] text-slate-500">
                              Try changing your search or status filter.
                            </p>

                            <button
                              type="button"
                              onClick={() => {
                                setSearch("");
                                setStatusFilter("All");
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

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-slate-200 px-5 py-3">
                <p className="text-[14px] text-slate-500">
                  Showing {filteredOrders.length} of {orders.length} orders
                </p>

                <p className="text-[13px] text-slate-400">
                  Order management
                </p>
              </div>

            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orders;