import OrderListItem from '@/components/OrderListItem';
import { ORDERS } from '@/db/orders';
import { Link } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Orders = () =>
  ORDERS.length === 0 ? (
    <View style={styles.emptyOrdersContainer}>
      <Text style={styles.emptyOrdersText}>There are no orders available.</Text>
      <Link style={styles.link} href='/'>
        Go to home screen
      </Link>
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        renderItem={({ item }) => <OrderListItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emptyOrdersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyOrdersText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Orders;
