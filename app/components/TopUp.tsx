/* eslint-disable indent */
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import moment from 'moment';
import { COLORS } from '../theme';
import Text from './Text';

type Props = {
  id: string;
  amountCup: number;
  phoneNumber: string;
  processingState: string;
  createdAt: string;
};

const TopUp = (props: Props) => {
  const { amountCup, phoneNumber, processingState, createdAt } = props;

  return (
    <View style={styles.container}>
      <View style={styles.wrapperIcon}>
        <Icon name="cellphone-nfc" size={22} color={COLORS.white} />
      </View>
      <View style={{ flex: 1, marginStart: 16 }}>
        <Text size={16} fontFamily={'Poppins-Bold'} color={COLORS.black}>
          {phoneNumber}
        </Text>
        <Text size={12}>{moment(createdAt).format('lll')}</Text>
      </View>
      <View style={{ marginStart: 8 }}>
        <Text size={18} fontFamily={'Poppins-Bold'} color={COLORS.black}>
          {amountCup} CUP
        </Text>
      </View>
      <View
        style={{
          ...styles.state,
          backgroundColor:
            processingState === 'COMPLETED'
              ? COLORS.primary
              : processingState === 'CANCELLED'
              ? COLORS.strawberry
              : COLORS.fog,
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
