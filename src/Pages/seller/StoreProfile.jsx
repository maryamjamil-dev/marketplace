import { useState } from "react";
import {
  Store,
  CheckCircle2,
  Pencil,
  Copy,
  Save,
  Image as ImageIcon,
  Link as LinkIcon,
  Package,
  ShoppingBag,
  TrendingUp,
  Users,
  ChevronRight,
} from "lucide-react";

import SellerSidebar from "../../components/seller/SellerSidebar";

const StoreProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  const [storeData, setStoreData] = useState({
    storeName: "Ahmad Store",
    username: "@ahmadstore",
    description:
      "Premium quality products at affordable prices.",
    storeUrl: "ahmadstore.shophub.com",
    categories: ["Shoes", "Watches", "Fashion"],
  });

  const [editData, setEditData] = useState(storeData);

  const handleEdit = () => {
    setEditData(storeData);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditData(storeData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setStoreData(editData);
    setIsEditing(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://${storeData.storeUrl}`
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="flex min-h-screen">
        {/* ================= SIDEBAR ================= */}
        <SellerSidebar />

        {/* ================= MAIN ================= */}
        <main className="min-w-0 flex-1">
          {/* Top Header */}
          <header className="flex h-[72px] items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-7 lg:px-9">
            <div>
              <h1 className="text-[20px] font-bold text-[#172D55]">
                Store Profile
              </h1>

              <p className="mt-0.5 text-[12px] text-slate-500">
                Manage your store profile and information
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                <Store size={17} />
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 xl:grid-cols-[1fr_260px]">
              {/* ================= CENTER CONTENT ================= */}
              <div className="space-y-5">
                {/* Store Profile Card */}
                <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  {/* Store Header */}
                  <div className="border-b border-slate-200 p-5 sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        {/* Store Logo */}
                        <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-[#F8F9FC]">
                          <div className="flex h-full w-full items-center justify-center bg-[#172D55]">
                            <Store
                              size={28}
                              className="text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-[18px] font-bold text-[#172D55]">
                              {storeData.storeName}
                            </h2>

                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">
                              <CheckCircle2 size={12} />
                              Active
                            </span>
                          </div>

                          <p className="mt-1 text-[12px] text-slate-500">
                            {storeData.username}
                          </p>
                        </div>
                      </div>

                      {!isEditing ? (
                        <button
                          type="button"
                          onClick={handleEdit}
                          className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-[12px] font-semibold text-[#172D55] transition-colors hover:border-[#D8DBFA] hover:bg-[#EEF1FF] hover:text-[#4B50D8]"
                        >
                          <Pencil size={14} />
                          Edit
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={handleCancel}
                            className="rounded-md border border-slate-200 px-3 py-2 text-[12px] font-medium text-slate-600 hover:bg-slate-50"
                          >
                            Cancel
                          </button>

                          <button
                            type="button"
                            onClick={handleSave}
                            className="inline-flex items-center gap-1.5 rounded-md bg-[#4B50D8] px-4 py-2 text-[12px] font-semibold text-white hover:bg-[#3940C5]"
                          >
                            <Save size={14} />
                            Save
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Form */}
                  <div className="p-5 sm:p-6">
                    <div className="grid grid-cols-1 gap-5">
                      {/* Store Name */}
                      <div>
                        <label className="mb-2 block text-[12px] font-semibold text-[#172D55]">
                          Store Name
                        </label>

                        <input
                          type="text"
                          name="storeName"
                          value={
                            isEditing
                              ? editData.storeName
                              : storeData.storeName
                          }
                          onChange={handleChange}
                          disabled={!isEditing}
                          className={`h-10 w-full rounded-md border px-3 text-[12px] outline-none ${
                            isEditing
                              ? "border-slate-200 bg-white text-[#172D55] focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                              : "border-slate-200 bg-white text-[#172D55]"
                          }`}
                        />
                      </div>

                      {/* Description */}
                      <div>
                        <label className="mb-2 block text-[12px] font-semibold text-[#172D55]">
                          About Store
                        </label>

                        <textarea
                          name="description"
                          value={
                            isEditing
                              ? editData.description
                              : storeData.description
                          }
                          onChange={handleChange}
                          disabled={!isEditing}
                          rows={3}
                          className={`w-full resize-none rounded-md border px-3 py-2.5 text-[12px] leading-5 outline-none ${
                            isEditing
                              ? "border-slate-200 bg-white text-[#172D55] focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                              : "border-slate-200 bg-white text-slate-600"
                          }`}
                        />
                      </div>

                      {/* Store URL */}
                      <div>
                        <label className="mb-2 block text-[12px] font-semibold text-[#172D55]">
                          Store URL
                        </label>

                        <div className="flex gap-2">
                          <div className="relative min-w-0 flex-1">
                            <LinkIcon
                              size={14}
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                              type="text"
                              value={
                                isEditing
                                  ? editData.storeUrl
                                  : storeData.storeUrl
                              }
                              disabled={!isEditing}
                              onChange={(e) =>
                                setEditData((current) => ({
                                  ...current,
                                  storeUrl: e.target.value,
                                }))
                              }
                              className={`h-10 w-full rounded-md border pl-9 pr-3 text-[12px] outline-none ${
                                isEditing
                                  ? "border-slate-200 bg-white text-[#172D55] focus:border-[#4B50D8] focus:ring-2 focus:ring-[#EEF1FF]"
                                  : "border-slate-200 bg-white text-slate-600"
                              }`}
                            />
                          </div>

                          <button
                            type="button"
                            onClick={handleCopy}
                            className="flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-slate-200 px-3 text-[11px] font-semibold text-slate-600 transition-colors hover:border-[#D8DBFA] hover:bg-[#EEF1FF] hover:text-[#4B50D8]"
                          >
                            <Copy size={13} />
                            {copied ? "Copied" : "Copy"}
                          </button>
                        </div>
                      </div>

                      {/* Categories */}
                      <div>
                        <label className="mb-2 block text-[12px] font-semibold text-[#172D55]">
                          Categories
                        </label>

                        <div className="flex flex-wrap gap-2">
                          {storeData.categories.map(
                            (category) => (
                              <span
                                key={category}
                                className="rounded-full border border-[#D8DBFA] bg-[#EEF1FF] px-3 py-1.5 text-[11px] font-medium text-[#4B50D8]"
                              >
                                {category}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Save Button */}
                    {isEditing && (
                      <div className="mt-6 flex justify-end">
                        <button
                          type="button"
                          onClick={handleSave}
                          className="inline-flex items-center gap-2 rounded-md bg-[#4B50D8] px-5 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#3940C5]"
                        >
                          <Save size={14} />
                          Save Changes
                        </button>
                      </div>
                    )}
                  </div>
                </section>
              </div>

              {/* ================= RIGHT COLUMN ================= */}
              <aside className="space-y-5">
                {/* How To Sell */}
                <section className="rounded-lg border border-slate-200 bg-white p-5">
                  <h2 className="text-[15px] font-bold text-[#172D55]">
                    How to Sell
                  </h2>

                  <div className="mt-5 space-y-5">
                    {/* Step 1 */}
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                        <Store size={15} />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold text-[#172D55]">
                          1. Create Your Store
                        </p>

                        <p className="mt-1 text-[10px] leading-4 text-slate-400">
                          Set up your store profile and
                          brand.
                        </p>
                      </div>
                    </div>

                    <div className="ml-4 h-4 border-l border-dashed border-slate-200" />

                    {/* Step 2 */}
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                        <Package size={15} />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold text-[#172D55]">
                          2. Add Products
                        </p>

                        <p className="mt-1 text-[10px] leading-4 text-slate-400">
                          Upload products, images and
                          details.
                        </p>
                      </div>
                    </div>

                    <div className="ml-4 h-4 border-l border-dashed border-slate-200" />

                    {/* Step 3 */}
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                        <TrendingUp size={15} />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold text-[#172D55]">
                          3. Set Prices
                        </p>

                        <p className="mt-1 text-[10px] leading-4 text-slate-400">
                          Choose your pricing and stock.
                        </p>
                      </div>
                    </div>

                    <div className="ml-4 h-4 border-l border-dashed border-slate-200" />

                    {/* Step 4 */}
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                        <ShoppingBag size={15} />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold text-[#172D55]">
                          4. Start Selling
                        </p>

                        <p className="mt-1 text-[10px] leading-4 text-slate-400">
                          Share your store link and get
                          orders.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-md border border-[#D8DBFA] bg-[#EEF1FF] py-2 text-[11px] font-semibold text-[#4B50D8] transition-colors hover:bg-[#E3E6FF]"
                  >
                    View Full Guide
                    <ChevronRight size={13} />
                  </button>
                </section>

                {/* Quick Stats */}
                <section className="rounded-lg border border-slate-200 bg-white p-5">
                  <h2 className="text-[15px] font-bold text-[#172D55]">
                    Quick Stats
                  </h2>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between rounded-md bg-[#F8F9FC] px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EEF1FF] text-[#4B50D8]">
                          <Package size={13} />
                        </div>

                        <span className="text-[11px] text-slate-500">
                          Total Products
                        </span>
                      </div>

                      <span className="text-[13px] font-bold text-[#172D55]">
                        5/5
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-md bg-[#F8F9FC] px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EEF1FF] text-[#4B50D8]">
                          <ShoppingBag size={13} />
                        </div>

                        <span className="text-[11px] text-slate-500">
                          Total Orders
                        </span>
                      </div>

                      <span className="text-[13px] font-bold text-[#172D55]">
                        12
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-md bg-[#F8F9FC] px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EEF1FF] text-[#4B50D8]">
                          <Users size={13} />
                        </div>

                        <span className="text-[11px] text-slate-500">
                          Customers
                        </span>
                      </div>

                      <span className="text-[13px] font-bold text-[#172D55]">
                        8
                      </span>
                    </div>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoreProfile;