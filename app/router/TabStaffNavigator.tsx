import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InsightsScreen from '../screens/insights/InsightsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import BoardScreen from '../screens/team/board/BoardScreen';
import TasksScreen from '../screens/team/tasks/TasksScreen';
import TabBar from './components/TabBar';

const BottomTab = createBottomTabNavigator();

export default function BottomTabStaffNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: any) => <TabBar {...props} />}
    >
      <BottomTab.Screen name="Tablero" component={BoardScreen} />
      <BottomTab.Screen name="Tareas" component={TasksScreen} />
      <BottomTab.Screen name="Informes" component={InsightsScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}
