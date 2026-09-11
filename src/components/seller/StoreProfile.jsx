import { Link } from "react-router-dom";
import {
  Store,
  MapPin,
  Mail,
  Phone,
  Edit,
  ExternalLink,
} from "lucide-react";

const StoreProfile = ({
  store = {
    name: "Your Store",
    description: "Your store description goes here.",
    category: "Fashion & Clothing",
    location: "Islamabad, Pakistan",
    email: "seller@example.com",
    phone: "+92 300 1234567",
    image: null,
  },
}) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <h2 className="text-[16px] font-bold text-[#172D55]">
            Store Profile
          </h2>

          <p className="mt-1 text-[14px] text-slate-500">
            Manage your store information
          </p>
        </div>

        <Link
          to="/seller/store"
          className="
            inline-flex items-center gap-2 rounded-full border
            border-slate-200 px-4 py-2 text-[14px] font-semibold
            text-[#4B50D8] transition-all duration-200
            hover:border-[#D5D9FF] hover:bg-[#EEF1FF]
          "
        >
          <Edit size={15} />
          Edit
        </Link>
      </div>

      {/* Store Info */}
      <div className="p-5">
        <div className="flex flex-col gap-5 sm:flex-row">
          {/* Store Image / Icon */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#EEF1FF] text-[#4B50D8]">
            {store.image ? (
              <img
                src={store.image}
                alt={store.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <Store size={32} strokeWidth={1.8} />
            )}
          </div>

          {/* Basic Info */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-[18px] font-bold text-[#172D55]">
                {store.name}
              </h3>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-600">
                Active
              </span>
            </div>

            <p className="mt-1 text-[14px] font-medium text-[#4B50D8]">
              {store.category}
            </p>

            <p className="mt-2 max-w-[600px] text-[14px] leading-relaxed text-slate-500">
              {store.description}
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-6 grid grid-cols-1 gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-lg bg-[#F8F9FC] px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
              <MapPin size={16} />
            </div>

            <div className="min-w-0">
              <p className="text-[12px] text-slate-400">
                Location
              </p>

              <p className="truncate text-[14px] font-medium text-[#172D55]">
                {store.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-[#F8F9FC] px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
              <Mail size={16} />
            </div>

            <div className="min-w-0">
              <p className="text-[12px] text-slate-400">
                Email
              </p>

              <p className="truncate text-[14px] font-medium text-[#172D55]">
                {store.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-[#F8F9FC] px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
              <Phone size={16} />
            </div>

            <div className="min-w-0">
              <p className="text-[12px] text-slate-400">
                Phone
              </p>

              <p className="text-[14px] font-medium text-[#172D55]">
                {store.phone}
              </p>
            </div>
          </div>

          <Link
            to="/seller/store"
            className="
              flex items-center justify-center gap-2 rounded-lg
              border border-dashed border-[#C9CEF5] px-4 py-3
              text-[14px] font-semibold text-[#4B50D8]
              transition-colors hover:bg-[#EEF1FF]
            "
          >
            <ExternalLink size={16} />
            View Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoreProfile;