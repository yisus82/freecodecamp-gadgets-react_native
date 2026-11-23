import CartItem from '@/components/CartItem';
import { useCartStore } from '@/store/cart-store';
import { Link, router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Cart = () => {
  const { items, removeItem, incrementItem, decrementItem, getTotalPrice, resetCart } =
    useCartStore();

  if (items.length === 0) {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
        <Link dismissTo style={styles.link} href='/'>
          Go to home screen
        </Link>
      </View>
    );
  }

  const handleCheckout = () => {
    // Clear the cart after checkout
    resetCart();
    // Go back to the home screen after checkout dismissing the cart screen
    router.dismissTo('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onRemove={removeItem}
            onIncrement={incrementItem}
            onDecrement={decrementItem}
          />
        )}
        contentContainerStyle={styles.cartList}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
        <Pressable onPress={handleCheckout} style={styles.checkoutButton}>
          {({ pressed }) => (
            <Text style={{ ...styles.checkoutButtonText, opacity: pressed ? 0.5 : 1 }}>
              Checkout
            </Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  cartList: {
    paddingVertical: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
