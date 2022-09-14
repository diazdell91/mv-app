import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardSceen from '../screens/dashboard/DashboardSceen';
import InsightsScreen from '../screens/insights/InsightsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import TabBar from './components/TabBar';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: any) => <TabBar {...props} />}
    >
      <BottomTab.Screen name="Dashboard" component={DashboardSceen} />
      <BottomTab.Screen name="Informes" component={InsightsScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}
