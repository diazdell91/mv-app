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

interface InputProps {
  style?: StyleProp<ViewStyle>;
  iconLeft?: React.ComponentProps<typeof Icon>['name'];
  iconLeftColor?: string;
  iconRight?: React.ComponentProps<typeof Icon>['name'];
  iconRightColor?: string;
  onPressRight?: PressableProps['onPress'];
  flex?: boolean;
}
type Props = InputProps & DefaultInput['props'];

const Input = (props: Props) => {
  const {
    style,
    iconRight,
    iconLeft,
    iconLeftColor = COLORS.stroke,
    iconRightColor = COLORS.stroke,
    onPressRight,
    flex,
    ...rest
  } = props;

  return (
    <View style={{ ...styles.container, flex: flex ? 1 : 0 }}>
      {iconLeft && (
        <View style={styles.iconLeft}>
          <Icon name={iconLeft} color={iconLeftColor} size={32} />
        </View>
      )}
      <DefaultInput
        style={[styles.inputContainer, { paddingLeft: iconLeft ? 52 : 16 }, style]}
        autoCorrect={false}
        autoCapitalize="none"
        textContentType="none"
        {...rest}
      />
      {iconRight && (
        <Pressable onPress={onPressRight} style={styles.iconRigth}>
          <Icon name={iconRight} color={iconRightColor} size={32} />
        </Pressable>
      )}
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
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 2,
  },
  inputContainer: {
    position: 'relative',
    height: SIZES.inputHeight,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.inputRadius,
    fontFamily: 'Poppins-Medium',
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
