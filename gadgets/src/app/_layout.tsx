import { Stack } from 'expo-router';
import { ToastProvider } from 'react-native-toast-notifications';

const RootLayout = () => (
  <ToastProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='cart'
        options={{
          presentation: 'formSheet',
        }}
      />
    </Stack>
  </ToastProvider>
);

export default RootLayout;
