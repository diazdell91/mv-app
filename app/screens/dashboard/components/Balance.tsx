import { StyleSheet, View } from 'react-native';
import { Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';

type Props = {
  ammount: number;
};

const Balance = ({ ammount }: Props) => {
  return (
    <View style={styles.container}>
      <Text color={COLORS.white}>Balance</Text>
      <Text h2 color={COLORS.white}>{`$${ammount.toString()}`}</Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SIZES.m,
    backgroundColor: COLORS.primary,
    padding: SIZES.m,
    marginHorizontal: SIZES.m,
    marginTop: SIZES.m,
  },
});
