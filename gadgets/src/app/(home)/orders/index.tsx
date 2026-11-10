import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const Orders = () => (
  <View style={styles.container}>
    <Link href='/orders/order-1' style={styles.link}>
      Go to Order 1
    </Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: 18,
    color: 'blue',
  },
});

export default Orders;
