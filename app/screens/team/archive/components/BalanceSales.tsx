import { StyleSheet, View } from 'react-native';
import { Text } from '../../../../components';
import { COLORS } from '../../../../theme';

type Props = {
  title?: string;
  total: number;
  currency?: string;
};

const BalanceSales = (props: Props) => {
  const { title = 'BALANCE(Sales)', total, currency = 'CUP' } = props;
  return (
    <View style={styles.container}>
      <Text size={18} color={COLORS.gray}>
        {title}
      </Text>
      <Text size={32} fontFamily="Poppins-Bold" color={COLORS.placeHolder}>
        {`$${total} ${currency}`}
      </Text>
    </View>
  );
};

export default BalanceSales;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
});
