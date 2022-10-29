/* eslint-disable indent */
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon, Text } from '../../components';
import { COLORS, SIZES } from '../../theme';

function TabBar({ state, descriptors, navigation }: any) {
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

          const color = isFocused ? COLORS.black : COLORS.gray;

          const icon =
            route.name === 'Staff'
              ? 'Staff'
              : route.name === 'Dashboard'
              ? 'Appoiments'
              : route.name === 'Informes'
              ? 'Docs'
              : route.name === 'Inventory'
              ? 'Inventory'
              : 'Profile';

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

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <View key={route.key} style={styles.menuTab}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.menuButton}
              >
                <View style={{ opacity: isFocused ? 1 : 0.3 }}>
                  <Icon name={icon} size={25} color={color} />
                </View>
                <Text style={{ ...styles.label, color }}>{label}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.m,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.gradient,
  },
  tab: {
    height: 86,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginBottom: 12,
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
});
