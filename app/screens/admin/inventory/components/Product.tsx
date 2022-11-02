/* eslint-disable indent */
import { Pressable, StyleSheet, View } from 'react-native';
import { COLORS, SIZES } from '../../../../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Text } from '../../../../components';

type Props = {
  onUpdate: (item: any) => void;
  onBlock: (item: any) => void;
  item: any;
};
export default function Product({ onUpdate, onBlock, item }: Props) {
  const icon =
    item.category === 'TOPUP'
      ? 'phone-dial-outline'
      : item.category === 'AIRPLANETICKET'
      ? 'airplane'
      : item.category === 'FOODDELIVERY'
      ? 'food'
      : item.category === 'HOTELBOOKING'
      ? 'bed'
      : 'dots-horizontal-circle';

  const disabled = item.disabled ? 'toggle-switch-off-outline' : 'toggle-switch';

  return (
    <Pressable onPress={() => onUpdate(item)}>
      <View style={styles.item}>
        <View style={{ ...styles.flexRow, alignItems: 'center' }}>
          <Icon name={icon} size={24} color={COLORS.mineShaft} />
          <View style={{ marginLeft: 4 }}>
            <Text>{item.name}</Text>
            <Text h4>{item.description}</Text>
            <Text h4>
              Precio: <Icon color={COLORS.black} name="currency-usd" size={12} />
              {item.price}
            </Text>
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.border} />
          <View style={styles.itemOptions}>
            <Icon color={COLORS.black} onPress={() => onBlock(item)} name={disabled} size={38} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: SIZES.xxs,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  border: {
    borderLeftWidth: 1.5,
    borderLeftColor: COLORS.black,
    marginRight: 6,
  },
  itemOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
