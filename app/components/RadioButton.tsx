import { Pressable, StyleSheet } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { COLORS } from '../theme';

type Props = {
  selected: boolean;
  toggle?: () => void;
  size?: number;
};

const RadioButton = ({ selected, size = 32, toggle }: Props) => {
  return (
    <Pressable onPress={toggle ? toggle : null} style={styles.container}>
      <Icon
        name={selected ? 'ios-checkmark-circle' : 'ios-radio-button-off'}
        size={size}
        color={COLORS.gray}
      />
    </Pressable>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
});
