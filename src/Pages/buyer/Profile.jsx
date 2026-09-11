import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Heart,
  Package,
  Settings,
  LogOut,
  Edit3,
  Save,
  X,
  ArrowLeft,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+92 300 1234567",
    address: "House 123, Street 10",
    city: "Islamabad",
    postalCode: "44000",
  });

  const [editProfile, setEditProfile] = useState(profile);

  const handleEdit = () => {
    setEditProfile(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditProfile((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("shophub-user");
    window.location.href = "/login";
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
              <User size={21} />
            </div>

            <div>
              <h1 className="text-[27px] font-bold text-[#172D55]">
                My Profile
              </h1>

              <p className="mt-0.5 text-[13px] text-slate-500">
                Manage your account and personal information
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4">
            {/* Profile Preview */}
            <div className="flex flex-col items-center border-b border-slate-200 pb-5 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                <User size={34} />
              </div>

              <h2 className="mt-3 text-[16px] font-bold text-[#172D55]">
                {profile.name}
              </h2>

              <p className="mt-1 max-w-full truncate text-[12px] text-slate-500">
                {profile.email}
              </p>
            </div>

            {/* Navigation */}
            <nav className="mt-4 space-y-1">
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg bg-[#EEF1FF] px-3 py-2.5 text-left text-[13px] font-semibold text-[#4B50D8]"
              >
                <User size={17} />
                Profile
              </button>

              <Link
                to="/orders"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-slate-600 transition-colors hover:bg-[#F8F9FC] hover:text-[#4B50D8]"
              >
                <Package size={17} />
                My Orders
              </Link>

              <Link
                to="/products"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-slate-600 transition-colors hover:bg-[#F8F9FC] hover:text-[#4B50D8]"
              >
                <Heart size={17} />
                Wishlist
              </Link>

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium text-slate-600 transition-colors hover:bg-[#F8F9FC] hover:text-[#4B50D8]"
              >
                <Settings size={17} />
                Account Settings
              </button>
            </nav>

            {/* Logout */}
            <div className="mt-4 border-t border-slate-200 pt-4">
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-red-500 transition-colors hover:bg-red-50"
              >
                <LogOut size={17} />
                Logout
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Personal Information */}
            <section className="rounded-xl border border-slate-200 bg-white">
              <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                  <h2 className="text-[18px] font-bold text-[#172D55]">
                    Personal Information
                  </h2>

                  <p className="mt-1 text-[13px] text-slate-500">
                    Update your personal account details
                  </p>
                </div>

                {!isEditing ? (
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[#D8DBFA] bg-[#EEF1FF] px-4 py-2 text-[13px] font-semibold text-[#4B50D8] transition-colors hover:bg-[#E3E6FF]"
                  >
                    <Edit3 size={15} />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                    >
                      <X size={15} />
                      Cancel
                    </button>

                    <button
                      type="button"
                      onClick={handleSave}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4B50D8] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#3940C5]"
                    >
                      <Save size={15} />
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-6">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#172D55]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="name"
                      value={
                        isEditing
                          ? editProfile.name
                          : profile.name
                      }
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`h-11 w-full rounded-lg border pl-10 pr-4 text-[14px] outline-none ${
                        isEditing
                          ? "border-slate-200 bg-white text-[#172D55] focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                          : "border-slate-100 bg-[#F8F9FC] text-slate-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#172D55]">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={
                        isEditing
                          ? editProfile.email
                          : profile.email
                      }
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`h-11 w-full rounded-lg border pl-10 pr-4 text-[14px] outline-none ${
                        isEditing
                          ? "border-slate-200 bg-white text-[#172D55] focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                          : "border-slate-100 bg-[#F8F9FC] text-slate-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#172D55]">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={
                        isEditing
                          ? editProfile.phone
                          : profile.phone
                      }
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`h-11 w-full rounded-lg border pl-10 pr-4 text-[14px] outline-none ${
                        isEditing
                          ? "border-slate-200 bg-white text-[#172D55] focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                          : "border-slate-100 bg-[#F8F9FC] text-slate-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#172D55]">
                    Address
                  </label>

                  <div className="relative">
                    <MapPin
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="address"
                      value={
                        isEditing
                          ? editProfile.address
                          : profile.address
                      }
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`h-11 w-full rounded-lg border pl-10 pr-4 text-[14px] outline-none ${
                        isEditing
                          ? "border-slate-200 bg-white text-[#172D55] focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                          : "border-slate-100 bg-[#F8F9FC] text-slate-600"
                      }`}
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#172D55]">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={
                      isEditing
                        ? editProfile.city
                        : profile.city
                    }
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`h-11 w-full rounded-lg border px-4 text-[14px] outline-none ${
                      isEditing
                        ? "border-slate-200 bg-white text-[#172D55] focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                        : "border-slate-100 bg-[#F8F9FC] text-slate-600"
                    }`}
                  />
                </div>

                {/* Postal Code */}
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#172D55]">
                    Postal Code
                  </label>

                  <input
                    type="text"
                    name="postalCode"
                    value={
                      isEditing
                        ? editProfile.postalCode
                        : profile.postalCode
                    }
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`h-11 w-full rounded-lg border px-4 text-[14px] outline-none ${
                      isEditing
                        ? "border-slate-200 bg-white text-[#172D55] focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                        : "border-slate-100 bg-[#F8F9FC] text-slate-600"
                    }`}
                  />
                </div>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
              <div>
                <h2 className="text-[18px] font-bold text-[#172D55]">
                  Quick Actions
                </h2>

                <p className="mt-1 text-[13px] text-slate-500">
                  Quickly access your account features
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* Orders */}
                <Link
                  to="/orders"
                  className="group flex items-center gap-4 rounded-lg border border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-[#D8DBFA] hover:bg-[#FAFAFF] hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                    <Package size={20} />
                  </div>

                  <div>
                    <h3 className="text-[14px] font-semibold text-[#172D55] transition-colors group-hover:text-[#4B50D8]">
                      My Orders
                    </h3>

                    <p className="mt-1 text-[12px] text-slate-500">
                      Track your recent orders
                    </p>
                  </div>
                </Link>

                {/* Shopping */}
                <Link
                  to="/products"
                  className="group flex items-center gap-4 rounded-lg border border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-[#D8DBFA] hover:bg-[#FAFAFF] hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
                    <ShoppingBag size={20} />
                  </div>

                  <div>
                    <h3 className="text-[14px] font-semibold text-[#172D55] transition-colors group-hover:text-[#4B50D8]">
                      Continue Shopping
                    </h3>

                    <p className="mt-1 text-[12px] text-slate-500">
                      Explore more products
                    </p>
                  </div>
                </Link>

                {/* Wishlist */}
                <Link
                  to="/products"
                  className="group flex items-center gap-4 rounded-lg border border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-[#D8DBFA] hover:bg-[#FAFAFF] hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FFF1F2] text-rose-500">
                    <Heart size={20} />
                  </div>

                  <div>
                    <h3 className="text-[14px] font-semibold text-[#172D55] transition-colors group-hover:text-[#4B50D8]">
                      Wishlist
                    </h3>

                    <p className="mt-1 text-[12px] text-slate-500">
                      View your saved products
                    </p>
                  </div>
                </Link>

                {/* Security */}
                <button
                  type="button"
                  className="group flex items-center gap-4 rounded-lg border border-slate-200 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#D8DBFA] hover:bg-[#FAFAFF] hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h3 className="text-[14px] font-semibold text-[#172D55] transition-colors group-hover:text-[#4B50D8]">
                      Account Security
                    </h3>

                    <p className="mt-1 text-[12px] text-slate-500">
                      Manage your account security
                    </p>
                  </div>
                </button>
              </div>
            </section>

            {/* Account Notice */}
            <div className="rounded-lg border border-[#D8DBFA] bg-[#EEF1FF] p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#4B50D8]">
                  <ShieldCheck size={16} />
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-[#172D55]">
                    Your information is secure
                  </p>

                  <p className="mt-1 text-[12px] leading-5 text-slate-500">
                    Your profile information is currently stored
                    locally for this frontend demo. Authentication
                    and database storage will be connected when
                    the backend is added.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;