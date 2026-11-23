import type { Order } from '@/types/gadgets';
import { format } from 'date-fns';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import StatusBadge from './StatusBadge';

type OrderListItemProps = {
  item: Order;
};

const OrderListItem = ({ item }: OrderListItemProps) => (
  <Link href={`/orders/${item.slug}`} asChild>
    <Pressable style={styles.orderContainer}>
      <View style={styles.orderContent}>
        <View style={styles.orderDetailsContainer}>
          <Text style={styles.orderSlug}>{item.slug}</Text>
          <Text style={styles.orderDetails}>{item.details}</Text>
          <Text style={styles.orderDate}>{format(new Date(item.date), 'MMM dd, yyyy')}</Text>
        </View>
        <StatusBadge status={item.status} />
      </View>
    </Pressable>
  </Link>
);

const styles = StyleSheet.create({
  orderContainer: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  orderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDetailsContainer: {
    flex: 1,
  },
  orderSlug: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderDetails: {
    fontSize: 14,
    color: '#555',
  },
  orderDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

export default OrderListItem;
