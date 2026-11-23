import StatusBadge from '@/components/StatusBadge';
import { ORDERS } from '@/db/orders';
import { PRODUCTS } from '@/db/products';
import type { Product } from '@/types/gadgets';
import { format } from 'date-fns';
import { Link, useLocalSearchParams } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const Order = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const order = ORDERS.find(order => order.slug === slug);

  if (!order) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>
          Order not found: <Text style={styles.slugText}>{slug}</Text>
        </Text>
        <Link style={styles.link} href='/orders'>
          Go to orders page
        </Link>
      </View>
    );
  }

  const orderItems: { product: Product; quantity: number }[] = [];
  let orderTotalPrice = 0;

  for (const itemId of order.items) {
    const product = PRODUCTS.find(product => product.id === itemId);

    if (!product) {
      return (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Some items in this order could not be found.</Text>
          <Link style={styles.link} href='/orders'>
            Go to orders page
          </Link>
        </View>
      );
    }

    const existingItem = orderItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      orderItems.push({ product, quantity: 1 });
    }

    orderTotalPrice += product.price;
  }

  return (
    <View style={styles.container}>
      <View style={styles.orderDetailsContainer}>
        <Text style={styles.orderSlug}>{order.slug}</Text>
        <Text style={styles.orderDetails}>{order.details}</Text>
        <StatusBadge status={order.status} />
        <Text style={styles.orderDate}>
          Order Date: {format(new Date(order.date), 'MMM dd, yyyy')}
        </Text>
        <Text style={styles.orderTotalPrice}>Total Price: ${orderTotalPrice.toFixed(2)}</Text>
      </View>
      <FlatList
        data={orderItems}
        keyExtractor={item => item.product.id.toString()}
        ListHeaderComponent={<Text style={styles.itemsTitle}>Items in this order:</Text>}
        ListEmptyComponent={<Text>No items found for this order.</Text>}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.product.heroImage} style={styles.itemHeroImage} />
            <View>
              <Text style={styles.itemName}>{item.product.name}</Text>
              <Text style={styles.itemPrice}>Unit Price: ${item.product.price.toFixed(2)}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
              <Text style={styles.itemTotalPrice}>
                Total Price: ${(item.product.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  slugText: {
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  orderDetailsContainer: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
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
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  orderTotalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  itemsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  itemHeroImage: {
    width: '50%',
    height: 100,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    marginTop: 4,
  },
  itemQuantity: {
    fontSize: 14,
    marginTop: 4,
  },
  itemTotalPrice: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
  },
});

export default Order;
