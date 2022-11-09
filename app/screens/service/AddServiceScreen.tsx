import { StyleSheet, View } from 'react-native';
import { SelectOnModal } from '../../components';

type Props = {};

const AddServiceScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <SelectOnModal placeholder="Facebook Ads" />
      <SelectOnModal placeholder="Armando Garcia" />
    </View>
  );
};

export default AddServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
