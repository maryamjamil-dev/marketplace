import { Link } from "react-router-dom";
import { Edit, Trash2, Plus } from "lucide-react";

const ProductTable = ({ products = [] }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">

        <div>
          <h2 className="text-[16px] font-bold text-[#172D55]">
            My Products
          </h2>

          <p className="mt-1 text-[14px] text-slate-500">
            Manage your store products
          </p>
        </div>

        <Link
          to="/seller/add-product"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#4B50D8]
            px-4
            py-2
            text-[14px]
            font-semibold
            text-white
            transition-all
            hover:bg-[#3940C5]
            hover:shadow-md
          "
        >
          <Plus size={16} />
          Add Product
        </Link>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">

          {/* Table Head */}
          <thead className="bg-[#F8F9FC]">
            <tr className="border-b border-slate-200">

              <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                Product
              </th>

              <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                Category
              </th>

              <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                Price
              </th>

              <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                Stock
              </th>

              <th className="px-5 py-3 text-left text-[14px] font-semibold text-slate-500">
                Status
              </th>

              <th className="px-5 py-3 text-right text-[14px] font-semibold text-slate-500">
                Actions
              </th>

            </tr>
          </thead>

          {/* Table Body */}
          <tbody>

            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-slate-100 last:border-b-0 transition-colors hover:bg-slate-50"
                >

                  {/* Product */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">

                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-[#F8F9FC]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="max-w-[220px] truncate text-[14px] font-semibold text-[#172D55]">
                          {product.name}
                        </p>

                        <p className="mt-1 text-[12px] text-slate-400">
                          ID: {product.id}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-4 text-[14px] text-slate-600">
                    {product.category}
                  </td>

                  {/* Price */}
                  <td className="px-5 py-4 text-[14px] font-semibold text-[#172D55]">
                    Rs. {Number(product.price).toLocaleString()}
                  </td>

                  {/* Stock */}
                  <td className="px-5 py-4 text-[14px] text-slate-600">
                    {product.stock ?? 0}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`
                        inline-flex
                        rounded-full
                        px-3
                        py-1
                        text-[12px]
                        font-semibold
                        ${
                          product.status === "Out of Stock"
                            ? "bg-red-50 text-red-600"
                            : "bg-emerald-50 text-emerald-600"
                        }
                      `}
                    >
                      {product.status || "Active"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">

                      <button
                        type="button"
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-md
                          border
                          border-slate-200
                          text-slate-500
                          transition-colors
                          hover:border-[#D5D9FF]
                          hover:bg-[#EEF1FF]
                          hover:text-[#4B50D8]
                        "
                        title="Edit Product"
                      >
                        <Edit size={15} />
                      </button>

                      <button
                        type="button"
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-md
                          border
                          border-slate-200
                          text-slate-500
                          transition-colors
                          hover:border-red-200
                          hover:bg-red-50
                          hover:text-red-500
                        "
                        title="Delete Product"
                      >
                        <Trash2 size={15} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-5 py-12 text-center"
                >
                  <div className="flex flex-col items-center">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF1FF] text-[#4B50D8]">
                      <Plus size={20} />
                    </div>

                    <h3 className="mt-3 text-[14px] font-semibold text-[#172D55]">
                      No Products Yet
                    </h3>

                    <p className="mt-1 text-[14px] text-slate-500">
                      Add your first product to start selling.
                    </p>

                    <Link
                      to="/seller/add-product"
                      className="
                        mt-4
                        rounded-full
                        bg-[#4B50D8]
                        px-5
                        py-2.5
                        text-[14px]
                        font-semibold
                        text-white
                        transition-colors
                        hover:bg-[#3940C5]
                      "
                    >
                      Add Product
                    </Link>

                  </div>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

      {/* Footer */}
      {products.length > 0 && (
        <div className="flex items-center justify-between border-t border-slate-200 px-5 py-3">

          <p className="text-[14px] text-slate-500">
            Showing {products.length} product
            {products.length !== 1 ? "s" : ""}
          </p>

          <Link
            to="/seller/products"
            className="text-[14px] font-semibold text-[#4B50D8] hover:text-[#3940C5]"
          >
            View All
          </Link>

        </div>
      )}

    </div>
  );
};

export default ProductTable;