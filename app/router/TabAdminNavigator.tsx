import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InsightsScreen from '../screens/client/insights/InsightsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import StaffScreen from '../screens/admin/staff/StaffScreen';
import TabBar from './components/TabBar';

const BottomTab = createBottomTabNavigator();

export default function AdminTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: any) => <TabBar {...props} />}
    >
      {/* <BottomTab.Screen name="Dashboard" component={DashboardSceen} /> */}
      <BottomTab.Screen name="Informes" component={InsightsScreen} />
      <BottomTab.Screen name="Staff" component={StaffScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}
