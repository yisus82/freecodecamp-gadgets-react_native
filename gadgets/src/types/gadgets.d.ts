import type { ImageSourcePropType } from 'react-native';

export type Category = {
  id: number;
  name: string;
  imageUrl: ImageSourcePropType;
  slug: string;
  products: Product[];
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  imagesUrl: ImageSourcePropType[];
  price: number;
  heroImage: ImageSourcePropType;
  category: Omit<Category, 'products'>;
  maxQuantity: number;
};

export type OrderStatus = 'Pending' | 'Completed' | 'Shipped' | 'InTransit';

export type Order = {
  id: number;
  slug: string;
  item: string;
  details: string;
  status: OrderStatus;
  date: Date;
  items: Product[];
};
