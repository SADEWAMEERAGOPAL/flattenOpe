export interface product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  images: string[];
}

export interface IProduct {
  products: product[];
  total: number;
  skip: number;
  limit: number;
}