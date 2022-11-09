import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../screens/profile/ProfileScreen';
import TabBar from './components/TabBar';
import ProductScreen from '../screens/product/ProductScreen';
import ContactsScreen from '../screens/contacts/ContactsScreen';

const BottomTab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: any) => <TabBar {...props} />}
    >
      <BottomTab.Screen name="Servicios" component={ProductScreen} />
      <BottomTab.Screen name="Contactos" component={ContactsScreen} />
      <BottomTab.Screen name="Ajustes" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}
