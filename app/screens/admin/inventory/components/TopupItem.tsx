import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../../../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Text } from '../../../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  onWatch: () => void;
  onUpdate: (item: any) => void;
  onRemove: (item: any) => void;
  onComplete: (item: any) => void;
  onReassign: (item: any) => void;
  onCancel: (item: any) => void;
  item: any;
};
export default function TopupItem({
  onWatch,
  onUpdate,
  onRemove,
  onComplete,
  onReassign,
  onCancel,
  item,
}: Props) {
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

  return (
    <TouchableOpacity onPress={() => onUpdate(item)}>
      <View style={styles.item}>
        <View style={{ ...styles.flexRow, alignItems: 'center' }}>
          <Icon name={icon} size={24} />
          <View style={{ marginLeft: 4 }}>
            <Text>{item.name}</Text>
            <Text h4>{item.description}</Text>
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.border} />
          {/* <Icon onPress={onWatch} name="eye-outline" color={COLORS.gray} size={24} /> 
        <Icon onPress={() => onComplete(item)} name="check-circle" color={COLORS.blue} size={24} />
        <Icon onPress={() => onReassign(item)} name="replay" color={COLORS.yellow} size={24} />
        <Icon onPress={() => onReassign(item)} name="replay" color={COLORS.yellow} size={24} />
        <Icon onPress={() => onCancel(item)} name="close-circle" color="#ea580c" size={24} /> */}

          <View style={styles.itemOptions}>
            <Icon color={COLORS.blue} name="currency-usd" size={18} />
            <Text color={COLORS.blue}>{item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    shadowColor: COLORS.black,
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 0,
      width: 5,
    },
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
    maxWidth: 75,
    width: 70,
  },
});
