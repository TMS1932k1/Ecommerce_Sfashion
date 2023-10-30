export type Product = {
  id: string;
  name: string;
  imageCover: string;
  images: string[];
  price: number;
  material: string;
  sizes: string[];
  ratingsAverage: number;
  ratingsQuantity: number;
  category: string;
  saleOff: number;
  description: string;
  sold: number;
  createdAt: Date;
  updatedAt: Date;
};
