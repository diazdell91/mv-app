import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTabBar from '../../../router/components/TopTabBar';
import { COLORS } from '../../../theme';
import PendingScreen from '../view/PendingScreen';

//screens

const Tab = createMaterialTopTabNavigator();

export default function TabBarInsights() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: COLORS.white }}
      style={{ backgroundColor: COLORS.white }}
      tabBar={(props: any) => <TopTabBar {...props} />}
    >
      <Tab.Screen name="Pendientes" component={PendingScreen} />
      <Tab.Screen name="Historial" component={PendingScreen} />
    </Tab.Navigator>
  );
}
