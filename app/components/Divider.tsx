import { StyleSheet, View, ViewStyle } from 'react-native';
import { COLORS } from '../theme';

interface Props {
  style?: ViewStyle;
}

const Divider = ({ style }: Props) => {
  return <View style={[styles.container, style]} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 0.5,
    backgroundColor: COLORS.gray,
  },
});
