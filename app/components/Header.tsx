//import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets, useSafeAreaFrame } from 'react-native-safe-area-context';
import { getDefaultHeaderHeight } from '@react-navigation/elements';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { COLORS } from '../theme';

interface Props {
  title?: string;
  children?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconRightName?: React.ComponentProps<typeof Icon>['name'];
  iconRightColor?: string;
  iconRightSize?: number;
  iconLeftName?: React.ComponentProps<typeof Icon>['name'];
  iconLeftColor?: string;
  iconLeftSize?: number;
  style?: StyleProp<ViewStyle>;
  iconRightPress?: () => void;
  iconLeftPress?: () => void;
}
const Header = ({
  title,
  iconRight,
  iconRightName,
  iconRightColor = COLORS.white,
  iconRightSize = 32,
  iconRightPress,
  iconLeftName,
  iconLeftColor = COLORS.white,
  iconLeftSize = 32,
  iconLeftPress,
  style,
  children,
}: Props) => {
  const { top } = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  const height = getDefaultHeaderHeight(frame, true, top);

  return (
    <View style={[{ ...styles.container, paddingTop: top + 4, height: height + 18 }, style]}>
      {iconLeftName && (
        <Pressable onPress={iconLeftPress}>
          <Icon name={iconLeftName} size={iconLeftSize} color={iconLeftColor} />
        </Pressable>
      )}
      <View style={styles.headerContent}>
        {title && <Text style={styles.headerTitle}>{title}</Text>}
        {children && <>{children}</>}
      </View>
      {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
      {iconRightName && (
        <Pressable onPress={iconRightPress}>
          <Icon name={iconRightName} size={iconRightSize} color={iconRightColor} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: COLORS.black,
  },
  iconRight: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
