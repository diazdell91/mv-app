//import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from '../../../../components';
import { COLORS } from '../../../../theme';

type Props = {
  name: string;
  price: number;
  description: string;
  selected: boolean;
};

const TopupProduct = (props: Props) => {
  const { name, price, description, selected } = props;
  const priceInt = Math.floor(price / 100).toFixed(2);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: selected ? COLORS.placeHolder : COLORS.stornGray,
      }}
    >
      <Text color={COLORS.caramel}>Recarga</Text>
      <Text h2 color={COLORS.caramel}>
        {name}
      </Text>
      <Text h2 size={18} color={COLORS.white}>
        {description}
      </Text>
      <Text h2 size={26} color={COLORS.white}>
        <Text size={26} color={COLORS.white}>
          {'Precio'}
        </Text>
        {` - $${priceInt.toString()} USD`}
      </Text>
      {selected && (
        <MaterialCommunityIcons
          name="hand-pointing-left"
          size={72}
          color={COLORS.caramel}
          style={{ position: 'absolute', right: 0, bottom: 16 }}
        />
      )}
    </View>
  );
};

export default TopupProduct;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderRadius: 16,
    padding: 16,
  },
  customer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});