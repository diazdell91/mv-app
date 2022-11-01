import React from 'react';
import {
  StyleSheet,
  View,
  TextInput as DefaultInput,
  StyleProp,
  ViewStyle,
  Pressable,
  PressableProps,
} from 'react-native';
import { COLORS, SIZES } from '../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import Text from './Text';

interface InputProps {
  style?: StyleProp<ViewStyle>;
  inputStyle?: React.ComponentProps<typeof DefaultInput>['style'];
  iconLeft?: React.ComponentProps<typeof Icon>['name'];
  iconLeftColor?: string;
  iconRight?: React.ComponentProps<typeof Icon>['name'];
  iconLeftComponent?: React.ReactNode;
  iconRightColor?: string;
  onPressRight?: PressableProps['onPress'];
  flex?: boolean;
  label?: string;
}
type Props = InputProps & DefaultInput['props'];

const Input = (props: Props) => {
  const {
    style,
    inputStyle,
    iconRight,
    iconLeft,
    iconLeftComponent,
    iconLeftColor = COLORS.stroke,
    iconRightColor = COLORS.stroke,
    onPressRight,
    flex,
    label,
    ...rest
  } = props;

  return (
    <View style={{ flex: flex ? 1 : 0, paddingTop: label ? 5 : 0 }}>
      {label && <Text style={{ marginStart: 5 }}>{label}</Text>}
      <View style={[{ ...styles.container, flex: flex ? 1 : 0 }, style]}>
        {iconLeftComponent && iconLeftComponent}
        {iconLeft && (
          <View style={styles.iconLeft}>
            <Icon name={iconLeft} color={iconLeftColor} size={22} />
          </View>
        )}
        <DefaultInput
          style={[styles.inputContainer, { paddingLeft: iconLeft ? 52 : 16 }, inputStyle]}
          placeholderTextColor={COLORS.textDark}
          autoCorrect={false}
          autoCapitalize="none"
          textContentType="none"
          {...rest}
        />
        {iconRight && (
          <Pressable onPress={onPressRight} style={styles.iconRigth}>
            <Icon name={iconRight} color={iconRightColor} size={22} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Input;

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
    position: 'relative',
    height: SIZES.inputHeight,
    width: '100%',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.black,
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
