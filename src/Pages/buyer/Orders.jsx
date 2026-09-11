import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Package,
  Search,
  ShoppingBag,
  Truck,
  CreditCard,
  CalendarDays,
  MapPin,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const ORDERS_KEY = "shophub-orders";

const statusOptions = [
  "All",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [expandedOrder, setExpandedOrder] = useState(null);

  // Load orders from localStorage
  useEffect(() => {
    try {
      const savedOrders =
        JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];

      setOrders(Array.isArray(savedOrders) ? savedOrders : []);
    } catch {
      setOrders([]);
    }
  }, []);

  // Filter orders
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const orderId = String(order.id || "").toLowerCase();

      const productNames = (order.items || [])
        .map((item) => item.name || "")
        .join(" ")
        .toLowerCase();

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        !search ||
        orderId.includes(search) ||
        productNames.includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, statusFilter]);

  const toggleOrder = (orderId) => {
    setExpandedOrder((current) =>
      current === orderId ? null : orderId
    );
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return "Date unavailable";

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "Date unavailable";
    }

    return date.toLocaleDateString("en-PK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (dateValue) => {
    if (!dateValue) return "";

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "";
    }

    return date.toLocaleTimeString("en-PK", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "Delivered":
        return {
          wrapper:
            "bg-emerald-50 text-emerald-600 border-emerald-100",
          icon: <CheckCircle2 size={14} />,
        };

      case "Shipped":
        return {
          wrapper:
            "bg-blue-50 text-blue-600 border-blue-100",
          icon: <Truck size={14} />,
        };

      case "Cancelled":
        return {
          wrapper:
            "bg-red-50 text-red-600 border-red-100",
          icon: <XCircle size={14} />,
        };

      case "Processing":
      default:
        return {
          wrapper:
            "bg-amber-50 text-amber-600 border-amber-100",
          icon: <Clock3 size={14} />,
        };
    }
  };

  const getPaymentLabel = (paymentMethod) => {
    if (paymentMethod === "card") {
      return "Card Payment";
    }

    return "Cash on Delivery";
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <Navbar />

      {/* Header */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-7 sm:px-6 lg:px-10">
          <Link
            to="/"
            className="flex w-fit items-center gap-2 text-[13px] font-medium text-slate-500 transition-colors hover:text-[#4B50D8]"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
              <Package size={21} />
            </div>

            <div>
              <h1 className="text-[27px] font-bold text-[#172D55]">
                My Orders
              </h1>

              <p className="mt-0.5 text-[13px] text-slate-500">
                Track and manage your orders
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
        {/* Search + Filters */}
        <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-[420px]">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by order ID or product..."
                className="h-11 w-full rounded-full border border-slate-200 bg-[#F8F9FC] pl-11 pr-4 text-[14px] text-[#172D55] outline-none transition-all placeholder:text-slate-400 focus:border-[#4B50D8] focus:bg-white focus:ring-2 focus:ring-[#EEF1FF]"
              />
            </div>

            {/* Status Filters */}
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                    statusFilter === status
                      ? "bg-[#4B50D8] text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#C9CEF5] hover:bg-[#EEF1FF] hover:text-[#4B50D8]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Results Count */}
        {orders.length > 0 && (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[14px] text-slate-500">
              Showing{" "}
              <span className="font-semibold text-[#172D55]">
                {filteredOrders.length}
              </span>{" "}
              {filteredOrders.length === 1
                ? "order"
                : "orders"}
            </p>

            {statusFilter !== "All" && (
              <button
                type="button"
                onClick={() => setStatusFilter("All")}
                className="text-[13px] font-medium text-[#4B50D8] hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>
        )}

        {/* No Orders */}
        {orders.length === 0 ? (
          <section className="mt-6 flex min-h-[450px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
              <ShoppingBag size={34} />
            </div>

            <h2 className="mt-6 text-[23px] font-bold text-[#172D55]">
              No Orders Yet
            </h2>

            <p className="mt-2 max-w-[430px] text-[14px] leading-6 text-slate-500">
              You haven't placed any orders yet. Explore our
              products and place your first order.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4B50D8] px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#3940C5]"
            >
              <ShoppingBag size={17} />
              Start Shopping
            </Link>
          </section>
        ) : filteredOrders.length === 0 ? (
          /* No Search Results */
          <section className="mt-6 flex min-h-[350px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
              <Search size={27} />
            </div>

            <h2 className="mt-5 text-[21px] font-bold text-[#172D55]">
              No Orders Found
            </h2>

            <p className="mt-2 text-[14px] text-slate-500">
              Try changing your search or order status filter.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("All");
              }}
              className="mt-5 rounded-full bg-[#4B50D8] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#3940C5]"
            >
              Clear Filters
            </button>
          </section>
        ) : (
          /* Orders */
          <section className="mt-6 space-y-5">
            {filteredOrders.map((order) => {
              const statusStyles = getStatusStyles(
                order.status
              );

              const itemCount = (order.items || []).reduce(
                (total, item) =>
                  total + Number(item.quantity || 1),
                0
              );

              const isExpanded =
                expandedOrder === order.id;

              return (
                <article
                  key={order.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                >
                  {/* Order Header */}
                  <div className="border-b border-slate-200 p-5 sm:p-6">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                          <Package size={22} />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-[16px] font-bold text-[#172D55]">
                              Order #{order.id}
                            </h2>

                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyles.wrapper}`}
                            >
                              {statusStyles.icon}
                              {order.status || "Processing"}
                            </span>
                          </div>

                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-500">
                            <span className="inline-flex items-center gap-1.5">
                              <CalendarDays size={13} />
                              {formatDate(order.createdAt)}
                            </span>

                            {formatTime(order.createdAt) && (
                              <span>
                                {formatTime(order.createdAt)}
                              </span>
                            )}

                            <span>
                              {itemCount}{" "}
                              {itemCount === 1
                                ? "item"
                                : "items"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-5 sm:justify-end">
                        <div className="text-left sm:text-right">
                          <p className="text-[12px] text-slate-400">
                            Order Total
                          </p>

                          <p className="mt-1 text-[20px] font-bold text-[#172D55]">
                            Rs.{" "}
                            {Number(
                              order.total || 0
                            ).toLocaleString()}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            toggleOrder(order.id)
                          }
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-[#EEF1FF] hover:text-[#4B50D8]"
                          aria-label={
                            isExpanded
                              ? "Hide order details"
                              : "Show order details"
                          }
                        >
                          {isExpanded ? (
                            <ChevronUp size={17} />
                          ) : (
                            <ChevronDown size={17} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Order Items Preview */}
                  <div className="p-5 sm:p-6">
                    <div className="space-y-4">
                      {(order.items || [])
                        .slice(0, isExpanded ? undefined : 2)
                        .map((item, index) => (
                          <div
                            key={`${item.id}-${index}`}
                            className="flex items-center gap-4"
                          >
                            <Link
                              to={`/products/${item.id}`}
                              className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-[#F8F9FC]"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </Link>

                            <div className="min-w-0 flex-1">
                              <Link
                                to={`/products/${item.id}`}
                                className="block truncate text-[14px] font-semibold text-[#172D55] transition-colors hover:text-[#4B50D8]"
                                title={item.name}
                              >
                                {item.name}
                              </Link>

                              <p className="mt-1 text-[12px] text-slate-500">
                                {item.category}
                              </p>

                              <p className="mt-1 text-[12px] text-slate-500">
                                Qty:{" "}
                                <span className="font-medium text-[#172D55]">
                                  {item.quantity || 1}
                                </span>
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-[14px] font-bold text-[#172D55]">
                                Rs.{" "}
                                {(
                                  Number(item.price || 0) *
                                  Number(item.quantity || 1)
                                ).toLocaleString()}
                              </p>

                              <p className="mt-1 text-[11px] text-slate-400">
                                Rs.{" "}
                                {Number(
                                  item.price || 0
                                ).toLocaleString()}{" "}
                                each
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Hidden Items Count */}
                    {!isExpanded &&
                      (order.items || []).length > 2 && (
                        <button
                          type="button"
                          onClick={() =>
                            toggleOrder(order.id)
                          }
                          className="mt-4 text-[13px] font-medium text-[#4B50D8] hover:underline"
                        >
                          +{" "}
                          {(order.items || []).length - 2}{" "}
                          more{" "}
                          {(order.items || []).length - 2 ===
                          1
                            ? "item"
                            : "items"}
                        </button>
                      )}

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 md:grid-cols-2">
                        {/* Delivery */}
                        <div className="rounded-lg bg-[#F8F9FC] p-4">
                          <div className="flex items-center gap-2">
                            <MapPin
                              size={16}
                              className="text-[#4B50D8]"
                            />

                            <h3 className="text-[14px] font-bold text-[#172D55]">
                              Delivery Information
                            </h3>
                          </div>

                          <div className="mt-3 space-y-1.5 text-[13px] text-slate-500">
                            <p>
                              <span className="font-medium text-[#172D55]">
                                {order.customer?.fullName ||
                                  "Customer"}
                              </span>
                            </p>

                            <p>
                              {order.customer?.phone ||
                                "Phone not available"}
                            </p>

                            <p>
                              {order.customer?.address ||
                                "Address not available"}
                            </p>

                            <p>
                              {order.customer?.city || ""}
                              {order.customer?.postalCode
                                ? ` - ${order.customer.postalCode}`
                                : ""}
                            </p>
                          </div>
                        </div>

                        {/* Payment */}
                        <div className="rounded-lg bg-[#F8F9FC] p-4">
                          <div className="flex items-center gap-2">
                            <CreditCard
                              size={16}
                              className="text-[#4B50D8]"
                            />

                            <h3 className="text-[14px] font-bold text-[#172D55]">
                              Payment Information
                            </h3>
                          </div>

                          <div className="mt-3 space-y-2">
                            <div className="flex items-center justify-between gap-4">
                              <span className="text-[13px] text-slate-500">
                                Method
                              </span>

                              <span className="text-[13px] font-medium text-[#172D55]">
                                {getPaymentLabel(
                                  order.paymentMethod
                                )}
                              </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                              <span className="text-[13px] text-slate-500">
                                Subtotal
                              </span>

                              <span className="text-[13px] font-medium text-[#172D55]">
                                Rs.{" "}
                                {Number(
                                  order.subtotal || 0
                                ).toLocaleString()}
                              </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                              <span className="text-[13px] text-slate-500">
                                Shipping
                              </span>

                              <span className="text-[13px] font-medium text-[#172D55]">
                                Rs.{" "}
                                {Number(
                                  order.shipping || 0
                                ).toLocaleString()}
                              </span>
                            </div>

                            <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-2">
                              <span className="text-[13px] font-semibold text-[#172D55]">
                                Total
                              </span>

                              <span className="text-[15px] font-bold text-[#4B50D8]">
                                Rs.{" "}
                                {Number(
                                  order.total || 0
                                ).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Collapse */}
                    {isExpanded && (
                      <button
                        type="button"
                        onClick={() =>
                          toggleOrder(order.id)
                        }
                        className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4B50D8] hover:underline"
                      >
                        <ChevronUp size={15} />
                        Hide Details
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </section>
        )}

        {/* Demo Notice */}
        {orders.length > 0 && (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                <Package size={15} />
              </div>

              <div>
                <p className="text-[13px] font-semibold text-[#172D55]">
                  Order History
                </p>

                <p className="mt-1 text-[12px] leading-5 text-slate-500">
                  Your orders are currently stored in your
                  browser for this frontend demo. Later, this
                  data will be connected to the MERN backend
                  and MongoDB.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Orders;