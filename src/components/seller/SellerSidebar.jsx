import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Store,
  Package,
  ShoppingBag,
  BarChart3,
  Settings,
  PlusCircle,
  ChevronLeft,
} from "lucide-react";

const SellerSidebar = ({ isOpen = true, onClose }) => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/seller/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Store",
      path: "/seller/store",
      icon: Store,
    },
    {
      name: "Products",
      path: "/seller/products",
      icon: Package,
    },
    {
      name: "Orders",
      path: "/seller/orders",
      icon: ShoppingBag,
    },
    {
      name: "Analytics",
      path: "/seller/analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      path: "/seller/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col
          border-r border-slate-200 bg-white
          transition-transform duration-300
          md:sticky md:top-0 md:z-30 md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex h-[70px] items-center justify-between border-b border-slate-200 px-5">

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4B50D8] text-white">
              <Store size={19} strokeWidth={2.3} />
            </div>

            <div>
              <h2 className="text-[15px] font-bold text-[#172D55]">
                Seller Panel
              </h2>

              <p className="text-[12px] text-slate-500">
                Manage your store
              </p>
            </div>
          </div>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#4B50D8] md:hidden"
            aria-label="Close sidebar"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-5">

          <p className="mb-3 px-3 text-[12px] font-semibold uppercase tracking-wide text-slate-400">
            Main Menu
          </p>

          <div className="space-y-1">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 rounded-lg px-3 py-2.5
                    text-[14px] font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#EEF1FF] text-[#4B50D8]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#4B50D8]"
                    }
                    `
                  }
                >
                  <Icon size={18} strokeWidth={2} />

                  <span>{item.name}</span>
                </NavLink>
              );
            })}

          </div>

          {/* Add Product */}
          <div className="mt-7">

            <p className="mb-3 px-3 text-[12px] font-semibold uppercase tracking-wide text-slate-400">
              Quick Action
            </p>

            <NavLink
              to="/seller/add-product"
              onClick={onClose}
              className="
                flex items-center justify-center gap-2
                rounded-lg
                bg-[#4B50D8]
                px-3
                py-2.5
                text-[14px]
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-[#3940C5]
                hover:shadow-md
              "
            >
              <PlusCircle size={17} />
              Add Product
            </NavLink>

          </div>
        </nav>

        {/* Bottom Store Card */}
        <div className="border-t border-slate-200 p-4">

          <div className="rounded-lg bg-[#F8F9FC] p-3">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                <Store size={17} />
              </div>

              <div className="min-w-0">
                <p className="truncate text-[14px] font-semibold text-[#172D55]">
                  Your Store
                </p>

                <p className="text-[12px] text-slate-500">
                  Active
                </p>
              </div>

              <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" />
            </div>

          </div>
        </div>
      </aside>
    </>
  );
};

export default SellerSidebar;