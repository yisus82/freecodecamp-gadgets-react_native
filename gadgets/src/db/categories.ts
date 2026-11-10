import { Category } from '@/types/gadgets';
import { PRODUCTS } from './products';

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Laptops',
    slug: 'laptops',
    imageUrl: require('../assets/images/categories/laptops.png'),
    products: PRODUCTS.filter(product => product.category.slug === 'laptops'),
  },
  {
    id: 2,
    name: 'Phones',
    slug: 'phones',
    imageUrl: require('../assets/images/categories/phones.png'),
    products: PRODUCTS.filter(product => product.category.slug === 'phones'),
  },
  {
    id: 3,
    name: 'Gaming',
    slug: 'gaming',
    imageUrl: require('../assets/images/categories/gaming.png'),
    products: PRODUCTS.filter(product => product.category.slug === 'gaming'),
  },
  {
    id: 4,
    name: 'Accessories',
    slug: 'accessories',
    imageUrl: require('../assets/images/categories/accessories.png'),
    products: PRODUCTS.filter(product => product.category.slug === 'accessories'),
  },
];
