import { Stack } from 'expo-router';

const ShopLayout = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name='index'
      options={{
        title: 'Home',
        headerShown: true,
      }}
    />
  </Stack>
);

export default ShopLayout;
