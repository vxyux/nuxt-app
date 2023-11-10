export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    [key: string]: ProductRating;
  };
  quantity?: number;
  discount?: ProductDiscount;
};

export type ProductRating = {
  rate: number;
  count: number;
};

export type ProductDiscount = {
  id: number;
  percentage: number;
};
