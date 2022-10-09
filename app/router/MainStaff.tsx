import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import FailTopup from '../screens/client/dashboard/views/FailTopup';
import BottomTabStaffNavigation from './TabStaffNavigator';
import TopUpActions from '../screens/team/tasks/TopUpActions';
import FilterArchiveScreen from '../screens/team/archive/FilterArchiveScreen';
import TopUpAvailableActions from '../screens/team/board/TopUpAvailableActions';

type MainStackParamList = {
  Tab: undefined;
  TopUpDetails: undefined;
  TopUpActions: undefined;
  TopUpAvailableActions: undefined;
  FailTopup: undefined;
  FilterArchiveScreen: undefined;
};

export type MainProps = NativeStackScreenProps<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

function MainStaffNavigator() {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="Tab" component={BottomTabStaffNavigation} />
      <Main.Group
        screenOptions={{
          headerShown: true,
          presentation: 'card',
          headerBackTitle: '',
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            fontSize: 20,
          },
        }}
      >
        <Main.Screen
          name="FailTopup"
          component={FailTopup}
          options={{
            title: 'Crear recarga',
          }}
        />
      </Main.Group>
      <Main.Group
        key={'modal'}
        screenOptions={{ headerShown: false, presentation: 'containedModal' }}
      >
        <Main.Screen name="FilterArchiveScreen" component={FilterArchiveScreen} />
      </Main.Group>
      <Main.Group
        key={'action'}
        screenOptions={{ headerShown: false, presentation: 'containedTransparentModal' }}
      >
        <Main.Screen name="TopUpActions" component={TopUpActions} />
        <Main.Screen name="TopUpAvailableActions" component={TopUpAvailableActions} />
      </Main.Group>
    </Main.Navigator>
  );
}

export default MainStaffNavigator;
