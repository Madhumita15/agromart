export interface Product {
    id: number;
    name: string;
    originalPrice: number;
    currentPrice: number;
    discount?: number;
    description: string;
    image: string;
  }