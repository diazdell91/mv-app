import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import BottomTabNavigation from './TabNavigator';
import TopUpDetails from '../screens/dashboard/TopUpDetails';
import CreateTopup from '../screens/dashboard/CreateTopup';
import SuccessTopup from '../screens/dashboard/views/SuccessTopup';
import FailTopup from '../screens/dashboard/views/FailTopup';

type MainStackParamList = {
  Tab: undefined;
  TopUpDetails: undefined;
  CreateTopup: undefined;
  SuccessTopup: undefined;
  FailTopup: undefined;
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
        screenOptions={{
          headerShown: false,
        }}
      >
        <Main.Screen
          name="SuccessTopup"
          component={SuccessTopup}
          options={{
            title: 'Crear recarga',
          }}
        />
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
        screenOptions={{ headerShown: false, presentation: 'transparentModal' }}
      >
        <Main.Screen name="TopUpDetails" component={TopUpDetails} />
      </Main.Group>
    </Main.Navigator>
  );
}

export default MainNavigator;
