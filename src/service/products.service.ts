import { ProductResponse } from "@/types/product.types";

export async function getAllProducts(page: number): Promise<ProductResponse> {
  const response = await fetch(
    `https://devcase.isiksoftyazilim.com/api/products?page=${page}`
  );
  return await response.json();
}
