import { Order } from '@/types/gadgets';

export const ORDERS: Order[] = [
  {
    id: 1,
    item: 'Order 1',
    details: 'Details about order 1',
    status: 'Pending',
    slug: 'order-1',
    date: new Date('2024-07-01T10:00:00Z'),
    items: [2, 3],
  },
  {
    id: 2,
    item: 'Order 2',
    details: 'Details about order 2',
    status: 'Completed',
    slug: 'order-2',
    date: new Date('2024-07-02T14:30:00Z'),
    items: [3, 3],
  },
  {
    id: 3,
    item: 'Order 3',
    details: 'Details about order 3',
    status: 'Shipped',
    slug: 'order-3',
    date: new Date('2024-07-03T09:15:00Z'),
    items: [4, 5],
  },
  {
    id: 4,
    item: 'Order 4',
    details: 'Details about order 4',
    status: 'InTransit',
    slug: 'order-4',
    date: new Date('2024-07-04T10:00:00Z'),
    items: [5, 6, 1],
  },
];
