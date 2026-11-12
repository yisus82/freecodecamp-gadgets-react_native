import type { Category } from '@/types/gadgets';
import { Lucide } from '@react-native-vector-icons/lucide';
import { Link } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

type ProductListHeaderProps = {
  categories: Category[];
};

const ProductListHeader = ({ categories }: ProductListHeaderProps) => (
  <View style={[styles.headerContainer]}>
    <View style={styles.headerTop}>
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
    <View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Link asChild href={`/categories/${item.slug}`}>
            <Pressable style={styles.category}>
              {({ pressed }) => (
                <View style={{ opacity: pressed ? 0.5 : 1 }}>
                  <Image source={item.image} style={styles.categoryImage} />
                  <Text>{item.name}</Text>
                </View>
              )}
            </Pressable>
          </Link>
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Products</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    gap: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  signOutButton: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    width: 100,
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
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
});

export default ProductListHeader;
