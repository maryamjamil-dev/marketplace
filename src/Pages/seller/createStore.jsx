import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Store,
  Upload,
  MapPin,
  Mail,
  Phone,
  ArrowLeft,
} from "lucide-react";

const CreateStore = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    category: "",
    description: "",
    location: "",
    email: "",
    phone: "",
  });

  const [logoPreview, setLogoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Store Data:", formData);

    alert("Store created successfully!");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[70px] max-w-[1200px] items-center px-4 sm:px-6 lg:px-8">
          <Link
            to="/seller"
            className="
              flex items-center gap-2 text-[14px] font-medium
              text-slate-600 transition-colors
              hover:text-[#4B50D8]
            "
          >
            <ArrowLeft size={17} />
            Back
          </Link>

          <div className="mx-auto flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4B50D8] text-white">
              <Store size={19} />
            </div>

            <span className="text-[18px] font-bold text-[#172D55]">
              ShopHub
            </span>
          </div>

          <div className="w-[55px]" />
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto w-full max-w-[900px] px-4 py-8 sm:px-6 lg:py-10">
        {/* Page Heading */}
        <div className="mb-7 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
            <Store size={26} />
          </div>

          <h1 className="mt-4 text-[25px] font-bold text-[#172D55]">
            Create Your Store
          </h1>

          <p className="mx-auto mt-2 max-w-[560px] text-[14px] leading-relaxed text-slate-500">
            Set up your online store and start selling your products on
            ShopHub.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          {/* Store Information */}
          <div className="border-b border-slate-200 px-5 py-5 sm:px-7">
            <h2 className="text-[17px] font-bold text-[#172D55]">
              Store Information
            </h2>

            <p className="mt-1 text-[14px] text-slate-500">
              Add the basic information about your store.
            </p>
          </div>

          <div className="space-y-6 px-5 py-6 sm:px-7">
            {/* Store Logo */}
            <div>
              <label className="mb-2 block text-[14px] font-semibold text-[#172D55]">
                Store Logo
              </label>

              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-dashed border-slate-300 bg-[#F8F9FC]">
                  {logoPreview ? (
                    <img
                      src={logoPreview}
                      alt="Store logo preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Store size={28} className="text-slate-400" />
                  )}
                </div>

                <label
                  className="
                    inline-flex cursor-pointer items-center gap-2
                    rounded-full border border-slate-200 bg-white
                    px-4 py-2.5 text-[14px] font-semibold
                    text-[#4B50D8] transition-colors
                    hover:bg-[#EEF1FF]
                  "
                >
                  <Upload size={16} />
                  Upload Logo

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="hidden"
                  />
                </label>
              </div>

              <p className="mt-2 text-[12px] text-slate-400">
                Recommended: square image, PNG or JPG.
              </p>
            </div>

            {/* Store Name + Category */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="storeName"
                  className="mb-2 block text-[14px] font-semibold text-[#172D55]"
                >
                  Store Name
                </label>

                <input
                  id="storeName"
                  name="storeName"
                  type="text"
                  value={formData.storeName}
                  onChange={handleChange}
                  placeholder="Enter store name"
                  required
                  className="
                    w-full rounded-lg border border-slate-200
                    bg-white px-4 py-3 text-[14px] text-[#172D55]
                    outline-none transition-colors
                    placeholder:text-slate-400
                    focus:border-[#4B50D8] focus:ring-2
                    focus:ring-[#4B50D8]/10
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-[14px] font-semibold text-[#172D55]"
                >
                  Store Category
                </label>

                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="
                    w-full rounded-lg border border-slate-200
                    bg-white px-4 py-3 text-[14px] text-[#172D55]
                    outline-none transition-colors
                    focus:border-[#4B50D8] focus:ring-2
                    focus:ring-[#4B50D8]/10
                  "
                >
                  <option value="">Select category</option>
                  <option value="Fashion & Clothing">
                    Fashion & Clothing
                  </option>
                  <option value="Electronics">Electronics</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Beauty & Personal Care">
                    Beauty & Personal Care
                  </option>
                  <option value="Home & Living">Home & Living</option>
                  <option value="Sports">Sports</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-[14px] font-semibold text-[#172D55]"
              >
                Store Description
              </label>

              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell customers about your store..."
                rows={4}
                required
                className="
                  w-full resize-none rounded-lg border border-slate-200
                  bg-white px-4 py-3 text-[14px] text-[#172D55]
                  outline-none transition-colors
                  placeholder:text-slate-400
                  focus:border-[#4B50D8] focus:ring-2
                  focus:ring-[#4B50D8]/10
                "
              />
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-[14px] font-semibold text-[#172D55]"
              >
                Store Location
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Islamabad, Pakistan"
                  required
                  className="
                    w-full rounded-lg border border-slate-200
                    bg-white py-3 pl-11 pr-4 text-[14px]
                    text-[#172D55] outline-none transition-colors
                    placeholder:text-slate-400
                    focus:border-[#4B50D8] focus:ring-2
                    focus:ring-[#4B50D8]/10
                  "
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-slate-200 px-5 py-5 sm:px-7">
            <h2 className="text-[17px] font-bold text-[#172D55]">
              Contact Information
            </h2>

            <p className="mt-1 text-[14px] text-slate-500">
              Add contact details customers can use to reach you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 px-5 pb-7 sm:grid-cols-2 sm:px-7">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[14px] font-semibold text-[#172D55]"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="store@example.com"
                  required
                  className="
                    w-full rounded-lg border border-slate-200
                    bg-white py-3 pl-11 pr-4 text-[14px]
                    text-[#172D55] outline-none transition-colors
                    placeholder:text-slate-400
                    focus:border-[#4B50D8] focus:ring-2
                    focus:ring-[#4B50D8]/10
                  "
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-[14px] font-semibold text-[#172D55]"
              >
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  required
                  className="
                    w-full rounded-lg border border-slate-200
                    bg-white py-3 pl-11 pr-4 text-[14px]
                    text-[#172D55] outline-none transition-colors
                    placeholder:text-slate-400
                    focus:border-[#4B50D8] focus:ring-2
                    focus:ring-[#4B50D8]/10
                  "
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div
            className="
              flex flex-col-reverse gap-3 border-t border-slate-200
              bg-[#F8F9FC] px-5 py-4 sm:flex-row sm:justify-end sm:px-7
            "
          >
            <Link
              to="/seller"
              className="
                inline-flex items-center justify-center rounded-full
                border border-slate-200 bg-white px-5 py-2.5
                text-[14px] font-semibold text-slate-600
                transition-colors hover:bg-slate-50
              "
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="
                inline-flex items-center justify-center rounded-full
                bg-[#4B50D8] px-6 py-2.5 text-[14px]
                font-semibold text-white transition-all duration-200
                hover:bg-[#3940C5] hover:shadow-md
              "
            >
              Create Store
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateStore;