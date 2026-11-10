import { Stack } from 'expo-router';

const RootLayout = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name='cart'
      options={{
        presentation: 'formSheet',
      }}
    />
  </Stack>
);

export default RootLayout;
