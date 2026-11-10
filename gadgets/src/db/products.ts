import { Product } from '@/types/gadgets';
import { CATEGORIES } from './categories';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Macbook Pro (2024)',
    slug: 'macbook-pro-2024',
    heroImage: require('../assets/images/products/mac-book-1.jpg'),
    imagesUrl: [
      require('../assets/images/products/mac-book-1.jpg'),
      require('../assets/images/products/mac-book-2.jpg'),
      require('../assets/images/products/mac-book-3.jpg'),
    ],
    price: 899.99,
    category: CATEGORIES[0],
    maxQuantity: 5,
  },
  {
    id: 2,
    title: 'IPhone 15',
    slug: 'i-phone-15',
    heroImage: require('../assets/images/products/i-phone-1.jpg'),
    imagesUrl: [
      require('../assets/images/products/i-phone-2.jpg'),
      require('../assets/images/products/i-phone-3.jpg'),
    ],
    price: 999.99,
    category: CATEGORIES[1],
    maxQuantity: 10,
  },
  {
    id: 3,
    title: 'Headset',
    slug: 'headset',
    heroImage: require('../assets/images/products/head-set-1.jpg'),
    imagesUrl: [
      require('../assets/images/products/head-set-1.jpg'),
      require('../assets/images/products/head-set-2.jpg'),
    ],
    price: 499.99,
    category: CATEGORIES[3],
    maxQuantity: 15,
  },
  {
    id: 4,
    title: 'PlayStation 5',
    slug: 'playstation-5',
    heroImage: require('../assets/images/products/ps-5-1.jpg'),
    imagesUrl: [
      require('../assets/images/products/ps-5-1.jpg'),
      require('../assets/images/products/ps-5-2.jpg'),
      require('../assets/images/products/ps-5-3.jpg'),
    ],
    price: 699.99,
    category: CATEGORIES[2],
    maxQuantity: 3,
  },
  {
    id: 5,
    title: 'Dell XPS 13',
    slug: 'dell-xps-13',
    heroImage: require('../assets/images/products/dell-1.jpg'),
    imagesUrl: [
      require('../assets/images/products/dell-1.jpg'),
      require('../assets/images/products/dell-2.jpg'),
    ],
    price: 1099.99,
    category: CATEGORIES[0],
    maxQuantity: 7,
  },
  {
    id: 6,
    title: 'Samsung Galaxy S21',
    slug: 'samsung-galaxy-s21',
    heroImage: require('../assets/images/products/samsung-1.jpg'),
    imagesUrl: [
      require('../assets/images/products/samsung-1.jpg'),
      require('../assets/images/products/samsung-2.jpg'),
    ],
    price: 799.99,
    category: CATEGORIES[1],
    maxQuantity: 12,
  },
  {
    id: 7,
    title: 'Nintendo Switch',
    slug: 'nintendo-switch',
    heroImage: require('../assets/images/products/nintendo-switch-1.jpg'),
    imagesUrl: [
      require('../assets/images/products/nintendo-switch-1.jpg'),
      require('../assets/images/products/nintendo-switch-2.jpg'),
    ],
    price: 299.99,
    category: CATEGORIES[2],
    maxQuantity: 8,
  },
];
