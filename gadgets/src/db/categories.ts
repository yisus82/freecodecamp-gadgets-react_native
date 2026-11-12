import { Category } from '@/types/gadgets';

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Laptops',
    slug: 'laptops',
    image: require('@images/categories/laptops.png'),
    products: [1, 5],
  },
  {
    id: 2,
    name: 'Phones',
    slug: 'phones',
    image: require('@images/categories/phones.png'),
    products: [2, 6],
  },
  {
    id: 3,
    name: 'Gaming',
    slug: 'gaming',
    image: require('@images/categories/gaming.png'),
    products: [4, 7],
  },
  {
    id: 4,
    name: 'Accessories',
    slug: 'accessories',
    image: require('@images/categories/accessories.png'),
    products: [3],
  },
];
