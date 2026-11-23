import { Lucide } from '@react-native-vector-icons/lucide';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type CartItemType = {
  id: number;
  title: string;
  heroImage: any;
  price: number;
  quantity: number;
  maxQuantity: number;
};

type CartItemProps = {
  item: CartItemType;
  onRemove: (id: number) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
};

const CartItem = ({ item, onDecrement, onIncrement, onRemove }: CartItemProps) => (
  <View style={styles.cartItem}>
    <Image source={item.heroImage} style={styles.itemImage} />
    <View style={styles.itemDetails}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <Pressable
          onPress={() => onDecrement(item.id)}
          style={{ ...styles.quantityButton, opacity: item.quantity <= 1 ? 0.5 : 1 }}
          disabled={item.quantity <= 1}
        >
          {({ pressed }) => (
            <Lucide name='minus' size={20} color='#fff' style={{ opacity: pressed ? 0.5 : 1 }} />
          )}
        </Pressable>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <Pressable
          onPress={() => onIncrement(item.id)}
          style={{
            ...styles.quantityButton,
            opacity: item.quantity >= item.maxQuantity ? 0.5 : 1,
          }}
          disabled={item.quantity >= item.maxQuantity}
        >
          {({ pressed }) => (
            <Lucide name='plus' size={20} color='#fff' style={{ opacity: pressed ? 0.5 : 1 }} />
          )}
        </Pressable>
      </View>
    </View>

    <Pressable onPress={() => onRemove(item.id)} style={styles.removeButton}>
      {({ pressed }) => (
        <Lucide name='trash-2' size={20} color='#fff' style={{ opacity: pressed ? 0.5 : 1 }} />
      )}
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  removeButton: {
    padding: 8,
    backgroundColor: '#ff5252',
    borderRadius: 8,
  },
});

export default CartItem;
