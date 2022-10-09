import { StyleSheet, View, Pressable } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { COLORS } from '../../../../theme';
import { Text } from '../../../../components';

type Props = {
  name: string;
  icon: React.ComponentProps<typeof Icon>['name'];
  onPress?: React.ComponentProps<typeof Pressable>['onPress'];
  disabled?: boolean;
};

const IconService = ({ name, icon = 'abacus', disabled, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon
        name={icon}
        size={36}
        color={!disabled ? COLORS.placeHolder : COLORS.gray}
        style={styles.icon}
      />
      <Text size={12} align="center" style={{ marginTop: 12 }}>
        {name}
      </Text>
    </Pressable>
  );
};

export default IconService;

const styles = StyleSheet.create({
  container: {
    width: '25%',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  icon: {
    height: 'auto',
    textAlign: 'center',
  },
});
