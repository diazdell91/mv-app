import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import BottomTabNavigation from './TabNavigator';
import TopUpDetails from '../screens/client/dashboard/TopUpDetails';
import SuccessTopup from '../screens/client/dashboard/views/SuccessTopup';
import FailTopup from '../screens/client/dashboard/views/FailTopup';
import CreateTopupStepOne from '../screens/client/dashboard/CreateTopupStepOne';
import CreateTopupStepTwo from '../screens/client/dashboard/CreateTopupStepTwo';
import FilterHistoryScreen from '../screens/client/insights/FilterHistoryScreen';
import FilterTransactionsScreen from '../screens/client/wallet/FilterTransactionsScreen';
import TransactionsScreen from '../screens/client/wallet/TransactionsScreen';

type MainStackParamList = {
  Tab: undefined;
  TopUpDetails: undefined;
  CreateTopupStepOne: undefined;
  CreateTopupStepTwo: undefined;
  SuccessTopup: undefined;
  FailTopup: undefined;
  FilterHistoryScreen: undefined;
  FilterTransactions: undefined;
  Transactions: undefined;
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
          name="Transactions"
          component={TransactionsScreen}
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
        <Main.Screen name="FilterTransactions" component={FilterTransactionsScreen} />
      </Main.Group>
    </Main.Navigator>
  );
}

export default MainNavigator;
