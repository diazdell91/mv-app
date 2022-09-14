import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
  id: string;
  ammount: number;
  phone: string;
  status: string;
  dateTime: string;
};

const TopUp = (props: Props) => {
  const {
    id = '002',
    ammount = '500',
    phone = '583834553',
    status = 'COMPLETADA',
    dateTime,
  } = props;

  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginHorizontal: SIZES.m }}>
        <Text size={22} fontFamily="Poppins-Bold" color={COLORS.gray}>
          {phone}
        </Text>
        <Text size={18} color={COLORS.gray}>{`$${ammount.toString()}`}</Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('TopUpDetails', { id });
        }}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Icon name="dots-vertical" size={32} color={COLORS.black} />
      </Pressable>
    </View>
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
    borderLeftColor: COLORS.gray,
    borderLeftWidth: 22,
  },
});
