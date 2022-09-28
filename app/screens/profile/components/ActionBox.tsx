import { StyleSheet, View, Pressable, Switch } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Text } from '../../../components';
import { COLORS } from '../../../theme';
import { useState } from 'react';

type Props = {
  title: string;
  subTitle?: string;
  icon: React.ComponentProps<typeof Icon>['name'];
  toggle?: boolean;
  enabled?: boolean;
  onPress?: () => void;
};

const ActionBox = (props: Props) => {
  const { icon, toggle, enabled, title, subTitle, onPress } = props;
  const [isEnabled, setIsEnabled] = useState(enabled || false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ ...styles.container }}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color={COLORS.fog} />
      </View>
      <View style={styles.contents}>
        <Text size={16} fontFamily="Poppins-Medium" color={COLORS.placeHolder}>
          {title}
        </Text>
        <Text size={14} fontFamily="Poppins-Light" color={COLORS.placeHolder}>
          {subTitle}
        </Text>
      </View>
      {toggle && (
        <Switch
          trackColor={{ false: COLORS.placeHolder, true: COLORS.primary }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      )}
      {onPress && (
        <Pressable onPress={onPress} style={styles.arrowContainer}>
          <Icon name="chevron-right" size={32} color={COLORS.placeHolder} />
        </Pressable>
      )}
    </View>
  );
};

export default ActionBox;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: COLORS.fog,
  },
  contents: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 8,
  },
  iconContainer: {
    padding: 4,
    borderRadius: 4,
  },
  arrowContainer: {
    paddingStart: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
