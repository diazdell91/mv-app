import { useState, forwardRef, useImperativeHandle } from 'react';
import { Switch, StyleSheet, Pressable } from 'react-native';
import { COLORS, SIZES } from '../theme';
import Text from './Text';

interface Props {
  title?: string;
  enabled?: boolean;
}

const Toggle = forwardRef((props: Props, ref) => {
  const [isEnabled, setIsEnabled] = useState(props.enabled || false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  useImperativeHandle(ref, () => ({
    toggleSwitch,
    isEnabled,
  }));

  return (
    <Pressable onPress={toggleSwitch} style={styles.container}>
      <Switch
        trackColor={{ false: COLORS.gray, true: COLORS.green }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text fontFamily="Poppins-Bold" size={17} style={{ marginStart: 12 }}>
        {props?.title}
      </Text>
    </Pressable>
  );
});

export default Toggle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.xs,
    marginHorizontal: SIZES.xs,
  },
});
