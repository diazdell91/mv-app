import { Pressable, PressableProps, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { COLORS } from '../../../theme';

interface Props extends PressableProps {
  icon?: React.ComponentProps<typeof Icon>['name'];
}

const HeaderModal = (props: Props) => {
  const { icon, ...rest } = props;
  return (
    <View style={styles.container}>
      <Pressable {...rest}>
        <Icon name={icon} size={28} color={COLORS.black} />
      </Pressable>
    </View>
  );
};

export default HeaderModal;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
});
