import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Balance from './components/Balance';
import TopUp from './components/TopUp';
import Wallet from './components/Wallet';

const DashboardSceen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <Balance ammount={2000} />
      <Wallet ammount={1100} />
      <TopUp />
    </View>
  );
};

export default DashboardSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
