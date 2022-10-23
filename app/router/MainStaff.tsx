import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import BottomTabStaffNavigation from './TabStaffNavigator';
import TopUpActions from '../screens/team/tasks/TopUpActions';
import TopUpAvailableActions from '../screens/team/board/TopUpAvailableActions';
import FilterHistoryScreen from '../screens/insights/FilterHistoryScreen';

type MainStackParamList = {
  Tab: undefined;
  TopUpDetails: undefined;
  TopUpActions: undefined;
  TopUpAvailableActions: undefined;
  FilterHistoryScreen: undefined;
};

export type MainProps = NativeStackScreenProps<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

function MainStaffNavigator() {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="Tab" component={BottomTabStaffNavigation} />
      <Main.Group
        key={'action'}
        screenOptions={{ headerShown: false, presentation: 'containedTransparentModal' }}
      >
        <Main.Screen name="TopUpActions" component={TopUpActions} />
        <Main.Screen name="TopUpAvailableActions" component={TopUpAvailableActions} />
      </Main.Group>
      <Main.Group
        key={'modal'}
        screenOptions={{ headerShown: false, presentation: 'containedModal' }}
      >
        <Main.Screen name="FilterHistoryScreen" component={FilterHistoryScreen} />
      </Main.Group>
    </Main.Navigator>
  );
}

export default MainStaffNavigator;
