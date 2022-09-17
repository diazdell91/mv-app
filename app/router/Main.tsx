import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import BottomTabNavigation from './TabNavigator';
import TopUpDetails from '../screens/dashboard/TopUpDetails';
import CreateTopup from '../screens/dashboard/CreateTopup';

type MainStackParamList = {
  Tab: undefined;
  TopUpDetails: undefined;
  CreateTopup: undefined;
};

export type MainProps = NativeStackScreenProps<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="Tab" component={BottomTabNavigation} />
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
          name="CreateTopup"
          component={CreateTopup}
          options={{
            title: 'Crear recarga',
          }}
        />
      </Main.Group>

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
