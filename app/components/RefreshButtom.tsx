import { StyleSheet, Pressable, PressableProps } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { COLORS } from '../theme';

const RefreshButtom = (props: PressableProps) => {
  return (
    <Pressable style={styles.container} {...props}>
      <Icon name="refresh" size={24} color={COLORS.black} />
    </Pressable>
  );
};

export default RefreshButtom;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 16,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
