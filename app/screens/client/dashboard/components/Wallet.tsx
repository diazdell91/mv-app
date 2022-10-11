import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Divider, Text } from '../../../../components';
import { COLORS, SIZES } from '../../../../theme';
import Wave from '../../../../components/Wave';
import { useQuery } from '@apollo/client';
import { ME } from '../../../../graphql/user.graphql';
import { financial } from '../../../../util/financial';

const Wallet = () => {
  const navigation = useNavigation<any>();

  const { data } = useQuery(ME);

  if (data) {
    console.log(data);
    const { me } = data;
    const wallet = me?.wallet;
    const balance = wallet?.balance || '0.00';
    const currency = wallet?.currency || 'USD';

    return (
      <View style={styles.container}>
        <View style={{ padding: 32 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <View>
              <Text size={22} color={COLORS.white}>
                Balance
              </Text>
              <Text size={32} color={COLORS.white}>
                {financial(balance)} {currency}
              </Text>
            </View>
          </View>
          <Divider style={{ marginVertical: 16 }} />
        </View>
        <View style={{ marginTop: 8 }}>
          <Wave style={{ zIndex: -1, position: 'absolute', left: 0, bottom: -1, right: 0 }} />
          <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-around' }}>
            <Pressable
              onPress={() => {
                // navigation.navigate('CreateTopupStepOne');
              }}
            >
              <Icon name="progress-download" size={36} color={COLORS.black} />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Transactions');
              }}
            >
              <Icon name="progress-clock" size={36} color={COLORS.black} />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
  return <View style={styles.container} />;
};

export default Wallet;

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
