import ProductListHeader from '@/components/ProductListHeader';
import ProductListItem from '@/components/ProductListItem';
import { CATEGORIES } from '@/db/categories';
import { PRODUCTS } from '@/db/products';
import { FlatList, StyleSheet, View } from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <FlatList
      data={PRODUCTS}
      renderItem={({ item }) => <ProductListItem product={item} />}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      ListHeaderComponent={() => <ProductListHeader categories={CATEGORIES} />}
      contentContainerStyle={styles.flatListContent}
      columnWrapperStyle={styles.flatListColumn}
      style={styles.flatList}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: 'space-between',
  },
  flatList: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Home;
