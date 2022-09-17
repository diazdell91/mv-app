import { StyleSheet, Text, View } from 'react-native';
import TabBarInsights from './components/TabBarInsights';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const InsightsScreen = () => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop }}>
      <TabBarInsights />
    </View>
  );
};

export default InsightsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
