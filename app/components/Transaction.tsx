/* eslint-disable indent */
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
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
      <View style={styles.wrapperIcon}>
        <Icon name="cellphone-nfc" size={24} color={COLORS.white} />
      </View>
      <View style={{ flex: 1, marginStart: 16 }}>
        <Text size={16} fontFamily={'Poppins-Bold'} color={COLORS.black}>
          {description}
        </Text>
        <Text size={14}>{moment(createdAt).format('lll')}</Text>
      </View>
      <View style={{ marginStart: 8, alignItems: 'flex-end' }}>
        <Text size={22} fontFamily={'Poppins-Bold'} color={COLORS.black}>
          {`${type === 'DEBIT' ? '-$' : '+$'}${amount}`}
        </Text>
        <Text color={COLORS.black} size={12}>
          {`${balanceBefore} USD`}
        </Text>
        <Text color={COLORS.black} size={14}>
          {`${balanceAfter} USD`}
        </Text>
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