import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

import {
  Menu,
  X,
  UserRound,
  ShoppingCart,
  Bell,
  Heart,
  ChevronDown,
  Package,
  Store,
  LayoutDashboard,
  Settings,
  HelpCircle,
  Truck,
  Tag,
  ShieldCheck,
  MessageCircle,
  Grid2X2,
  Shirt,
  Smartphone,
  Watch,
  Footprints,
  Home,
  Sparkles,
  Car,
  BriefcaseBusiness,
  ExternalLink,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const [isRight, setIsRight] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sellerOpen, setSellerOpen] = useState(false);

  const [notificationOpen, setNotificationOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const categoryTimeout = useRef(null);
  const sellerTimeout = useRef(null);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Stores",
      path: "/stores",
    },
    {
      name: "Categories",
      path: "/categories",
      dropdown: "categories",
    },
    {
      name: "Deals",
      path: "/deals",
    },
    {
      name: "New Arrivals",
      path: "/new-arrivals",
    },
  ];

  const categoryColumns = [
    {
      title: "Fashion & Apparel",
      items: [
        {
          name: "Clothing",
          path: "/categories/clothing",
          icon: Shirt,
        },
        {
          name: "Shoes",
          path: "/categories/shoes",
          icon: Footprints,
        },
        {
          name: "Watches",
          path: "/categories/watches",
          icon: Watch,
        },
        {
          name: "Bags & Accessories",
          path: "/categories/bags",
          icon: Tag,
        },
      ],
    },

    {
      title: "Electronics",
      items: [
        {
          name: "Mobile & Tablets",
          path: "/categories/mobile",
          icon: Smartphone,
        },
        {
          name: "Computers",
          path: "/categories/computers",
          icon: BriefcaseBusiness,
        },
        {
          name: "Smart Devices",
          path: "/categories/smart-devices",
          icon: Sparkles,
        },
        {
          name: "Accessories",
          path: "/categories/electronics-accessories",
          icon: Grid2X2,
        },
      ],
    },

    {
      title: "Home & Lifestyle",
      items: [
        {
          name: "Home & Living",
          path: "/categories/home",
          icon: Home,
        },
        {
          name: "Beauty",
          path: "/categories/beauty",
          icon: Sparkles,
        },
        {
          name: "Automotive",
          path: "/categories/automotive",
          icon: Car,
        },
        {
          name: "Sports & Outdoor",
          path: "/categories/sports",
          icon: ShieldCheck,
        },
      ],
    },
  ];

  const sellerLinks = [
    {
      title: "Start Selling",
      description:
        "Create your store and start selling online",
      path: "/seller",
      icon: Store,
    },

    {
      title: "Seller Dashboard",
      description:
        "Manage products, orders and your store",
      path: "/seller/dashboard",
      icon: LayoutDashboard,
    },

    {
      title: "Seller Orders",
      description:
        "View and manage customer orders",
      path: "/seller/orders",
      icon: Package,
    },

    {
      title: "Seller Settings",
      description:
        "Update your store and account settings",
      path: "/seller/settings",
      icon: Settings,
    },

    {
      title: "Seller Help Center",
      description:
        "Learn how to grow your online business",
      path: "/seller/help",
      icon: HelpCircle,
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "Order confirmed",
      description:
        "Your order has been successfully confirmed.",
      time: "5 min ago",
      icon: Package,
      unread: true,
    },

    {
      id: 2,
      title: "Shipment update",
      description:
        "Your parcel is currently on the way.",
      time: "1 hour ago",
      icon: Truck,
      unread: true,
    },

    {
      id: 3,
      title: "New deal available",
      description:
        "A product you may like is now on sale.",
      time: "3 hours ago",
      icon: Tag,
      unread: false,
    },

    {
      id: 4,
      title: "Account security",
      description:
        "Your account information is secure.",
      time: "Yesterday",
      icon: ShieldCheck,
      unread: false,
    },
  ];

  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length;

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const closeAll = () => {
    setCategoryOpen(false);
    setSellerOpen(false);
    setNotificationOpen(false);
    setProfileOpen(false);
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeAll();
    closeMobile();
  };

  /* =========================================================
     CATEGORY HOVER
  ========================================================= */

  const openCategory = () => {
    clearTimeout(categoryTimeout.current);

    setCategoryOpen(true);
    setSellerOpen(false);
  };

  const closeCategory = () => {
    categoryTimeout.current = setTimeout(() => {
      setCategoryOpen(false);
    }, 120);
  };

  /* =========================================================
     SELLER HOVER
  ========================================================= */

  const openSeller = () => {
    clearTimeout(sellerTimeout.current);

    setSellerOpen(true);
    setCategoryOpen(false);
  };

  const closeSeller = () => {
    sellerTimeout.current = setTimeout(() => {
      setSellerOpen(false);
    }, 120);
  };

  /* =========================================================
     OUTSIDE CLICK
  ========================================================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAll();
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );

      clearTimeout(categoryTimeout.current);
      clearTimeout(sellerTimeout.current);
    };
  }, []);

  /* =========================================================
     CLOSE MENUS WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    closeAll();
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* =======================================================
          NAVBAR
      ======================================================= */}

      <header className="sticky top-0 z-[1000] w-full bg-white">

        <nav className="border-b border-[#e6e6e6]">

          <div className="mx-auto flex h-[72px] max-w-[1500px] items-center px-4 sm:px-6 lg:px-8">

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex shrink-0 items-center gap-2"
            >
              <div className="flex items-center justify-center">

                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 27.5C6 27.5 7.5 11 18.5 7C24 5 31 7 33.5 12.5C36 18 32 23 26.5 24.5"
                    stroke="#4B50D8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M12 28C14 23 17 19 21 18"
                    stroke="#4B50D8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M19 28C21 24 24 22 28 22"
                    stroke="#4B50D8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

              </div>

              <span className="text-[22px] font-bold tracking-[-0.7px] text-[#4B50D8]">
                ShopHub
              </span>
            </Link>

            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <div className="ml-10 hidden h-full items-center lg:flex">

              {navLinks.map((link) => {
                const active = isActive(link.path);

                if (link.dropdown === "categories") {
                  return (
                    <div
                      key={link.name}
                      className="relative h-full"
                      onMouseEnter={openCategory}
                      onMouseLeave={closeCategory}
                    >
                      <Link
                        to={link.path}
                        onClick={handleLinkClick}
                        className={`
                          nav-link
                          group
                          relative
                          flex
                          h-full
                          items-center
                          gap-1.5
                          px-4
                          text-[14px]
                          font-medium
                          text-[#222]
                          transition-colors
                          duration-200
                          hover:text-[#4B50D8]
                        `}
                      >
                        {link.name}

                        <ChevronDown
                          size={14}
                          strokeWidth={1.8}
                          className={`
                            transition-transform
                            duration-200
                            ${categoryOpen
                              ? "rotate-180"
                              : ""
                            }
                          `}
                        />

                        <span
                          className={`
                            absolute
                            bottom-0
                            left-1/2
                            h-[2px]
                            -translate-x-1/2
                            rounded-full
                            bg-[#4B50D8]
                            transition-all
                            duration-300
                            ease-out
                            ${active
                              ? "w-[calc(100%-32px)]"
                              : "w-0 group-hover:w-[calc(100%-32px)]"
                            }
                          `}
                        />
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleLinkClick}
                    className="
                      nav-link
                      group
                      relative
                      flex
                      h-full
                      items-center
                      px-4
                      text-[14px]
                      font-medium
                      text-[#222]
                      transition-colors
                      duration-200
                      hover:text-[#4B50D8]
                    "
                  >
                    {link.name}

                    <span
                      className={`
                        absolute
                        bottom-0
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-[#4B50D8]
                        transition-all
                        duration-300
                        ease-out
                        ${isActive(link.path)
                          ? "w-[calc(100%-32px)]"
                          : "w-0 group-hover:w-[calc(100%-32px)]"
                        }
                      `}
                    />
                  </Link>
                );
              })}

              {/* =================================================
                  SELLER NAV
              ================================================= */}

              <div
                className="relative h-full"
                onMouseEnter={openSeller}
                onMouseLeave={closeSeller}
              >
                <Link
                  to="/seller"
                  onClick={handleLinkClick}
                  className="
                    group
                    relative
                    flex
                    h-full
                    items-center
                    gap-1.5
                    px-4
                    text-[14px]
                    font-medium
                    text-[#222]
                    transition-colors
                    duration-200
                    hover:text-[#4B50D8]
                  "
                >
                  Become a Seller

                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                    className={`
                      transition-transform
                      duration-200
                      ${sellerOpen
                        ? "rotate-180"
                        : ""
                      }
                    `}
                  />

                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#4B50D8]
                      transition-all
                      duration-300
                      ease-out
                      group-hover:w-[calc(100%-32px)]
                    "
                  />
                </Link>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div className="ml-auto flex items-center gap-1">

              {/* =================================================
                  HELP
              ================================================= */}

              <Link
                to="/help"
                onClick={handleLinkClick}
                className="
                  hidden
                  items-center
                  gap-2
                  rounded-md
                  px-3
                  py-2
                  text-[13px]
                  text-[#333]
                  transition-colors
                  hover:bg-[#f7f7f7]
                  hover:text-[#4B50D8]
                  xl:flex
                "
              >
                <HelpCircle
                  size={18}
                  strokeWidth={1.7}
                />

                Help
              </Link>

              {/* =================================================
                  WISHLIST
              ================================================= */}



              {/* =================================================
                  NOTIFICATION
              ================================================= */}

              <div
                ref={notificationRef}
                className="relative"
              >
                <button
                  type="button"
                  aria-label="Notifications"
                  onClick={() => {
                    setNotificationOpen(
                      (current) => !current
                    );

                    setProfileOpen(false);
                    setCategoryOpen(false);
                    setSellerOpen(false);
                  }}
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    text-[#222]
                    transition-all
                    duration-200
                    hover:bg-[#f7f7f7]
                    hover:text-[#4B50D8]
                  "
                >
                  <Bell
                    size={21}
                    strokeWidth={1.7}
                  />

                  {unreadCount > 0 && (
                    <span
                      className="
                        absolute
                        right-[8px]
                        top-[7px]
                        h-[7px]
                        w-[7px]
                        rounded-full
                        bg-[#4B50D8]
                        ring-2
                        ring-white
                      "
                    />
                  )}
                </button>

                {/* =================================================
                    NOTIFICATION POPUP
                ================================================= */}

                {notificationOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      top-[52px]
                      z-[1200]
                      w-[350px]
                      origin-top-right
                      animate-[popupIn_180ms_ease-out]
                    "
                  >
                    <div
                      className="
                        overflow-hidden
                        rounded-lg
                        border
                        border-[#e5e5e5]
                        bg-white
                        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                      "
                    >

                      {/* Header */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          border-b
                          border-[#eeeeee]
                          px-5
                          py-4
                        "
                      >
                        <div>
                          <h3 className="text-[15px] font-semibold text-[#222]">
                            Notifications
                          </h3>

                          <p className="mt-0.5 text-[11px] text-[#888]">
                            {unreadCount} unread
                            notifications
                          </p>
                        </div>

                        <button
                          type="button"
                          className="
                            text-[11px]
                            font-medium
                            text-[#4B50D8]
                            hover:underline
                          "
                        >
                          Mark all read
                        </button>
                      </div>

                      {/* Notification Items */}

                      <div className="max-h-[360px] overflow-y-auto">

                        {notifications.map(
                          (notification) => {
                            const Icon =
                              notification.icon;

                            return (
                              <div
                                key={notification.id}
                                className="
                                  flex
                                  gap-3
                                  border-b
                                  border-[#f1f1f1]
                                  px-4
                                  py-4
                                  transition-colors
                                  hover:bg-[#fafafa]
                                "
                              >
                                <div
                                  className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#E9EBF0]
                                    text-[#4B50D8]
                                  "
                                >
                                  <Icon
                                    size={17}
                                    strokeWidth={1.7}
                                  />
                                </div>

                                <div className="min-w-0 flex-1">

                                  <div className="flex items-start justify-between gap-2">
                                    <h4 className="text-[12px] font-semibold text-[#222]">
                                      {
                                        notification.title
                                      }
                                    </h4>

                                    {notification.unread && (
                                      <span className="mt-1 h-[6px] w-[6px] shrink-0 rounded-full bg-[#4B50D8]" />
                                    )}
                                  </div>

                                  <p className="mt-1 text-[11px] leading-4 text-[#777]">
                                    {
                                      notification.description
                                    }
                                  </p>

                                  <p className="mt-1.5 text-[10px] text-[#aaa]">
                                    {
                                      notification.time
                                    }
                                  </p>

                                </div>
                              </div>
                            );
                          }
                        )}

                      </div>

                      {/* Footer */}

                      <Link
                        to="/notifications"
                        onClick={handleLinkClick}
                        className="
                          flex
                          items-center
                          justify-center
                          gap-1.5
                          px-4
                          py-3
                          text-[12px]
                          font-medium
                          text-[#4B50D8]
                          transition-colors
                          hover:bg-[#fff8f3]
                        "
                      >
                        View all notifications

                        <ExternalLink
                          size={12}
                        />
                      </Link>

                    </div>
                  </div>
                )}
              </div>

              {/* =================================================
                  CART
              ================================================= */}

              <Link
                to="/cart"
                onClick={handleLinkClick}
                aria-label="Shopping cart"
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  text-[#222]
                  transition-all
                  duration-200
                  hover:bg-[#f7f7f7]
                  hover:text-[#4B50D8]
                "
              >
                <ShoppingCart
                  size={21}
                  strokeWidth={1.7}
                />

                <span
                  className="
                    absolute
                    right-[3px]
                    top-[2px]
                    flex
                    h-[17px]
                    min-w-[17px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#4B50D8]
                    px-1
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  0
                </span>
              </Link>

              {/* =================================================
                  PROFILE
              ================================================= */}

              <div
                ref={profileRef}
                className="relative"
              >
                <button
                  type="button"
                  aria-label="Account"
                  onClick={() => {
                    setProfileOpen(
                      (current) => !current
                    );

                    setNotificationOpen(false);
                    setCategoryOpen(false);
                    setSellerOpen(false);
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    text-[#222]
                    transition-all
                    duration-200
                    hover:bg-[#f7f7f7]
                    hover:text-[#4B50D8]
                  "
                >
                  <UserRound
                    size={21}
                    strokeWidth={1.7}
                  />
                </button>

                {/* =================================================
                    PROFILE DROPDOWN
                ================================================= */}

                {profileOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      top-[52px]
                      z-[1200]
                      w-[220px]
                      origin-top-right
                      animate-[popupIn_180ms_ease-out]
                    "
                  >
                    <div
                      className="
                        overflow-hidden
                        rounded-lg
                        border
                        border-[#e5e5e5]
                        bg-white
                        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                      "
                    >

                      <div className="border-b border-[#eeeeee] px-4 py-4">
                        <div className="flex items-center gap-3">

                          <div
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-full
                              bg-[#E9EBF0]
                              text-[#4B50D8]
                            "
                          >
                            <UserRound
                              size={20}
                            />
                          </div>

                          <div>
                            <p className="text-[13px] font-semibold text-[#222]">
                              My Account
                            </p>

                            <p className="mt-0.5 text-[10px] text-[#999]">
                              Manage your account
                            </p>
                          </div>

                        </div>
                      </div>

                      <div className="p-2">

                        <Link
                          to="/profile"
                          onClick={handleLinkClick}
                          className="profile-item"
                        >
                          <UserRound size={17} />
                          My Profile
                        </Link>

                        <Link
                          to="/orders"
                          onClick={handleLinkClick}
                          className="profile-item"
                        >
                          <Package size={17} />
                          My Orders
                        </Link>

                        <Link
                          to="/wishlist"
                          onClick={handleLinkClick}
                          className="profile-item"
                        >
                          <Heart size={17} />
                          Wishlist
                        </Link>

                        <Link
                          to="/messages"
                          onClick={handleLinkClick}
                          className="profile-item"
                        >
                          <MessageCircle size={17} />
                          Messages
                        </Link>

                        <Link
                          to="/settings"
                          onClick={handleLinkClick}
                          className="profile-item"
                        >
                          <Settings size={17} />
                          Settings
                        </Link>

                      </div>

                      <div className="border-t border-[#eeeeee] p-2">

                        <button
                          type="button"
                          className="
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-md
                            px-3
                            py-2.5
                            text-left
                            text-[12px]
                            font-medium
                            text-[#666]
                            transition-colors
                            hover:bg-[#fff5f0]
                            hover:text-[#4B50D8]
                          "
                        >
                          <LogOut size={17} />

                          Logout
                        </button>

                      </div>

                    </div>
                  </div>

                )}

              </div>

              <hr className="border-l-1 h-[30px]  border-gray-300 mr-3" />

              <div
      onClick={() => setIsRight(!isRight)}
      className="
        relative
        h-[28px]
        w-[50px]
        cursor-pointer
        rounded-full
        border
        border-[#4B50D8]
        bg-white
        px-1
      "
    >
      <div
        className={`
          absolute
          top-1/2
          flex
          h-[20px]
          w-[20px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-[#4B50D8]
          text-white
          transition-[left]
          duration-300
          ease-in-out
          ${isRight ? "left-[25px]" : "left-[3px]"}
        `}
      >
        <div className="transition-all duration-200">
          {isRight ? (
            <Moon
              size={12}
              strokeWidth={2}
            />
          ) : (
            <Sun
              size={12}
              strokeWidth={2}
            />
          )}
        </div>
      </div>
    </div>
  

              <button
                type="button"
                aria-label="Open menu"
                onClick={() => {
                  setMobileMenuOpen(
                    (current) => !current
                  );

                  setNotificationOpen(false);
                  setProfileOpen(false);
                }}
                className="
                  ml-1
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  text-[#222]
                  transition-colors
                  hover:bg-[#f7f7f7]
                  hover:text-[#4B50D8]
                  lg:hidden
                "
              >
                {mobileMenuOpen ? (
                  <X size={23} />
                ) : (
                  <Menu size={23} />
                )}
              </button>

            </div>
          </div>
        </nav>

        {/* =========================================================
            FULL WIDTH CATEGORY MEGA MENU
        ========================================================= */}

        <div
          onMouseEnter={openCategory}
          onMouseLeave={closeCategory}
          className={`
            absolute
            left-0
            right-0
            top-full
            z-[900]
            border-b
            border-[#e5e5e5]
            bg-white
            shadow-[0_12px_30px_rgba(0,0,0,0.08)]
            transition-all
            duration-200
            ${categoryOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <div className="mx-auto max-w-[1500px] px-6 py-8 lg:px-10">

            <div className="grid grid-cols-[220px_1fr] gap-10">

              {/* Left Heading */}

              <div className="border-r border-[#eeeeee] pr-8">

                <div className="flex items-center gap-2.5">

                  <Grid2X2
                    size={20}
                    strokeWidth={1.7}
                    className="text-[#4B50D8]"
                  />

                  <h3 className="text-[16px] font-semibold text-[#222]">
                    All Categories
                  </h3>

                </div>

                <p className="mt-3 text-[12px] leading-5 text-[#888]">
                  Explore products across our most
                  popular shopping categories.
                </p>

                <Link
                  to="/categories"
                  onClick={handleLinkClick}
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-1.5
                    text-[12px]
                    font-medium
                    text-[#4B50D8]
                    hover:underline
                  "
                >
                  View all categories

                  <ExternalLink size={12} />
                </Link>

              </div>

              {/* Categories */}

              <div className="grid grid-cols-3 gap-10">

                {categoryColumns.map(
                  (column) => (
                    <div key={column.title}>

                      <h4 className="mb-3 text-[13px] font-semibold text-[#222]">
                        {column.title}
                      </h4>

                      <div className="space-y-1">

                        {column.items.map(
                          (item) => {
                            const Icon =
                              item.icon;

                            return (
                              <Link
                                key={
                                  item.name
                                }
                                to={
                                  item.path
                                }
                                onClick={
                                  handleLinkClick
                                }
                                className="
                                  group
                                  flex
                                  items-center
                                  gap-3
                                  rounded-md
                                  px-2
                                  py-2.5
                                  transition-all
                                  duration-200
                                  hover:bg-[#fafafa]
                                "
                              >
                                <Icon
                                  size={17}
                                  strokeWidth={
                                    1.6
                                  }
                                  className="
                                    text-[#777]
                                    transition-colors
                                    duration-200
                                    group-hover:text-[#4B50D8]
                                  "
                                />

                                <span className="
                                  text-[12px]
                                  text-[#555]
                                  transition-colors
                                  duration-200
                                  group-hover:text-[#4B50D8]
                                ">
                                  {
                                    item.name
                                  }
                                </span>
                              </Link>
                            );
                          }
                        )}

                      </div>
                    </div>
                  )
                )}

              </div>

            </div>

            {/* Bottom Bar */}

            <div
              className="
                mt-7
                border-t
                border-[#eeeeee]
                pt-5
              "
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <Sparkles
                    size={16}
                    className="text-[#4B50D8]"
                  />

                  <span className="text-[12px] text-[#666]">
                    Discover trending products
                    and popular stores.
                  </span>

                </div>

                <Link
                  to="/all"
                  onClick={handleLinkClick}
                  className="
                    text-[12px]
                    font-medium
                    text-[#4B50D8]
                    hover:underline
                  "
                >
                  Explore everything
                </Link>

              </div>
            </div>

          </div>
        </div>

        {/* =========================================================
            FULL WIDTH SELLER MEGA MENU
        ========================================================= */}

        <div
          onMouseEnter={openSeller}
          onMouseLeave={closeSeller}
          className={`
            absolute
            left-0
            right-0
            top-full
            z-[900]
            border-b
            border-[#e5e5e5]
            bg-white
            shadow-[0_12px_30px_rgba(0,0,0,0.08)]
            transition-all
            duration-200
            ${sellerOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <div className="mx-auto max-w-[1500px] px-6 py-8 lg:px-10">

            <div className="grid grid-cols-[280px_1fr] gap-12">

              {/* Seller Introduction */}

              <div className="border-r border-[#eeeeee] pr-10">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-md
                      bg-[#E9EBF0]
                      text-[#4B50D8]
                    "
                  >
                    <Store
                      size={23}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-semibold text-[#222]">
                      Sell on ShopHub
                    </h3>

                    <p className="mt-0.5 text-[11px] text-[#999]">
                      Grow your business online
                    </p>
                  </div>

                </div>

                <p className="mt-4 text-[12px] leading-5 text-[#777]">
                  Build your own store, list products,
                  manage orders and reach more customers.
                </p>

                <Link
                  to="/seller"
                  onClick={handleLinkClick}
                  className="
                    mt-5
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    bg-[#4B50D8]
                    px-5
                    py-2.5
                    text-[12px]
                    font-semibold
                    text-white
                    transition-all
                    duration-200
                    hover:bg-[#e95e00]
                  "
                >
                  Start selling
                </Link>

              </div>

              {/* Seller Options */}

              <div>

                <div className="mb-4">

                  <h3 className="text-[15px] font-semibold text-[#222]">
                    Seller Center
                  </h3>

                  <p className="mt-1 text-[11px] text-[#999]">
                    Everything you need to manage
                    your business.
                  </p>

                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2">

                  {sellerLinks.map(
                    (item) => {
                      const Icon =
                        item.icon;

                      return (
                        <Link
                          key={item.title}
                          to={item.path}
                          onClick={
                            handleLinkClick
                          }
                          className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-md
                            px-3
                            py-3
                            transition-all
                            duration-200
                            hover:bg-[#fafafa]
                          "
                        >

                          <div
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-md
                              bg-[#f7f7f7]
                              text-[#666]
                              transition-all
                              duration-200
                              group-hover:bg-[#E9EBF0]
                              group-hover:text-[#4B50D8]
                            "
                          >
                            <Icon
                              size={18}
                              strokeWidth={1.6}
                            />
                          </div>

                          <div>

                            <h4
                              className="
                                text-[12px]
                                font-semibold
                                text-[#333]
                                transition-colors
                                duration-200
                                group-hover:text-[#4B50D8]
                              "
                            >
                              {
                                item.title
                              }
                            </h4>

                            <p className="mt-0.5 text-[10px] text-[#999]">
                              {
                                item.description
                              }
                            </p>

                          </div>

                        </Link>
                      );
                    }
                  )}

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}

        <div
          className={`
            overflow-hidden
            border-t
            border-[#eeeeee]
            bg-white
            transition-all
            duration-300
            lg:hidden
            ${mobileMenuOpen
              ? "max-h-[900px] opacity-100"
              : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="max-h-[calc(100vh-73px)] overflow-y-auto px-4 py-4">

            {/* Main Links */}

            <div className="space-y-1">

              {navLinks
                .filter(
                  (link) =>
                    !link.dropdown
                )
                .map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-md
                      px-3
                      py-3
                      text-[14px]
                      font-medium
                      ${isActive(link.path)
                        ? "bg-[#E9EBF0] text-[#4B50D8]"
                        : "text-[#333] hover:bg-[#fafafa]"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                ))}

              {/* Categories */}

              <div>

                <Link
                  to="/categories"
                  onClick={handleLinkClick}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-md
                    px-3
                    py-3
                    text-[14px]
                    font-medium
                    text-[#333]
                    hover:bg-[#fafafa]
                  "
                >
                  <span className="flex items-center gap-2">
                    <Grid2X2 size={17} />
                    Categories
                  </span>

                  <ChevronDown
                    size={16}
                  />
                </Link>

                <div className="ml-3 border-l border-[#eeeeee] pl-3">

                  {categoryColumns
                    .flatMap(
                      (column) =>
                        column.items
                    )
                    .map((item) => {
                      const Icon =
                        item.icon;

                      return (
                        <Link
                          key={
                            item.name
                          }
                          to={item.path}
                          onClick={
                            handleLinkClick
                          }
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-md
                            px-3
                            py-2.5
                            text-[12px]
                            text-[#666]
                            hover:bg-[#fafafa]
                            hover:text-[#4B50D8]
                          "
                        >
                          <Icon
                            size={16}
                          />

                          {item.name}
                        </Link>
                      );
                    })}

                </div>
              </div>

              {/* Seller */}

              <div>

                <Link
                  to="/seller"
                  onClick={handleLinkClick}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-md
                    px-3
                    py-3
                    text-[14px]
                    font-medium
                    text-[#333]
                    hover:bg-[#fafafa]
                  "
                >
                  <span className="flex items-center gap-2">
                    <Store size={17} />
                    Become a Seller
                  </span>

                  <ChevronDown
                    size={16}
                  />
                </Link>

                <div className="ml-3 border-l border-[#eeeeee] pl-3">

                  {sellerLinks.map(
                    (item) => {
                      const Icon =
                        item.icon;

                      return (
                        <Link
                          key={
                            item.title
                          }
                          to={item.path}
                          onClick={
                            handleLinkClick
                          }
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-md
                            px-3
                            py-2.5
                            text-[12px]
                            text-[#666]
                            hover:bg-[#fafafa]
                            hover:text-[#4B50D8]
                          "
                        >
                          <Icon
                            size={16}
                          />

                          {item.title}
                        </Link>
                      );
                    }
                  )}

                </div>
              </div>

            </div>

            {/* Mobile Utility Links */}

            <div className="my-4 border-t border-[#eeeeee]" />

            <div className="grid grid-cols-2 gap-2">

              <Link
                to="/wishlist"
                onClick={handleLinkClick}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-md
                  px-3
                  py-3
                  text-[12px]
                  font-medium
                  text-[#444]
                  hover:bg-[#fafafa]
                "
              >
                <Heart size={17} />
                Wishlist
              </Link>

              <Link
                to="/cart"
                onClick={handleLinkClick}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-md
                  px-3
                  py-3
                  text-[12px]
                  font-medium
                  text-[#444]
                  hover:bg-[#fafafa]
                "
              >
                <ShoppingCart size={17} />
                Cart
              </Link>

              <Link
                to="/orders"
                onClick={handleLinkClick}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-md
                  px-3
                  py-3
                  text-[12px]
                  font-medium
                  text-[#444]
                  hover:bg-[#fafafa]
                "
              >
                <Package size={17} />
                Orders
              </Link>

              <Link
                to="/profile"
                onClick={handleLinkClick}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-md
                  px-3
                  py-3
                  text-[12px]
                  font-medium
                  text-[#444]
                  hover:bg-[#fafafa]
                "
              >
                <UserRound size={17} />
                Account
              </Link>

            </div>

          </div>
        </div>

      </header>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>
        {`
          @keyframes popupIn {
            from {
              opacity: 0;
              transform: translateY(-7px) scale(0.98);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .profile-item {
            display: flex;
            width: 100%;
            align-items: center;
            gap: 12px;
            border-radius: 6px;
            padding: 10px 12px;
            font-size: 12px;
            font-weight: 500;
            color: #444;
            transition:
              background-color 180ms ease,
              color 180ms ease;
          }

          .profile-item:hover {
            background: #fafafa;
            color: #4B50D8;
          }

          @media (max-width: 1023px) {
            .nav-link {
              padding-left: 12px;
              padding-right: 12px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;