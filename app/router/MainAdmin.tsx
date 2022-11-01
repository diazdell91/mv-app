import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AdminTabNavigation from './TabAdminNavigator';
import TopUpDetails from '../screens/client/dashboard/TopUpDetails';
import SuccessTopup from '../screens/client/dashboard/views/SuccessTopup';
import FailTopup from '../screens/client/dashboard/views/FailTopup';
import CreateUserScreen from '../screens/admin/users/CreateUserScreen';
import SuccessUser from '../screens/admin/staff/views/SuccessUser';
import CreateTopupStepOne from '../screens/client/dashboard/CreateTopupStepOne';
import CreateTopupStepTwo from '../screens/client/dashboard/CreateTopupStepTwo';
import FilterHistoryScreen from '../screens/insights/FilterHistoryScreen';
import UserServicesScreen from '../screens/admin/users/UserServicesScreen';
import UserDetailsScreen from '../screens/admin/users/UserDetailsScreen';
import UserUpdateScreen from '../screens/admin/users/UserUpdateScreen';
import StatsScreen from '../screens/admin/stats/StatsScreen';
import { Header } from '../components';
import { COLORS } from '../theme';
import FilterStatsScreen from '../screens/admin/stats/views/FilterStatsScreen';
import ModalProductDetails from '../screens/admin/stats/views/ModalProductDetails';
import UpdateProductScreen from '../screens/admin/inventory/views/UpdateProductScreen';
import CreateProductScreen from '../screens/admin/inventory/views/CreateProductScreen';
import ChangeUserPassword from '../screens/admin/users/ChangeUserPassword';
import SelectServiceModal from '../screens/admin/inventory/views/SelectServiceModal';

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
  FilterStatstScreen: undefined;
  UserServices: undefined;
  UserDetails: undefined;
  UserUpdate: undefined;
  LockUser: undefined;
  AdminStats: undefined;
  ProductDetails: undefined;
  UpdateProduct: undefined;
  ListProducts: undefined;
  CreateProduct: undefined;
  ChangePassword: undefined;
  SelectService: undefined;
};

export type MainProps = NativeStackScreenProps<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

function MainAdminNavigator() {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="Tab" component={AdminTabNavigation} />
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
        <Main.Screen
          name="UserServices"
          component={UserServicesScreen}
          options={{
            title: 'Servicios del usuario',
          }}
        />
        <Main.Screen
          name="UserDetails"
          component={UserDetailsScreen}
          options={{
            title: 'Detalles del usuario',
            headerShown: false,
          }}
        />
        <Main.Screen
          name="UserUpdate"
          component={UserUpdateScreen}
          options={{
            title: 'Actualizar Usuario',
          }}
        />

        <Main.Screen
          name="ChangePassword"
          component={ChangeUserPassword}
          options={{
            title: 'Actualizar contraseña',
          }}
        />
        <Main.Screen
          name="CreateProduct"
          options={{
            title: 'Adicionar Producto',
          }}
          component={CreateProductScreen}
        />
        <Main.Screen
          name="UpdateProduct"
          options={{
            title: 'Actualizar Producto',
          }}
          component={UpdateProductScreen}
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
        <Main.Screen
          name="AdminStats"
          options={{
            headerShown: true,
            header: ({ navigation }) => (
              <Header
                title="Estadísticas"
                iconRightName="filter"
                iconRightColor={COLORS.black}
                iconRightPress={() => {
                  navigation.navigate('FilterStatstScreen');
                }}
              />
            ),
          }}
          component={StatsScreen}
        />
      </Main.Group>
      <Main.Group
        key={'modal'}
        screenOptions={{ headerShown: false, presentation: 'containedModal' }}
      >
        <Main.Screen name="TopUpDetails" component={TopUpDetails} />
        <Main.Screen name="FilterHistoryScreen" component={FilterHistoryScreen} />
        <Main.Screen name="FilterStatstScreen" component={FilterStatsScreen} />
      </Main.Group>

      <Main.Screen
        name="ProductDetails"
        options={{
          presentation: 'transparentModal',
        }}
        component={ModalProductDetails}
      />
      <Main.Group
        key={'modal'}
        screenOptions={{ headerShown: false, presentation: 'transparentModal' }}
      >
        <Main.Screen name="SelectService" component={SelectServiceModal} />
      </Main.Group>
    </Main.Navigator>
  );
}

export default MainAdminNavigator;
