import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import BottomTabNavigation from './TabNavigator';
import TopUpDetails from '../screens/dashboard/TopUpDetails';
import SuccessTopup from '../screens/dashboard/views/SuccessTopup';
import FailTopup from '../screens/dashboard/views/FailTopup';
import CreateUserScreen from '../screens/staff/CreateUserScreen';
import SuccessUser from '../screens/staff/views/SuccessUser';
import CreateTopupStepOne from '../screens/dashboard/CreateTopupStepOne';
import CreateTopupStepTwo from '../screens/dashboard/CreateTopupStepTwo';
import FilterHistoryScreen from '../screens/insights/FilterHistoryScreen';

type MainStackParamList = {
  Tab: undefined;
  TopUpDetails: undefined;
  CreateTopupStepOne: undefined;
  CreateTopupStepTwo: undefined;
  CreateUser: undefined;
  SuccessTopup: undefined;
  SuccessUser: undefined;
  FailTopup: undefined;
  FilterHistoryScreen: undefined;
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
          name="CreateTopupStepOne"
          component={CreateTopupStepOne}
          options={{
            title: 'Número celular',
          }}
        />
        <Main.Screen
          name="CreateTopupStepTwo"
          component={CreateTopupStepTwo}
          options={{
            title: 'Crear recarga',
          }}
        />
        <Main.Screen
          name="CreateUser"
          component={CreateUserScreen}
          options={{
            title: 'Crear usuario',
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
        <Main.Screen
          name="SuccessUser"
          component={SuccessUser}
          options={{
            title: 'Crear recarga',
          }}
        />
      </Main.Group>
      <Main.Group
        key={'modal'}
        screenOptions={{ headerShown: false, presentation: 'containedModal' }}
      >
        <Main.Screen name="TopUpDetails" component={TopUpDetails} />
        <Main.Screen name="FilterHistoryScreen" component={FilterHistoryScreen} />
      </Main.Group>
    </Main.Navigator>
  );
}

export default MainNavigator;
