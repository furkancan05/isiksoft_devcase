import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="w-full bg-white rounded-md py-3 px-5 sm:px-[30px] flex flex-col gap-10 items-center justify-center">
      <p className="font-bold">
        This page is not ready yet. In the meantime, you can also check out our
        All Products page.
      </p>

      <Link
        href="/all-products"
        className="px-6 py-3 rounded-md bg-accent font-bold text-white"
      >
        All Products
      </Link>
    </div>
  );
}
