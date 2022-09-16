import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
  id: string;
  amount: number;
  phoneNumber: string;
  processingState: string;
  dateTime: string;
};

const TopUp = (props: Props) => {
  const {
    id = '002',
    amount = 1000,
    phoneNumber = '583834553',
    processingState = 'COMPLETADA',
  } = props;
  console.log('Props', props);

  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={{
        ...styles.container,
        borderLeftColor: processingState === 'COMPLETED' ? COLORS.green : COLORS.red2,
      }}
    >
      <View style={{ flex: 1, marginHorizontal: SIZES.m }}>
        <Text size={22} fontFamily="Poppins-Bold" color={COLORS.gray}>
          {phoneNumber}
        </Text>
        <Text size={18} color={COLORS.gray}>{`$${amount.toString()}`}</Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('TopUpDetails', { props });
        }}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Icon name="dots-vertical" size={32} color={COLORS.black} />
      </Pressable>
    </Pressable>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SIZES.m,
    backgroundColor: COLORS.background,
    padding: SIZES.m,
    margin: SIZES.m,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 100,
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderLeftWidth: 22,
  },
});
