import { Pressable, StyleSheet } from 'react-native';
import { Text } from '../../../../components';
import { COLORS } from '../../../../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

type Props = {
  category: string;
  isAdded: boolean;
  onPress: () => void;
};

const ServicesCategorys = ({ category, isAdded, onPress }: Props) => {
  return (
    <Pressable
      key={category}
      onPress={onPress}
      style={{
        ...styles.category,
        backgroundColor: isAdded ? COLORS.placeHolder : COLORS.white,
      }}
    >
      <Icon
        name={isAdded ? 'check-bold' : 'circle-outline'}
        size={24}
        color={isAdded ? COLORS.primary : COLORS.placeHolder}
        style={{ marginEnd: 16 }}
      />
      <Text
        fontFamily="Poppins-Bold"
        style={{
          ...styles.categoryText,
          color: isAdded ? COLORS.white : COLORS.placeHolder,
        }}
      >
        {category}
      </Text>
    </Pressable>
  );
};

export default ServicesCategorys;

const styles = StyleSheet.create({
  category: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryText: {
    color: COLORS.primary,
    fontSize: 14,
  },
});
