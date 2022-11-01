import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Wallet from './components/Wallet';
import Greetings from './components/Greetings';
import Services from './components/Services';
import { useQuery } from '@apollo/client';
import { ME } from '../../../graphql/user.graphql';

const DashboardSceen = () => {
  const { data } = useQuery(ME);
  const { top } = useSafeAreaInsets();

  return data ? (
    <View style={{ ...styles.container, paddingTop: top }}>
      <Greetings />
      {data.me.role !== 'ADMIN' ? <Wallet /> : <></>}
      <Services services={data.me.servicesAllowed} />
    </View>
  ) : (
    <></>
  );
};

export default DashboardSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
