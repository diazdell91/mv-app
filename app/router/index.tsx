import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/auth/authProvider';
import LoadingScreen from '../screens/loading/LoadingScreen';
import { COLORS } from '../theme';

//navigation
import MainNavigator from './Main';
import AuthNavigator from './stacks/AuthStack';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    background: COLORS.background,
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

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading && <RootStack.Screen name="Loading" component={LoadingScreen} />}
      {!isAuthenticated || !session ? (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <>
          <RootStack.Screen name="Main" component={MainNavigator} />
        </>
      )}
    </RootStack.Navigator>
  );
}
