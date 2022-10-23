/* eslint-disable indent */
import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import { COLORS } from '../theme';
import Text from './Text';

type Props = {
  _id: string;
  walletId: string;
  amount: number;
  type: string;
  description: string;
  balanceAfter: number;
  balanceBefore: number;
  createdAt: string;
  updatedAt: string;
};

const Transaction = (props: Props) => {
  const { amount, description, type, balanceBefore, balanceAfter, createdAt } = props;
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginStart: 16 }}>
        <Text size={16} fontFamily={'Poppins-Bold'} color={COLORS.black}>
          {type}
        </Text>
        <Text size={14} color={COLORS.gray}>
          {description}
        </Text>
        <Text size={12}>{moment(createdAt).format('lll')}</Text>
        <Text size={12}>
          {`${(balanceBefore / 100).toFixed(2)} USD`} {`${(balanceAfter / 100).toFixed(2)} USD`}
        </Text>
      </View>
      <View style={{ marginStart: 8, alignItems: 'flex-end' }}>
        <Text size={18} fontFamily={'Poppins-Bold'} color={COLORS.black}>
          {`${(amount / 100).toFixed(2)}$`}
        </Text>
        {/* <Text color={COLORS.black} size={12}>
          {`${balanceBefore} USD`}
        </Text>
        <Text color={COLORS.black} size={14}>
          {`${balanceAfter} USD`}
        </Text> */}
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    padding: 8,
    borderBottomColor: COLORS.backgroundAlt,
    borderBottomWidth: 0.3,
  },
  wrapperIcon: {
    backgroundColor: COLORS.caramel,
    height: 52,
    width: 52,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  state: {
    height: 32,
    width: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
});
