/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ScrollView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import DashedLine from 'react-native-dashed-line';
import { useQuery } from '@apollo/client';
import { USER } from '../../../graphql/user.graphql';
import { PRODUCT_CATEGORYS } from '../../../graphql/products.graphql';
import { Loading, Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';
import { CustomerProps } from '../staff/components/User';
import Wave from '../../../components/Wave';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Services from '../../client/dashboard/components/Services';
import StaffHeader from '../staff/components/StaffHeader';

type Props = {
  navigation: any;
  route: any;
} & CustomerProps;

const AVATAR_SIZE = 42;

const UserDetailsScreen = (props: Props) => {
  const { route } = props;
  const { id } = route.params;

  const { data, loading } = useQuery(USER, {
    variables: {
      id,
    },
  });

  const { data: dataServices } = useQuery(PRODUCT_CATEGORYS);
  const { top, left, bottom } = useSafeAreaInsets();

  if (loading) {
    return <Loading />;
  }
  if (data && dataServices) {
    const { user } = data;
    const { servicesAllowed, wallet } = user;
    const { productsCategorys } = dataServices;

    const allowedServices = servicesAllowed.map((item: any) => {
      console.log(item.commissionRate);
      const allowed = item ? item.commissionRate >= 0 : false;

      let icon = 'dots-horizontal-circle';
      if (item.category === 'AIRPLANETICKET') {
        icon = 'airplane';
      } else if (item.category === 'HOTELBOOKING') {
        icon = 'bed';
      } else if (item.category === 'FOODDELIVERY') icon = 'food';

      return {
        name: item.category,
        allowed: !allowed,
        icon,
      };
    });

    return (
      <>
        <View style={styles.headerContainer}>
          <StaffHeader data={user} />
          <View style={{ ...styles.alignHorizontal, marginTop: top }}>
            <View style={styles.wrapperAvatar}>
              <Icon name="account-outline" size={56} color={COLORS.white} />
            </View>
            <View style={{ marginTop: SIZES.xs }}>
              <Text align="center" color={COLORS.white}>
                {user.name}
              </Text>
              <Text align="center" h4 color={COLORS.white}>
                {user.email}
              </Text>
            </View>
          </View>
          <Wave style={styles.waves} />
        </View>
        <View style={styles.ballanceContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text size={28}>{wallet.balance / 100} </Text>
            <Icon name="currency-usd" size={28} />
          </View>
          <Text h4 align="center">
            Balance total
          </Text>
        </View>
        <View>
          <DashedLine
            dashLength={2}
            dashThickness={1}
            dashColor={COLORS.gray}
            style={{ opacity: 0.3, marginTop: -25 }}
          />
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            contentInset={{
              bottom: bottom + 100,
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={200}
          >
            <View style={{ ...styles.info, backgroundColor: '#f5f5f5' }}>
              <View>
                <Icon name="email-outline" size={38} color={COLORS.gray} />
              </View>
              <View>
                <Text h4 fontFamily={'Poppins-Medium'} style={{ marginStart: 8 }}>
                  Email
                </Text>
                <Text size={16} fontFamily={'Poppins-Medium'} style={{ marginStart: 8 }}>
                  {user.email}
                </Text>
              </View>
            </View>
            <View style={{ ...styles.info, backgroundColor: '#f5f5f5' }}>
              <View>
                <Icon name="phone-dial-outline" size={38} color={COLORS.gray} />
              </View>
              <View>
                <Text h4 fontFamily={'Poppins-Medium'} style={{ marginStart: 8 }}>
                  Teléfono
                </Text>
                <Text size={16} fontFamily={'Poppins-Medium'} style={{ marginStart: 8 }}>
                  {user.phone}
                </Text>
              </View>
            </View>
            <View style={{ ...styles.info, backgroundColor: '#f5f5f5' }}>
              <View>
                <Icon name="security" size={38} color={COLORS.gray} />
              </View>
              <View>
                <Text h4 fontFamily={'Poppins-Medium'} style={{ marginStart: 8 }}>
                  Rol
                </Text>
                <Text size={16} fontFamily={'Poppins-Medium'} style={{ marginStart: 8 }}>
                  {user.role}
                </Text>
              </View>
            </View>
            {user.rol !== 'STAFF' && (
              <View style={{ marginTop: 20 }}>
                <Services services={allowedServices} title="Servicios" />
              </View>
            )}
          </ScrollView>
        </View>
      </>
    );
  }
  return null;
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
  alignHorizontal: { alignItems: 'center', justifyContent: 'center' },
  headerContainer: { height: 400, backgroundColor: COLORS.black },
  ballanceContainer: {
    top: -40,
    margin: 8,
    marginBottom: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  container: {
    margin: 8,
    marginBottom: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  info: {
    borderRadius: 8,
    overflow: 'hidden',
    padding: SIZES.l,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 12,
    marginHorizontal: 10,
  },
  wrapperAvatar: {
    borderRadius: AVATAR_SIZE,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.placeHolder,
    padding: 12,
  },
  editButton: {
    position: 'absolute',
    borderWidth: 1.5,
    borderColor: COLORS.white,
    padding: 2,
    borderRadius: 42,
    backgroundColor: COLORS.placeHolder,
  },
  waves: { zIndex: -1, position: 'absolute', left: 0, bottom: -1, right: 0 },

  contentContainer: {
    justifyContent: 'space-between',
  },
});
