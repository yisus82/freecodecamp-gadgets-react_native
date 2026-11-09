import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Category = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category: {slug}</Text>
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

export default Category;
