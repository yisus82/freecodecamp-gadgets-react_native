import type { Category } from '@/types/gadgets';
import { Link } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

type ProductListHeaderProps = {
  categories: Category[];
};

const ProductListHeader = ({ categories }: ProductListHeaderProps) => (
  <View style={styles.container}>
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
);

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    width: 80,
    marginRight: 8,
    marginBottom: 16,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
});

export default ProductListHeader;
