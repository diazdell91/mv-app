import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import CreateProductScreen from '../screens/product/CreateProductScreen';
import { COLORS } from '../theme';
import CreateContactScreen from '../screens/contacts/CreateContactScreen';
import TypeModal from '../screens/contacts/TypeModal';
import ConctacDetails from '../screens/contacts/ConctacDetails';
import AddServiceScreen from '../screens/service/AddServiceScreen';

type MainStackParamList = {
  Tab: undefined;
  CreateProduct: undefined;
  UpdateProduct: { id: string };
  ProductDetails: { id: string };
  CreateContact: undefined;
  UpdateContact: { id: string };
  ContactDetails: { id: string };
  ContactType: undefined;
  AddService: undefined;
};

export type MainProps = NativeStackScreenProps<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

function MainAdminNavigator() {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="Tab" component={TabNavigator} />
      <Main.Group
        screenOptions={{
          headerShown: true,
          headerBackTitle: '',
          headerTitleStyle: {
            color: COLORS.black,
            fontSize: 18,
            fontFamily: 'Poppins-Bold',
          },
        }}
      >
        <Main.Screen
          name="CreateProduct"
          options={{ title: 'Crear Servicio' }}
          component={CreateProductScreen}
        />
        <Main.Screen
          name="UpdateProduct"
          options={{ title: 'Actualizar' }}
          component={CreateProductScreen}
        />
        <Main.Screen
          name="CreateContact"
          options={{ title: 'Crear contacto' }}
          component={CreateContactScreen}
        />
        <Main.Screen name="ContactDetails" options={{ title: '' }} component={ConctacDetails} />
        <Main.Screen
          name="ContactType"
          options={{ title: 'Selecciona un tipo' }}
          component={TypeModal}
        />
        <Main.Screen
          name="AddService"
          options={{ title: 'Selecciona un tipo' }}
          component={AddServiceScreen}
        />
      </Main.Group>
    </Main.Navigator>
  );
}

export default MainAdminNavigator;
