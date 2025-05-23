"use client";

import { ProductResponse } from "@/types/product.types";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  CircleEllipsis,
  CircleSlash,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function AllProductsTable({
  products,
}: {
  products: ProductResponse;
}) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const [selectedProducts, setSelectedProducts] = React.useState<string[]>([]);

  React.useEffect(() => {
    setSelectedProducts([]);
  }, [page]);

  const handleSelect = (id: string) => {
    if (selectedProducts.includes(id)) {
      const newSelecteds = selectedProducts.filter((sp) => sp !== id);

      setSelectedProducts([...newSelecteds]);
    } else {
      setSelectedProducts((prev) => [...prev, id]);
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (!checked) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts([...products.data.map((p) => p.productCode)]);
    }
  };

  return (
    <>
      <table className="min-w-full text-left">
        <thead className="text-secondary border-b border-secondary/50">
          <tr>
            <th className="p-4 w-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedProducts.length === products.data.length}
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            </th>
            <th>Product</th>
            <th className="hidden sm:table-cell">Product Code</th>
            <th className="hidden md:table-cell">Barcode</th>
            <th className="hidden md:table-cell">Amount</th>
            <th className="hidden md:table-cell">Status</th>
            <th className="hidden md:table-cell" />
          </tr>
        </thead>

        <tbody className="min-w-[750px] overflow-x-auto">
          {products.data.map((product) => (
            <tr
              key={product.productCode}
              className={`border-b border-secondary/50 border-l-4 ${
                selectedProducts.includes(product.productCode)
                  ? "border-l-indigo-500"
                  : "border-l-transparent"
              }`}
            >
              <td className="p-4 w-2">
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.productCode)}
                  onChange={() => handleSelect(product.productCode)}
                />
              </td>

              <td className="py-4 flex items-center gap-3">
                <img
                  src={product.imageUrl}
                  loading="lazy"
                  alt={product.name}
                  className="h-12 w-12 rounded-md"
                />

                <div>
                  <div className="font-bold">{product.name}</div>
                  <div className="text-sm text-secondary">
                    {product.category}
                  </div>
                </div>
              </td>

              <td className="hidden md:table-cell text-secondary">
                {product.productCode}
              </td>
              <td className="hidden sm:table-cell">{product.barcode}</td>
              <td className="hidden md:table-cell font-bold">
                {product.stock}
              </td>
              <td className="hidden md:table-cell">
                <span
                  className={`inline-flex items-center gap-2 rounded-md px-2 py-1 font-semibold text-sm ${
                    product.status
                      ? "text-green bg-green/10"
                      : "text-red bg-red/10"
                  }`}
                >
                  {product.status ? <CheckCircle /> : <CircleSlash />}

                  {product.status ? "Completed" : "Cancelled"}
                </span>
              </td>

              <td className="hidden md:table-cell p-4 text-right text-gray-400">
                <div className="flex justify-end">
                  <CircleEllipsis />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="w-full mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-secondary">
          Showing{" "}
          <strong>{`${products.currentPage * 20 - 19}-${
            products.currentPage * 20
          }`}</strong>{" "}
          from <strong>{products.totalItems}</strong> data
        </p>

        <div className="flex items-center gap-3">
          {page && +page > 1 ? (
            <Link href={`all-products?page=${+page - 1}`}>
              <ChevronLeft />
            </Link>
          ) : null}

          {Array.from({ length: products.totalPages }).map((_, i) => (
            <Link
              key={i}
              href={`all-products?page=${i + 1}`}
              className={`w-8 h-8 rounded-md border border-secondary flex items-center justify-center text-sm cursor-pointer ${
                +(page || 1) === i + 1 ? "bg-accent text-white" : ""
              }`}
            >
              {i + 1}
            </Link>
          ))}

          {+(page || 1) < products.totalPages ? (
            <Link href={`all-products?page=${+(page || 1) + 1}`}>
              <ChevronRight />
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
