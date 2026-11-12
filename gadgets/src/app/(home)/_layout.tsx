import Lucide from '@react-native-vector-icons/lucide';
import { Tabs } from 'expo-router';
import { type ColorValue } from 'react-native';

type TabBarIconProps = {
  name: React.ComponentProps<typeof Lucide>['name'];
  color: ColorValue;
};

const TabBarIcon = ({ name, color }: TabBarIconProps) => {
  return <Lucide size={24} name={name} style={{ color }} />;
};

const TabsLayout = () => (
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
);

export default TabsLayout;
