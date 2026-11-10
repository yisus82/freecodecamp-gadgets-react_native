import { Stack } from 'expo-router';

const OrdersLayout = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name='index'
      options={{
        title: 'Orders',
        headerShown: true,
      }}
    />
  </Stack>
);

export default OrdersLayout;
