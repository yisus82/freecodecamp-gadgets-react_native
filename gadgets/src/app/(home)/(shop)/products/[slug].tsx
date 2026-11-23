import { PRODUCTS } from '@/db/products';
import { useCartStore } from '@/store/cart-store';
import { Lucide } from '@react-native-vector-icons/lucide';
import { Link, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

const Product = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const toast = useToast();

  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>
          Product not found: <Text style={styles.slugText}>{slug}</Text>
        </Text>
        <Link style={styles.link} href='/'>
          Go to home screen
        </Link>
      </View>
    );
  }

  const { items, addItem, removeItem, incrementItem, decrementItem } = useCartStore();

  const initialQuantity = items.find(item => item.id === product.id)?.quantity || 0;

  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = () => {
    if (quantity < product.maxQuantity) {
      setQuantity(previousQuantity => previousQuantity + 1);
      incrementItem(product.id);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(previousQuantity => previousQuantity - 1);
      decrementItem(product.id);
    }
  };

  const addToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      heroImage: product.heroImage,
      price: product.price,
      quantity: 1,
      maxQuantity: product.maxQuantity,
    });
    setQuantity(1);
    toast.show('Added to cart', {
      type: 'success',
      placement: 'center',
      duration: 1500,
    });
  };

  const removeFromCart = () => {
    removeItem(product.id);
    setQuantity(0);
    toast.show('Removed from cart', {
      type: 'success',
      placement: 'center',
      duration: 1500,
    });
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <View style={styles.container}>
      <Image source={product.heroImage} style={styles.heroImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Unit Price: ${product.price.toFixed(2)}</Text>
          <Text style={styles.price}>Total Price: ${totalPrice}</Text>
        </View>
        <FlatList
          data={product.images}
          keyExtractor={(_item, index) => `product-image-${index}`}
          renderItem={({ item }) => <Image source={item} style={styles.image} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imagesContainer}
        />
        <View style={styles.buttonContainer}>
          {quantity > 0 ? (
            <>
              <Pressable
                style={{ ...styles.quantityButton, opacity: quantity <= 1 ? 0.5 : 1 }}
                onPress={decreaseQuantity}
                disabled={quantity <= 1}
              >
                {({ pressed }) => (
                  <Lucide
                    name='minus'
                    size={20}
                    color='#fff'
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              <Text style={styles.quantity}>{quantity}</Text>
              <Pressable
                style={{
                  ...styles.quantityButton,
                  opacity: quantity >= product.maxQuantity ? 0.5 : 1,
                }}
                onPress={increaseQuantity}
                disabled={quantity >= product.maxQuantity}
              >
                {({ pressed }) => (
                  <Lucide
                    name='plus'
                    size={20}
                    color='#fff'
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              <Pressable style={styles.removeFromCartButton} onPress={removeFromCart}>
                {({ pressed }) => (
                  <Text style={{ ...styles.removeFromCartText, opacity: pressed ? 0.5 : 1 }}>
                    Remove from Cart
                  </Text>
                )}
              </Pressable>
            </>
          ) : (
            <Pressable style={styles.addToCartButton} onPress={addToCart}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  slugText: {
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailsContainer: {
    padding: 16,
    flex: 1,
  },
  heroImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  price: {
    fontWeight: 'bold',
    color: '#000',
  },

  imagesContainer: {
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeFromCartButton: {
    flex: 1,
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  removeFromCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Product;
