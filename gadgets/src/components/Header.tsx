import { Lucide } from '@react-native-vector-icons/lucide';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.headerLeft}>
      <Avatar imageUrl='https://randomuser.me/api/portraits/men/1.jpg' username='John Doe' />
    </View>
    <View style={styles.headerRight}>
      <Link style={styles.cartContainer} href='/cart' asChild>
        <Pressable>
          {({ pressed }) => (
            <View>
              <Lucide
                name='shopping-cart'
                size={25}
                color='gray'
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>0</Text>
              </View>
            </View>
          )}
        </Pressable>
      </Link>
      <Pressable style={styles.signOutButton}>
        {({ pressed }) => (
          <View>
            <Lucide name='log-out' size={25} color='red' style={{ opacity: pressed ? 0.5 : 1 }} />
          </View>
        )}
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartContainer: {
    padding: 10,
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: 10,
    backgroundColor: '#1BC464',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  signOutButton: {
    padding: 10,
  },
});

export default Header;
