export interface ProductResponse {
  message: "string";
  status: "string";
  currentPage: number;
  totalPages: number;
  totalItems: number;
  data: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  productCode: string;
  barcode: string;
  stock: number;
  status: boolean;
  category: string;
  description: string;
  imageUrl: string;
}
