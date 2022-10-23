import { StyleSheet, View } from 'react-native';
import { Text } from '../../../components';
import { COLORS } from '../../../theme';

type Props = {
  selected: boolean;
  item?: {
    label: string;
    value: string;
  };
};

const SelectedFilter = ({ selected, item: { label } }: Props) => {
  const backgroundColor = selected ? COLORS.beeswax : '#fff';
  const color = selected ? '#000' : COLORS.stornGray;
  return (
    <View style={{ ...styles.item, backgroundColor }}>
      <Text color={color}>{label}</Text>
    </View>
  );
};

export default SelectedFilter;

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 32,
    marginHorizontal: 8,
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
