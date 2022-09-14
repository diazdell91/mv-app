import { StyleSheet, View } from 'react-native';
import { Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';

type Props = {
  ammount: number;
};

const Wallet = ({ ammount }: Props) => {
  const ammountCup = ammount * 150;
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text size={22} color={COLORS.white}>{`$${ammountCup.toString()}`}</Text>
        <Text color={COLORS.white} size={14}>
          Total CUP
        </Text>
      </View>
      <View style={styles.section}>
        <Text size={22} color={COLORS.white}>{`$${ammount.toString()}`}</Text>
        <Text color={COLORS.white} size={14}>
          Total USD
        </Text>
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: SIZES.m,
    backgroundColor: COLORS.green,
    padding: SIZES.m,
    margin: SIZES.m,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
