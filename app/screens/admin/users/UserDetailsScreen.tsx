/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ScrollView, StyleSheet, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { USER } from '../../../graphql/user.graphql';
import { PRODUCT_CATEGORYS } from '../../../graphql/products.graphql';
import { Input, Loading, Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';
import { CustomerProps } from '../staff/components/User';
import StaffHeader from '../staff/components/StaffHeader';

type Props = {
  navigation: any;
  route: any;
} & CustomerProps;

const UserDetailsScreen = (props: Props) => {
  const { route } = props;
  const { id } = route.params;

  const { data, loading } = useQuery(USER, {
    variables: {
      id,
    },
  });

  const { data: dataServices } = useQuery(PRODUCT_CATEGORYS);

  if (loading) {
    return <Loading />;
  }
  if (data && dataServices) {
    const { user } = data;
    const { servicesAllowed, wallet } = user;

    const allowedServices = servicesAllowed.map((item: any) => {
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
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <StaffHeader data={user} />
          <View style={{ ...styles.alignHorizontal }}>
            <View style={{ marginTop: SIZES.xs }}>
              <Text align="center" color={COLORS.white}>
                {user.name}
              </Text>
              <Text align="center" h4 color={COLORS.white}>
                {user.email}
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={styles.ballanceContainer}>
            <Text size={28}>{wallet.balance / 100} </Text>
            <Text h4 align="center">
              Balance total
            </Text>
          </View>
          <View>
            <View style={{ flex: 1 }}>
              <Input value={user.email} iconLeft="email" editable={false} />
              <Input value={user.phone} iconLeft="phone-dial-outline" editable={false} />
              <Input value={user.role} iconLeft="security" editable={false} />
              {user.rol !== 'STAFF' && (
                <View style={{ marginTop: 20 }}>
                  <Text color={COLORS.black} style={{ marginHorizontal: 8 }}>
                    Servicios
                  </Text>
                  {allowedServices.map((item: any, index: number) => (
                    <Text style={{ margin: 8 }} key={index}>
                      {item.name}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  return null;
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
  alignHorizontal: { alignItems: 'center', justifyContent: 'center' },
  headerContainer: { backgroundColor: COLORS.black, padding: 16 },
  ballanceContainer: {
    margin: 8,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
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
});
