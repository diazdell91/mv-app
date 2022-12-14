import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextStyle,
  ViewStyle,
  PressableProps,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { SIZES, COLORS } from '../theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

interface Props {
  title?: string;
  primary?: boolean;
  secondary?: boolean;
  outlined?: boolean;
  white?: boolean;
  textStyle?: TextStyle;
  style?: ViewStyle;
  iconRight?: React.ComponentProps<typeof Icon>['name'];
  iconLeft?: React.ComponentProps<typeof Icon>['name'];
  iconColor?: string;
  loading?: boolean;
}

export type ButtonProps = Props & PressableProps;

function Button(props: ButtonProps) {
  const {
    title,
    primary,
    secondary,
    outlined,
    white,
    style,
    iconRight,
    iconLeft,
    iconColor,
    textStyle,
    loading,
    ...otherProps
  } = props;

  const buttonStyles = StyleSheet.flatten([
    styles.button,
    primary && styles.primary,
    secondary && styles.secondary,
    outlined && styles.outlined,
    white && styles.white,
    style != null && style,
  ]);

  const textStyles = StyleSheet.flatten([
    styles.title,
    outlined && styles.outlinedText,
    white && { color: COLORS.secondary },
    secondary && { color: COLORS.white, fontSize: SIZES.h1 },
    textStyle != null && { ...textStyle },
  ]);

  return (
    <View style={{ width: 'auto', marginHorizontal: 8 }}>
      <Pressable style={buttonStyles} {...otherProps}>
        {loading ? (
          () => <ActivityIndicator color={COLORS.black} />
        ) : (
          <>
            {iconLeft && (
              <View style={styles.iconLeft}>
                <Icon name={iconLeft} size={56} color={iconColor || COLORS.primary} />
              </View>
            )}
            <Text style={textStyles}>{title}</Text>
            {iconRight && (
              <View style={styles.iconRight}>
                <Icon name={iconRight} size={56} color={iconColor || COLORS.primary} />
              </View>
            )}
          </>
        )}
      </Pressable>
    </View>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: '100%',
    height: SIZES.buttonHeight,
    marginVertical: SIZES.xs,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.buttonRadius,
    backgroundColor: COLORS.primary,
  },
  title: {
    flex: 1,
    color: COLORS.black,
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.l,
    paddingHorizontal: SIZES.m,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  outlinedText: {
    color: COLORS.primary,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  outlined: {
    borderWidth: SIZES.inputBorder,
    borderColor: COLORS.primary,
    backgroundColor: '#fff',
  },
  white: {
    backgroundColor: COLORS.white,
  },
  iconRight: {
    marginRight: SIZES.m,
  },
  iconLeft: {
    marginLeft: SIZES.m,
  },
});
