import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/auth/authProvider';
import LoadingScreen from '../screens/loading/LoadingScreen';
import { COLORS } from '../theme';

//navigation
import MainNavigator from './Main';
import MainStaffNavigator from './MainStaff';
import AuthNavigator from './stacks/AuthStack';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.black,
    background: COLORS.white,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootStack = createNativeStackNavigator();

function RootNavigator() {
  const { isAuthenticated, session, isLoading } = useAuth();

  const roles = session?.user?.roles;

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading && <RootStack.Screen name="Loading" component={LoadingScreen} />}
      {!isAuthenticated || !session ? (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <>
          {roles.includes('1000') ? (
            <RootStack.Screen name="Main" component={MainNavigator} />
          ) : (
            <RootStack.Screen name="StaffMain" component={MainStaffNavigator} />
            //<RootStack.Screen name="MainClient" component={MainNavigator} />
          )}
        </>
      )}
    </RootStack.Navigator>
  );
}
