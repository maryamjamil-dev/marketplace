import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  Bell,
  ChevronDown,
  LogOut,
  Package,
  UserCircle,
} from "lucide-react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [cartCount] = useState(0);

  const navigate = useNavigate();

  // Only these navbar links remain
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Stores", path: "/stores" },
    { label: "Categories", path: "/categories", hasDropdown: true },
  ];

  const handleSearch = (event) => {
    event.preventDefault();

    const value = searchTerm.trim();

    if (!value) return;

    navigate(`/products?search=${encodeURIComponent(value)}`);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeProfileMenu = () => {
    setIsProfileOpen(false);
  };

  return (
    <nav className="w-full border-b border-slate-200 bg-white">

      {/* ================= TOP NAVBAR ================= */}
      <div className="mx-auto flex h-[70px] w-full max-w-[1440px] items-center gap-7 px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-2 text-[20px] font-bold tracking-[-0.02em] text-[#172d55]"
        >
          <span className="flex h-[32px] w-[32px] items-center justify-center rounded-[6px] bg-[#233d91] text-white">
            <ShoppingCart size={17} strokeWidth={2.5} />
          </span>

          <span>ShopHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="flex items-center gap-1 whitespace-nowrap text-[14px] font-medium text-[#172d55] transition-colors hover:text-[#4b50d8]"
            >
              {link.label}

              {link.hasDropdown && (
                <ChevronDown size={13} strokeWidth={2} />
              )}
            </Link>
          ))}

          {/* Become a Seller */}
          <Link
            to="/seller"
            className="whitespace-nowrap text-[14px] font-medium text-[#172d55] transition-colors hover:text-[#4b50d8]"
          >
            Become a Seller
          </Link>

        </div>

        {/* Right Side Icons */}
        <div className="ml-auto flex shrink-0 items-center gap-5 text-[#172d55]">

          {/* Favourite */}
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="transition-colors hover:text-[#4b50d8]"
          >
            <Heart size={18} strokeWidth={1.8} />
          </Link>

          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative transition-colors hover:text-[#4b50d8]"
          >
            <Bell size={18} strokeWidth={1.8} />

            <span className="absolute right-[-2px] top-[-2px] h-[6px] w-[6px] rounded-full bg-[#4b50d8]" />
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative transition-colors hover:text-[#4b50d8]"
          >
            <ShoppingCart size={18} strokeWidth={1.8} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#4b50d8] px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProfileOpen(true)}
            onMouseLeave={() => setIsProfileOpen(false)}
          >
            <button
              type="button"
              aria-label="Profile menu"
              aria-expanded={isProfileOpen}
              onClick={() => setIsProfileOpen((open) => !open)}
              className="flex items-center gap-1 transition-colors hover:text-[#4b50d8]"
            >
              <User size={18} strokeWidth={1.8} />

              <ChevronDown
                size={12}
                strokeWidth={2}
                className={`hidden sm:block transition-transform ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 top-full z-50 w-[200px] pt-3">

                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">

                  {/* My Account */}
                  <Link
                    to="/profile"
                    onClick={closeProfileMenu}
                    className="flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-[#172d55] transition-colors hover:bg-[#f5f6ff] hover:text-[#4b50d8]"
                  >
                    <UserCircle size={17} strokeWidth={1.8} />
                    <span>My Account</span>
                  </Link>

                  {/* Orders */}
                  <Link
                    to="/orders"
                    onClick={closeProfileMenu}
                    className="flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-[#172d55] transition-colors hover:bg-[#f5f6ff] hover:text-[#4b50d8]"
                  >
                    <Package size={17} strokeWidth={1.8} />
                    <span>Orders</span>
                  </Link>

                  {/* Wishlist */}
                  <Link
                    to="/wishlist"
                    onClick={closeProfileMenu}
                    className="flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-[#172d55] transition-colors hover:bg-[#f5f6ff] hover:text-[#4b50d8]"
                  >
                    <Heart size={17} strokeWidth={1.8} />
                    <span>Wishlist</span>
                  </Link>

                  {/* Divider */}
                  <div className="border-t border-slate-100" />

                  {/* Logout */}
                  <button
                    type="button"
                    onClick={() => {
                      closeProfileMenu();
                      console.log("Logout clicked");
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] font-medium text-red-500 transition-colors hover:bg-red-50"
                  >
                    <LogOut size={17} strokeWidth={1.8} />
                    <span>Logout</span>
                  </button>

                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="text-[#172d55] transition-colors hover:text-[#4b50d8] lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </button>

        </div>
      </div>

      {/* ================= SEARCH ROW ================= */}
      <div className="border-t border-slate-100 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-3 sm:px-8 lg:px-10">

          <form onSubmit={handleSearch}>
            <div className="relative mx-auto w-full max-w-[700px]">

              <Search
                size={18}
                strokeWidth={2}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products, stores..."
                aria-label="Search products and stores"
                className="h-[44px] w-full rounded-full border border-slate-200 bg-[#f8f9fc] pl-11 pr-4 text-[14px] text-[#172d55] outline-none placeholder:text-slate-400 focus:border-[#6870e9] focus:ring-2 focus:ring-[#6870e9]/10"
              />

            </div>
          </form>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-200 lg:hidden ${
          isMobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1440px] space-y-3 px-5 py-4 sm:px-8">

          <div className="grid grid-cols-2 gap-1">

            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={closeMobileMenu}
                className="rounded-md px-3 py-3 text-[14px] font-medium text-[#172d55] transition-colors hover:bg-[#f2f3ff] hover:text-[#4b50d8]"
              >
                {link.label}
              </Link>
            ))}

            {/* Become a Seller */}
            <Link
              to="/seller"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-[14px] font-medium text-[#172d55] transition-colors hover:bg-[#f2f3ff] hover:text-[#4b50d8]"
            >
              Become a Seller
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-[14px] font-medium text-[#172d55] hover:bg-[#f2f3ff] hover:text-[#4b50d8]"
            >
              Wishlist
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-[14px] font-medium text-[#172d55] hover:bg-[#f2f3ff] hover:text-[#4b50d8]"
            >
              Cart
            </Link>

            {/* Orders */}
            <Link
              to="/orders"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-[14px] font-medium text-[#172d55] hover:bg-[#f2f3ff] hover:text-[#4b50d8]"
            >
              Orders
            </Link>

            {/* My Account */}
            <Link
              to="/profile"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-[14px] font-medium text-[#172d55] hover:bg-[#f2f3ff] hover:text-[#4b50d8]"
            >
              My Account
            </Link>

          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;