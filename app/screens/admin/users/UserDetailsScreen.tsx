/* eslint-disable @typescript-eslint/no-unsafe-return */
import { StyleSheet, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { USER } from '../../../graphql/user.graphql';
import { Loading, Text } from '../../../components';
import { PRODUCT_CATEGORYS } from '../../../graphql/products.graphql';

type Props = {
  navigation: any;
  route: any;
};

const UserDetailsScreen = (props: Props) => {
  const { navigation, route } = props;
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
    console.log(data);
    const { user } = data;
    const { servicesAllowed } = user;
    const { wallet } = user;
    const { productsCategorys } = dataServices;

    const allowedServices = servicesAllowed.map(({ category }) => category);

    console.log('allowed', allowedServices);

    const services = productsCategorys.map((item) => {
      return {
        category: item,
        allowed: allowedServices.includes(item),
      };
    });

    console.log('Servicios', services);

    return (
      <View style={styles.container}>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
        <Text>{user.role}</Text>
      </View>
    );
  }
  return null;
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
