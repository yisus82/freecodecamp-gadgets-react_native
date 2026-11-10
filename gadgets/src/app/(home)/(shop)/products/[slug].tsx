import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const Product = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `Product: ${slug}`,
          headerShown: true,
        }}
      />
      <Link href='/' style={styles.link}>
        Go back to Home
      </Link>
    </View>
  );
};

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

export default Product;
