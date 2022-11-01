import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from '../../../../components';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../../theme';

type Props = {
  title: string;
  onPress?: () => void;
  color: string;
  icon: React.ComponentProps<typeof Icon>['name'];
};
export default function InventaryItem({ title, color, icon, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View style={{ alignItems: 'flex-start' }}>
        <View style={{ ...styles.item, borderColor: color }}>
          <Icon color={color} name={icon} size={64} />
          <Text h3 align="center">
            {title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: COLORS.white,
    padding: SIZES.l,
    marginHorizontal: 4,
    marginVertical: SIZES.xs,
    borderWidth: 1,
    shadowColor: COLORS.black,
    shadowRadius: 12,
    shadowOffset: {
      width: 20,
      height: 1,
    },
    shadowOpacity: 0.4,
    width: 130,
    maxWidth: 130,
  },
});
