import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Wallet from './components/Wallet';
import Greetings from './components/Greetings';
import Services from './components/Services';

const DashboardSceen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <Greetings />
      <Wallet />
      <Services />
    </View>
  );
};

export default DashboardSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
