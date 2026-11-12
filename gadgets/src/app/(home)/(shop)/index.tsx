import ProductListHeader from '@/components/ProductListHeader';
import ProductListItem from '@/components/ProductListItem';
import { CATEGORIES } from '@/db/categories';
import { PRODUCTS } from '@/db/products';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => (
  <SafeAreaView style={styles.safeArea}>
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
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
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
