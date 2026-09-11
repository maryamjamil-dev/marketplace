import { useState } from "react";
import {
  Menu,
  User,
  Store,
  Bell,
  Lock,
  CreditCard,
  Save,
  Mail,
  Phone,
  MapPin,
  Eye,
  EyeOff,
} from "lucide-react";

import SellerSidebar from "../../components/seller/SellerSidebar";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [profile, setProfile] = useState({
    name: "Seller Name",
    email: "seller@example.com",
    phone: "+92 300 1234567",
  });

  const [store, setStore] = useState({
    name: "Your Store",
    category: "Fashion & Clothing",
    location: "Islamabad, Pakistan",
  });

  const [notifications, setNotifications] = useState({
    orders: true,
    promotions: true,
    updates: false,
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleStoreChange = (e) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value,
    });
  };

  const handleNotificationChange = (name) => {
    setNotifications({
      ...notifications,
      [name]: !notifications[name],
    });
  };

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log("Profile:", profile);
    alert("Profile settings saved successfully!");
  };

  const handleSaveStore = (e) => {
    e.preventDefault();
    console.log("Store:", store);
    alert("Store settings saved successfully!");
  };

  const handleSaveNotifications = (e) => {
    e.preventDefault();
    console.log("Notifications:", notifications);
    alert("Notification settings saved successfully!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (password.newPassword !== password.confirm) {
      alert("New password and confirm password do not match.");
      return;
    }

    console.log("Password:", password);
    alert("Password changed successfully!");

    setPassword({
      current: "",
      newPassword: "",
      confirm: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SellerSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
            <div className="flex h-[70px] items-center px-4 sm:px-6 lg:px-8">
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
                    Settings
                  </h1>

                  <p className="text-[13px] text-slate-500">
                    Manage your account and store settings
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="mx-auto w-full max-w-[1100px] space-y-6 p-4 sm:p-6 lg:p-8">
            {/* Intro */}
            <section className="rounded-lg bg-[#EEF1FF] px-5 py-5 sm:px-6">
              <p className="text-[14px] font-medium text-[#4B50D8]">
                Account Settings
              </p>

              <h2 className="mt-1 text-[22px] font-bold text-[#172D55]">
                Manage your ShopHub account
              </h2>

              <p className="mt-1 max-w-[650px] text-[14px] text-slate-600">
                Update your profile, store information, notifications and
                security settings.
              </p>
            </section>

            {/* Profile Settings */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                  <User size={19} />
                </div>

                <div>
                  <h2 className="text-[16px] font-bold text-[#172D55]">
                    Profile Information
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Update your personal account information
                  </p>
                </div>
              </div>

              <form onSubmit={handleSaveProfile} className="p-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#172D55]">
                      Full Name
                    </label>

                    <div className="relative">
                      <User
                        size={17}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="
                          w-full rounded-lg border border-slate-200
                          bg-white py-2.5 pl-10 pr-3 text-[14px]
                          text-[#172D55] outline-none transition-colors
                          focus:border-[#4B50D8] focus:ring-2
                          focus:ring-[#4B50D8]/10
                        "
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#172D55]">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="
                          w-full rounded-lg border border-slate-200
                          bg-white py-2.5 pl-10 pr-3 text-[14px]
                          text-[#172D55] outline-none transition-colors
                          focus:border-[#4B50D8] focus:ring-2
                          focus:ring-[#4B50D8]/10
                        "
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#172D55]">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={17}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                        className="
                          w-full rounded-lg border border-slate-200
                          bg-white py-2.5 pl-10 pr-3 text-[14px]
                          text-[#172D55] outline-none transition-colors
                          focus:border-[#4B50D8] focus:ring-2
                          focus:ring-[#4B50D8]/10
                        "
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end border-t border-slate-100 pt-5">
                  <button
                    type="submit"
                    className="
                      inline-flex items-center gap-2 rounded-full
                      bg-[#4B50D8] px-5 py-2.5 text-[14px]
                      font-semibold text-white transition-all
                      hover:bg-[#3940C5] hover:shadow-md
                    "
                  >
                    <Save size={16} />
                    Save Changes
                  </button>
                </div>
              </form>
            </section>

            {/* Store Settings */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                  <Store size={19} />
                </div>

                <div>
                  <h2 className="text-[16px] font-bold text-[#172D55]">
                    Store Information
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Manage your store details
                  </p>
                </div>
              </div>

              <form onSubmit={handleSaveStore} className="p-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Store Name */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#172D55]">
                      Store Name
                    </label>

                    <div className="relative">
                      <Store
                        size={17}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="text"
                        name="name"
                        value={store.name}
                        onChange={handleStoreChange}
                        className="
                          w-full rounded-lg border border-slate-200
                          bg-white py-2.5 pl-10 pr-3 text-[14px]
                          text-[#172D55] outline-none transition-colors
                          focus:border-[#4B50D8] focus:ring-2
                          focus:ring-[#4B50D8]/10
                        "
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#172D55]">
                      Store Category
                    </label>

                    <select
                      name="category"
                      value={store.category}
                      onChange={handleStoreChange}
                      className="
                        w-full rounded-lg border border-slate-200
                        bg-white px-3 py-2.5 text-[14px]
                        text-[#172D55] outline-none transition-colors
                        focus:border-[#4B50D8] focus:ring-2
                        focus:ring-[#4B50D8]/10
                      "
                    >
                      <option>Fashion & Clothing</option>
                      <option>Electronics</option>
                      <option>Shoes</option>
                      <option>Watches</option>
                      <option>Beauty & Personal Care</option>
                      <option>Home & Living</option>
                      <option>Bags & Accessories</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-[14px] font-semibold text-[#172D55]">
                      Store Location
                    </label>

                    <div className="relative">
                      <MapPin
                        size={17}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="text"
                        name="location"
                        value={store.location}
                        onChange={handleStoreChange}
                        className="
                          w-full rounded-lg border border-slate-200
                          bg-white py-2.5 pl-10 pr-3 text-[14px]
                          text-[#172D55] outline-none transition-colors
                          focus:border-[#4B50D8] focus:ring-2
                          focus:ring-[#4B50D8]/10
                        "
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end border-t border-slate-100 pt-5">
                  <button
                    type="submit"
                    className="
                      inline-flex items-center gap-2 rounded-full
                      bg-[#4B50D8] px-5 py-2.5 text-[14px]
                      font-semibold text-white transition-all
                      hover:bg-[#3940C5] hover:shadow-md
                    "
                  >
                    <Save size={16} />
                    Save Store
                  </button>
                </div>
              </form>
            </section>

            {/* Notifications */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                  <Bell size={19} />
                </div>

                <div>
                  <h2 className="text-[16px] font-bold text-[#172D55]">
                    Notifications
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Choose which notifications you want to receive
                  </p>
                </div>
              </div>

              <form onSubmit={handleSaveNotifications} className="p-5">
                <div className="space-y-1">
                  {/* Orders */}
                  <div className="flex items-center justify-between gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-slate-50">
                    <div>
                      <p className="text-[14px] font-semibold text-[#172D55]">
                        New Orders
                      </p>

                      <p className="mt-1 text-[13px] text-slate-500">
                        Get notified when a customer places a new order.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleNotificationChange("orders")}
                      className={`
                        relative h-6 w-11 shrink-0 rounded-full
                        transition-colors
                        ${
                          notifications.orders
                            ? "bg-[#4B50D8]"
                            : "bg-slate-300"
                        }
                      `}
                      aria-label="Toggle new order notifications"
                    >
                      <span
                        className={`
                          absolute top-1 h-4 w-4 rounded-full bg-white
                          shadow-sm transition-transform
                          ${
                            notifications.orders
                              ? "translate-x-6"
                              : "translate-x-1"
                          }
                        `}
                      />
                    </button>
                  </div>

                  {/* Promotions */}
                  <div className="flex items-center justify-between gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-slate-50">
                    <div>
                      <p className="text-[14px] font-semibold text-[#172D55]">
                        Promotions & Offers
                      </p>

                      <p className="mt-1 text-[13px] text-slate-500">
                        Receive updates about ShopHub promotions and offers.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleNotificationChange("promotions")
                      }
                      className={`
                        relative h-6 w-11 shrink-0 rounded-full
                        transition-colors
                        ${
                          notifications.promotions
                            ? "bg-[#4B50D8]"
                            : "bg-slate-300"
                        }
                      `}
                      aria-label="Toggle promotion notifications"
                    >
                      <span
                        className={`
                          absolute top-1 h-4 w-4 rounded-full bg-white
                          shadow-sm transition-transform
                          ${
                            notifications.promotions
                              ? "translate-x-6"
                              : "translate-x-1"
                          }
                        `}
                      />
                    </button>
                  </div>

                  {/* Updates */}
                  <div className="flex items-center justify-between gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-slate-50">
                    <div>
                      <p className="text-[14px] font-semibold text-[#172D55]">
                        Platform Updates
                      </p>

                      <p className="mt-1 text-[13px] text-slate-500">
                        Get important updates and announcements from ShopHub.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleNotificationChange("updates")
                      }
                      className={`
                        relative h-6 w-11 shrink-0 rounded-full
                        transition-colors
                        ${
                          notifications.updates
                            ? "bg-[#4B50D8]"
                            : "bg-slate-300"
                        }
                      `}
                      aria-label="Toggle platform update notifications"
                    >
                      <span
                        className={`
                          absolute top-1 h-4 w-4 rounded-full bg-white
                          shadow-sm transition-transform
                          ${
                            notifications.updates
                              ? "translate-x-6"
                              : "translate-x-1"
                          }
                        `}
                      />
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex justify-end border-t border-slate-100 pt-5">
                  <button
                    type="submit"
                    className="
                      inline-flex items-center gap-2 rounded-full
                      bg-[#4B50D8] px-5 py-2.5 text-[14px]
                      font-semibold text-white transition-all
                      hover:bg-[#3940C5] hover:shadow-md
                    "
                  >
                    <Save size={16} />
                    Save Notifications
                  </button>
                </div>
              </form>
            </section>

            {/* Security */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                  <Lock size={19} />
                </div>

                <div>
                  <h2 className="text-[16px] font-bold text-[#172D55]">
                    Security
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Keep your account secure
                  </p>
                </div>
              </div>

              <form onSubmit={handleChangePassword} className="p-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Current Password */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-[14px] font-semibold text-[#172D55]">
                      Current Password
                    </label>

                    <div className="relative">
                      <Lock
                        size={17}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type={showPassword ? "text" : "password"}
                        name="current"
                        value={password.current}
                        onChange={handlePasswordChange}
                        placeholder="Enter current password"
                        className="
                          w-full rounded-lg border border-slate-200
                          bg-white py-2.5 pl-10 pr-11 text-[14px]
                          text-[#172D55] outline-none transition-colors
                          focus:border-[#4B50D8] focus:ring-2
                          focus:ring-[#4B50D8]/10
                        "
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="
                          absolute right-3 top-1/2
                          -translate-y-1/2 text-slate-400
                          hover:text-[#4B50D8]
                        "
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? (
                          <EyeOff size={17} />
                        ) : (
                          <Eye size={17} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#172D55]">
                      New Password
                    </label>

                    <input
                      type="password"
                      name="newPassword"
                      value={password.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter new password"
                      className="
                        w-full rounded-lg border border-slate-200
                        bg-white px-3 py-2.5 text-[14px]
                        text-[#172D55] outline-none transition-colors
                        focus:border-[#4B50D8] focus:ring-2
                        focus:ring-[#4B50D8]/10
                      "
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="mb-2 block text-[14px] font-semibold text-[#172D55]">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      name="confirm"
                      value={password.confirm}
                      onChange={handlePasswordChange}
                      placeholder="Confirm new password"
                      className="
                        w-full rounded-lg border border-slate-200
                        bg-white px-3 py-2.5 text-[14px]
                        text-[#172D55] outline-none transition-colors
                        focus:border-[#4B50D8] focus:ring-2
                        focus:ring-[#4B50D8]/10
                      "
                    />
                  </div>
                </div>

                <div className="mt-5 flex justify-end border-t border-slate-100 pt-5">
                  <button
                    type="submit"
                    className="
                      inline-flex items-center gap-2 rounded-full
                      bg-[#4B50D8] px-5 py-2.5 text-[14px]
                      font-semibold text-white transition-all
                      hover:bg-[#3940C5] hover:shadow-md
                    "
                  >
                    <Lock size={16} />
                    Change Password
                  </button>
                </div>
              </form>
            </section>

            {/* Payment Placeholder */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                  <CreditCard size={19} />
                </div>

                <div>
                  <h2 className="text-[16px] font-bold text-[#172D55]">
                    Payment Settings
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Manage your payment and payout information
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div className="rounded-lg border border-dashed border-[#C9CEF5] bg-[#F8F9FC] p-5 text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                    <CreditCard size={20} />
                  </div>

                  <h3 className="mt-3 text-[15px] font-semibold text-[#172D55]">
                    Payment Integration Coming Soon
                  </h3>

                  <p className="mx-auto mt-1 max-w-[500px] text-[14px] text-slate-500">
                    Payment gateway and seller payout settings will be
                    connected when the backend and payment system are added.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;