import { StyleSheet, View, StyleProp, ViewStyle, Pressable, PressableProps } from 'react-native';
import { COLORS, SIZES } from '../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import Text from './Text';

interface InputProps {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  label?: string;
}
type Props = InputProps & PressableProps;

const SelectOnModal = (props: Props) => {
  const { style, placeholder, label, ...rest } = props;

  return (
    <Pressable {...rest} style={{ paddingTop: label ? 5 : 0 }}>
      {label && <Text style={{ marginStart: 5 }}>{label}</Text>}
      <View style={[{ ...styles.container }, style]}>
        <View style={[styles.inputContainer, { paddingLeft: 16 }]}>
          <Text style={styles.inputText}>{placeholder}</Text>
        </View>
        <View style={styles.iconRigth}>
          <Icon name={'chevron-right'} color={COLORS.black} size={32} />
        </View>
      </View>
    </Pressable>
  );
};

export default SelectOnModal;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    marginVertical: SIZES.xs,
    borderWidth: 0.5,
    borderColor: COLORS.blackOpacity,
    borderRadius: 16,
  },
  inputContainer: {
    height: SIZES.inputHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.textDark,
  },
  iconLeft: {
    zIndex: 1,
    position: 'absolute',
    left: SIZES.s,
  },
  iconRigth: {
    position: 'absolute',
    right: SIZES.s,
  },
});
