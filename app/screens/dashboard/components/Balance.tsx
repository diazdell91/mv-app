import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import wallet from '../../../services/walletServices';
import { Divider, Text } from '../../../components';
import { COLORS, SIZES } from '../../../theme';
import Wave from '../../../components/Wave';

type Props = {
  ammount: number;
};

const Balance = ({ ammount }: Props) => {
  const navigation = useNavigation<any>();
  const [data, setData] = useState({
    balance: 0,
    commissionRate: 0,
  });

  useEffect(() => {
    wallet
      .getWallet()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
    return () => {};
  }, []);

  if (data) {
    const { balance, commissionRate } = data;
    return (
      <View style={styles.container}>
        <View style={{ padding: 32 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Text size={22} color={COLORS.white}>
                Balance
              </Text>
              <Text size={32} color={COLORS.white}>{`$${balance.toString()}`}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text size={22} color={COLORS.white}>
                Comision
              </Text>
              <Text size={32} color={COLORS.white}>{`${commissionRate.toString()}%`}</Text>
            </View>
          </View>
          <Divider style={{ marginVertical: 16 }} />
        </View>
        <View style={{ marginTop: 8 }}>
          <Wave style={{ zIndex: -1, position: 'absolute', left: 0, bottom: -1, right: 0 }} />
          <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Pressable
              onPress={() => {
                navigation.navigate('CreateTopupStepOne');
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
  }
  return <View style={styles.container} />;
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
