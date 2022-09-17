/* eslint-disable indent */
//import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Text } from '../../components';
import { COLORS, SIZES } from '../../theme';

function TopTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const color = isFocused ? COLORS.black : COLORS.white;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          return (
            <Pressable
              key={route.key}
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={{
                ...styles.menuTab,
                backgroundColor: isFocused ? COLORS.primary : 'transparent',
              }}
            >
              <Text style={{ ...styles.label, color }}>{label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default TopTabBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.xs,
    backgroundColor: 'transparent',
    marginVertical: SIZES.m,
  },
  tab: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 32,
    backgroundColor: COLORS.black,
  },
  menuTab: {
    flex: 1,
    height: 44,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: COLORS.gray,
    marginTop: 2,
    marginHorizontal: 2,
    opacity: 0.95,
    marginBottom: 12,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
});
