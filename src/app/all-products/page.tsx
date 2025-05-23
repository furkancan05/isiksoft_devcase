import AllProductsTable from "@/components/products/AllProductsTable";
import ProductsSkeleton from "@/components/products/ProductsSkeleton";
import { getAllProducts } from "@/service/products.service";
import {
  Calendar,
  CirclePlus,
  ListFilter,
  MoreVertical,
  RefreshCcw,
  Search,
} from "lucide-react";
import { headers } from "next/headers";
import React, { Suspense } from "react";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const products = await getAllProducts(+(params.page || 1));

  return (
    <div className="w-full h-[2000px] bg-white rounded-md py-3 px-5 sm:px-[30px]">
      <div className="flex flex-col sm:flex-row sm:items-center items-start justify-between gap-2 mb-10">
        <p className="text-xl font-bold">All Products</p>

        <div className="flex items-center gap-3">
          <div className="w-10 mx-auto lg:w-[300px] border border-secondary rounded-md pl-0 md:pl-8 relative flex items-center justify-center lg:justify-start bg-transparent aspect-square lg:aspect-auto cursor-pointer lg:cursor-default">
            <Search className="md:absolute md:left-2 md:top-1/2 md:-translate-y-1/2 md:text-secondary" />

            <input
              type="text"
              placeholder="Search here"
              className="hidden lg:block p-2 focus:outline-none"
            />
          </div>

          <div className="hidden lg:flex w-10 aspect-square rounded-md items-center justify-center border border-secondary cursor-pointer text-secondary hover:bg-secondary/40 transition-colors">
            <RefreshCcw />
          </div>

          <div className="hidden lg:flex w-10 aspect-square rounded-md items-center justify-center border border-secondary cursor-pointer text-secondary hover:bg-secondary/40 transition-colors">
            <Calendar />
          </div>

          <div className="hidden lg:flex w-10 aspect-square rounded-md items-center justify-center border border-secondary cursor-pointer text-secondary hover:bg-secondary/40 transition-colors">
            <ListFilter />
          </div>

          <div className="w-10 aspect-square rounded-md flex items-center justify-center border border-secondary cursor-pointer text-secondary hover:bg-secondary/40 transition-colors">
            <MoreVertical />
          </div>

          <div className="h-10 rounded-md flex items-center gap-2 cursor-pointer bg-accent px-4 hover:bg-accent/90 transition-colors">
            <CirclePlus className="text-accent-secondary" />
            <span className="text-white whitespace-nowrap">
              Add new Product
            </span>
          </div>
        </div>
      </div>

      <Suspense fallback={<ProductsSkeleton />}>
        <AllProductsTable products={products} />
      </Suspense>
    </div>
  );
}
