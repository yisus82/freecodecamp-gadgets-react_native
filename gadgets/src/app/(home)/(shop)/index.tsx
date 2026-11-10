import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <Link href='/categories/category-1' style={styles.link}>
      Go to Category 1
    </Link>
    <Link href='/products/product-1' style={styles.link}>
      Go to Product 1
    </Link>
    <Link href='/auth' style={styles.link}>
      Go to Auth
    </Link>
    <Link href='/cart' style={styles.link}>
      Go to Cart
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

export default Home;
