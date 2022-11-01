import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InsightsScreen from '../screens/insights/InsightsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import StaffScreen from '../screens/admin/staff/StaffScreen';
import TabBar from './components/TabBar';
import InventoryScreen from '../screens/admin/inventory/InventoryScreen';

const BottomTab = createBottomTabNavigator();

export default function AdminTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: any) => <TabBar {...props} />}
    >
      <BottomTab.Screen name="Informes" component={InsightsScreen} />
      <BottomTab.Screen name="Staff" component={StaffScreen} />
      <BottomTab.Screen name="Inventory" component={InventoryScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}
