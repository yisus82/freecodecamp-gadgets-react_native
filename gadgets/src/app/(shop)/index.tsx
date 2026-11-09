import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Home</Text>
    <Link href='/categories/category-1' style={styles.link}>
      Go to Category 1
    </Link>
    <Link href='/products/product-1' style={styles.link}>
      Go to Product 1
    </Link>
    <Link href='/orders/order-1' style={styles.link}>
      Go to Order 1
    </Link>
    <Link href='/auth' style={styles.link}>
      Go to Auth
    </Link>
    <Link href='/cart' style={styles.link}>
      Go to Cart
    </Link>
    <Link href='/test' style={styles.link}>
      Go to Not Found Page
    </Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Home;
