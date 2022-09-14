import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import BottomTabNavigation from './TabNavigator';
import TopUpDetails from '../screens/dashboard/TopUpDetails';

type MainStackParamList = {
  Tab: undefined;
  TopUpDetails: undefined;
};

export type MainProps = NativeStackScreenProps<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="Tab" component={BottomTabNavigation} />
      <Main.Group
        key={'modal'}
        screenOptions={{ headerShown: false, presentation: 'transparentModal' }}
      >
        <Main.Screen name="TopUpDetails" component={TopUpDetails} />
      </Main.Group>
    </Main.Navigator>
  );
}

export default MainNavigator;
