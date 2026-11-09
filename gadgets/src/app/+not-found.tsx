import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const NotFoundScreen = () => (
  <>
    <View style={styles.container}>
      <Text style={styles.text}> Oops! This screen doesn't exist.</Text>
      <Link style={styles.link} href='/'>
        Go to home screen
      </Link>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
});

export default NotFoundScreen;
