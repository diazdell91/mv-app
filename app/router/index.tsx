import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/auth/authProvider';
import PrivacyPolicy from '../screens/Info/PrivacyPolicy';
import LoadingScreen from '../screens/loading/LoadingScreen';
import { COLORS } from '../theme';

//navigation

import MainAdminNavigator from './Main';
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
  console.log(isAuthenticated, session, isLoading);
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading && <RootStack.Screen name="Loading" component={LoadingScreen} />}
      {isAuthenticated ? (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <RootStack.Screen name="Main" component={MainAdminNavigator} />
      )}
      <RootStack.Screen name="Info" component={PrivacyPolicy} />
    </RootStack.Navigator>
  );
}
