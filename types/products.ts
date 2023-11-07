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
};

export type ProductRating = {
  rate: number;
  count: number;
};
