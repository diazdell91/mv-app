/* eslint-disable indent */
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import moment from 'moment';
import { COLORS } from '../theme';
import Text from './Text';

type Props = {
  id: string;
  amount: number;
  phoneNumber: string;
  processingState: string;
  createAt: string;
};

const TopUp = (props: Props) => {
  const { id, amount, phoneNumber, processingState, createAt } = props;
  console.log(processingState);
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: COLORS.black,
          height: 52,
          width: 52,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name="cellphone-nfc" size={24} color={COLORS.white} />
      </View>
      <View style={{ flex: 1, marginStart: 16 }}>
        <Text size={16} fontFamily={'Poppins-Bold'} color={COLORS.black}>
          {phoneNumber}
        </Text>
        <Text size={14}>{moment(createAt).format('lll')}</Text>
      </View>
      <View style={{ marginStart: 8 }}>
        <Text size={18} fontFamily={'Poppins-Bold'} color={COLORS.black}>
          {amount} CUP
        </Text>
      </View>
      <View
        style={{
          ...styles.state,
          backgroundColor: processingState === 'COMPLETED' ? COLORS.green : COLORS.red,
        }}
      >
        <Icon
          name={
            processingState === 'COMPLETED'
              ? 'check'
              : processingState === 'CANCELLED'
              ? 'window-close'
              : 'clock-fast'
          }
          size={24}
          color={COLORS.white}
        />
      </View>
    </View>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    padding: 8,
    borderBottomColor: COLORS.backgroundAlt,
    borderBottomWidth: 0.3,
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
