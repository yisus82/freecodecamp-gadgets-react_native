import Header from '@/components/Header';
import Lucide from '@react-native-vector-icons/lucide';
import { Tabs } from 'expo-router';
import { StyleSheet, type ColorValue } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TabBarIconProps = {
  name: React.ComponentProps<typeof Lucide>['name'];
  color: ColorValue;
};

const TabBarIcon = ({ name, color }: TabBarIconProps) => {
  return <Lucide size={24} name={name} style={{ color }} />;
};

const TabsLayout = () => (
  <SafeAreaView style={styles.safeArea}>
    <Header />
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1BC464',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='(shop)'
        options={{
          title: 'Shop',
          tabBarIcon({ focused }) {
            return <TabBarIcon name='shopping-cart' color={focused ? '#1BC464' : 'gray'} />;
          },
        }}
      />
      <Tabs.Screen
        name='orders'
        options={{
          title: 'Orders',
          tabBarIcon({ focused }) {
            return <TabBarIcon name='book' color={focused ? '#1BC464' : 'gray'} />;
          },
        }}
      />
    </Tabs>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default TabsLayout;
