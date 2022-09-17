import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Divider, Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';
import Wave from '../../../components/Wave';
import { useNavigation } from '@react-navigation/native';

type Props = {
  ammount: number;
};

const Balance = ({ ammount }: Props) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={{ padding: 32 }}>
        <Text size={22} color={COLORS.white}>
          Your Balance
        </Text>
        <Text size={32} color={COLORS.white}>{`$${ammount.toString()}`}</Text>
        <Divider style={{ marginVertical: 16 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ alignItems: 'center' }}>
            <Text h2 color={COLORS.white}>
              {'16500'}
            </Text>
            <Text size={14} color={COLORS.white}>
              Total CUP
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text h2 color={COLORS.white}>
              {'1100'}
            </Text>
            <Text size={14} color={COLORS.white}>
              Total USD
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 8 }}>
        <Wave style={{ zIndex: -1, position: 'absolute', left: 0, bottom: -1, right: 0 }} />
        <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-around' }}>
          <Pressable
            onPress={() => {
              navigation.navigate('CreateTopup');
            }}
          >
            <Icon name="plus-circle-outline" size={36} color={COLORS.black} />
          </Pressable>
          <Pressable>
            <Icon name="cellphone-nfc" size={36} color={COLORS.black} />
          </Pressable>
          <Pressable>
            <Icon name="dots-horizontal" size={36} color={COLORS.black} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: SIZES.xl,
    backgroundColor: COLORS.black,
    marginHorizontal: SIZES.m,
    marginTop: SIZES.m,
    marginBottom: SIZES.xl,
  },
});
