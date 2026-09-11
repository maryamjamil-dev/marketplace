import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Upload,
  ImagePlus,
  X,
  Package,
} from "lucide-react";

const AddProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });

  const [images, setImages] = useState([]);

  const categories = [
    "Shoes",
    "Watches",
    "Fashion",
    "Electronics",
    "Home & Living",
    "Beauty & Personal Care",
    "Bags",
    "Accessories",
    "Sports",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages].slice(0, 5));
  };

  const removeImage = (index) => {
    setImages((prev) => {
      const updated = [...prev];

      URL.revokeObjectURL(updated[index].preview);

      updated.splice(index, 1);

      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      ...formData,
      images,
    };

    console.log("Product Data:", productData);

    alert("Product added successfully!");

    navigate("/seller/products");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="flex min-h-screen">

        {/* Main Content */}
        <main className="min-w-0 flex-1">

          {/* Header */}
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
            <div className="flex h-[70px] items-center px-4 sm:px-6 lg:px-8">

              <Link
                to="/seller/products"
                className="
                  inline-flex items-center gap-2
                  text-[14px] font-medium text-slate-600
                  transition-colors hover:text-[#4B50D8]
                "
              >
                <ArrowLeft size={17} />
                Back to Products
              </Link>

              <div className="mx-auto flex items-center gap-2">
                <div
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-lg bg-[#4B50D8] text-white
                  "
                >
                  <Package size={19} />
                </div>

                <span className="text-[18px] font-bold text-[#172D55]">
                  Add Product
                </span>
              </div>

              <div className="w-[120px]" />
            </div>
          </header>

          {/* Content */}
          <div className="mx-auto w-full max-w-[1000px] px-4 py-8 sm:px-6 lg:py-10">

            {/* Heading */}
            <div className="mb-7">
              <h1 className="text-[25px] font-bold text-[#172D55]">
                Add New Product
              </h1>

              <p className="mt-1 text-[14px] text-slate-500">
                Add your product details and make it available in your store.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Product Images */}
              <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                <div className="border-b border-slate-200 px-5 py-5 sm:px-7">
                  <h2 className="text-[17px] font-bold text-[#172D55]">
                    Product Images
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Upload up to 5 images of your product.
                  </p>
                </div>

                <div className="p-5 sm:p-7">

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">

                    {/* Upload Box */}
                    {images.length < 5 && (
                      <label
                        className="
                          flex aspect-square cursor-pointer
                          flex-col items-center justify-center
                          rounded-lg border-2 border-dashed
                          border-slate-300 bg-[#F8F9FC]
                          transition-all duration-200
                          hover:border-[#4B50D8]
                          hover:bg-[#EEF1FF]
                        "
                      >
                        <div
                          className="
                            flex h-11 w-11 items-center
                            justify-center rounded-full
                            bg-[#EEF1FF] text-[#4B50D8]
                          "
                        >
                          <ImagePlus size={21} />
                        </div>

                        <span className="mt-2 text-[13px] font-semibold text-[#172D55]">
                          Upload Image
                        </span>

                        <span className="mt-1 text-[11px] text-slate-400">
                          JPG, PNG
                        </span>

                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    )}

                    {/* Preview Images */}
                    {images.map((image, index) => (
                      <div
                        key={`${image.preview}-${index}`}
                        className="
                          group relative aspect-square
                          overflow-hidden rounded-lg
                          border border-slate-200 bg-[#F8F9FC]
                        "
                      >
                        <img
                          src={image.preview}
                          alt={`Product preview ${index + 1}`}
                          className="h-full w-full object-cover"
                        />

                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="
                            absolute right-2 top-2 flex h-7 w-7
                            items-center justify-center rounded-full
                            bg-white/95 text-slate-600 shadow-sm
                            transition-colors hover:bg-red-50
                            hover:text-red-500
                          "
                        >
                          <X size={15} />
                        </button>

                        {index === 0 && (
                          <span
                            className="
                              absolute bottom-2 left-2 rounded-full
                              bg-[#172D55] px-2.5 py-1
                              text-[11px] font-semibold text-white
                            "
                          >
                            Main Image
                          </span>
                        )}
                      </div>
                    ))}

                  </div>
                </div>
              </section>

              {/* Basic Information */}
              <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                <div className="border-b border-slate-200 px-5 py-5 sm:px-7">
                  <h2 className="text-[17px] font-bold text-[#172D55]">
                    Basic Information
                  </h2>

                  <p className="mt-1 text-[14px] text-slate-500">
                    Enter the basic details of your product.
                  </p>
                </div>

                <div className="space-y-5 p-5 sm:p-7">

                  {/* Product Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[14px] font-semibold text-[#172D55]"
                    >
                      Product Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Nike Air Max Shoes"
                      required
                      className="
                        w-full rounded-lg border border-slate-200
                        bg-white px-4 py-3 text-[14px]
                        text-[#172D55] outline-none
                        placeholder:text-slate-400
                        focus:border-[#4B50D8]
                        focus:ring-2 focus:ring-[#4B50D8]/10
                      "
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-[14px] font-semibold text-[#172D55]"
                    >
                      Category
                    </label>

                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="
                        w-full rounded-lg border border-slate-200
                        bg-white px-4 py-3 text-[14px]
                        text-[#172D55] outline-none
                        focus:border-[#4B50D8]
                        focus:ring-2 focus:ring-[#4B50D8]/10
                      "
                    >
                      <option value="">Select category</option>

                      {categories.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price + Stock */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="price"
                        className="mb-2 block text-[14px] font-semibold text-[#172D55]"
                      >
                        Price (PKR)
                      </label>

                      <input
                        id="price"
                        name="price"
                        type="number"
                        min="0"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="e.g. 12999"
                        required
                        className="
                          w-full rounded-lg border border-slate-200
                          bg-white px-4 py-3 text-[14px]
                          text-[#172D55] outline-none
                          placeholder:text-slate-400
                          focus:border-[#4B50D8]
                          focus:ring-2 focus:ring-[#4B50D8]/10
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="stock"
                        className="mb-2 block text-[14px] font-semibold text-[#172D55]"
                      >
                        Stock Quantity
                      </label>

                      <input
                        id="stock"
                        name="stock"
                        type="number"
                        min="0"
                        value={formData.stock}
                        onChange={handleChange}
                        placeholder="e.g. 25"
                        required
                        className="
                          w-full rounded-lg border border-slate-200
                          bg-white px-4 py-3 text-[14px]
                          text-[#172D55] outline-none
                          placeholder:text-slate-400
                          focus:border-[#4B50D8]
                          focus:ring-2 focus:ring-[#4B50D8]/10
                        "
                      />
                    </div>

                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="mb-2 block text-[14px] font-semibold text-[#172D55]"
                    >
                      Product Description
                    </label>

                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your product, its features, material, size, color, etc."
                      rows={6}
                      required
                      className="
                        w-full resize-none rounded-lg
                        border border-slate-200 bg-white
                        px-4 py-3 text-[14px] leading-relaxed
                        text-[#172D55] outline-none
                        placeholder:text-slate-400
                        focus:border-[#4B50D8]
                        focus:ring-2 focus:ring-[#4B50D8]/10
                      "
                    />
                  </div>

                </div>
              </section>

              {/* Product Status */}
              <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-7">

                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex h-10 w-10 shrink-0 items-center
                      justify-center rounded-lg bg-[#EEF1FF]
                      text-[#4B50D8]
                    "
                  >
                    <Package size={19} />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-bold text-[#172D55]">
                      Product Status
                    </h3>

                    <p className="mt-1 text-[14px] text-slate-500">
                      Your product will be active and visible in your store
                      after publishing.
                    </p>
                  </div>
                </div>

              </section>

              {/* Actions */}
              <div
                className="
                  flex flex-col-reverse gap-3
                  sm:flex-row sm:justify-end
                "
              >
                <Link
                  to="/seller/products"
                  className="
                    inline-flex items-center justify-center
                    rounded-full border border-slate-200
                    bg-white px-6 py-3 text-[14px]
                    font-semibold text-slate-600
                    transition-colors hover:bg-slate-50
                  "
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="
                    inline-flex items-center justify-center
                    gap-2 rounded-full bg-[#4B50D8]
                    px-7 py-3 text-[14px]
                    font-semibold text-white
                    transition-all duration-200
                    hover:bg-[#3940C5]
                    hover:shadow-md
                  "
                >
                  <Upload size={16} />
                  Add Product
                </button>
              </div>

            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddProduct;