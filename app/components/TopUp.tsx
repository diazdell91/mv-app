/* eslint-disable indent */
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import moment from 'moment';
import { COLORS } from '../theme';
import Text from './Text';
import { useAuth } from '../context/auth/authProvider';

type Props = {
  id: string;
  amountCup: number;
  product: {
    id: string;
    name: string;
    receiveValue: number;
    price: number;
  };
  phone: string;
  status: string;
  createdAt: number;
};

const TopUp = (props: Props) => {
  const { phone, status, createdAt, product, ...otherProps } = props;
  const { user } = useAuth();
  const price = user?.role === 'STAFF' ? product.receiveValue : (product.price / 100).toFixed(2);
  const priceCurrency = user?.role === 'STAFF' ? 'CUP' : 'USD';
  return (
    <TouchableOpacity activeOpacity={0.5} {...otherProps}>
      <View style={styles.container}>
        <View style={styles.wrapperIcon}>
          <Icon name="cellphone-nfc" size={22} color={COLORS.white} />
        </View>
        <View style={{ flex: 1, marginStart: 16 }}>
          <Text size={16} fontFamily={'Poppins-Bold'} color={COLORS.black}>
            {phone}
          </Text>
          <Text size={12}>{moment(createdAt).format('lll')}</Text>
        </View>
        <View style={{ marginStart: 8 }}>
          <Text size={16} fontFamily={'Poppins-Bold'} color={COLORS.black}>
            {price} {priceCurrency}
          </Text>
        </View>
        <View
          style={{
            ...styles.state,
            backgroundColor:
              status === 'COMPLETED'
                ? COLORS.primary
                : status === 'CANCELLED'
                ? COLORS.strawberry
                : COLORS.fog,
          }}
        >
          <Icon
            name={
              status === 'COMPLETED'
                ? 'check'
                : status === 'CANCELLED'
                ? 'window-close'
                : 'clock-fast'
            }
            size={24}
            color={COLORS.white}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  wrapperIcon: {
    backgroundColor: COLORS.placeHolder,
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
