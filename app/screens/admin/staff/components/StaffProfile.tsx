/* eslint-disable indent */
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Text } from '../../../../components';
import { COLORS } from '../../../../theme';

type Props = {
  name: string;
  balance?: number;
};

const AVATAR_SIZE = 42;

const StaffProfile = (props: Props) => {
  const { name, balance = 2000 } = props;
  const show = [
    { status: 'show' },
    { status: 'cancel' },
    { status: 'modify' },
    { status: 'show' },
    { status: 'noShow' },
    { status: 'show' },
    { status: 'show' },
    { status: 'show' },
    { status: 'noShow' },
    { status: 'show' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.wrapperAvatar}>
        <Icon name="account-outline" size={28} color={COLORS.white} />
      </View>
      <View>
        <Text size={14} fontFamily={'Poppins-Medium'}>
          {name}
        </Text>
        <View style={styles.wrapperIndicator}>
          {show.map(({ status }, index) => {
            const backgroundColor =
              status === 'show'
                ? COLORS.green
                : status === 'modify'
                ? COLORS.gray
                : status === 'noShow'
                ? COLORS.red
                : COLORS.black;

            return <View key={index} style={{ ...styles.indicator, backgroundColor }} />;
          })}
        </View>
        <View style={styles.wrapperInfo}>
          {balance && <Text size={12} color={COLORS.gray}>{` ${balance?.toString()} CUP`}</Text>}
        </View>
      </View>
    </View>
  );
};

export default StaffProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginEnd: 16,
  },
  wrapperAvatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 8,
    borderWidth: 1.5,
    borderColor: COLORS.placeHolder,
    backgroundColor: COLORS.placeHolder,
  },
  wrapperIndicator: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginEnd: 2,
  },
  wrapperInfo: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 8,
  },
});