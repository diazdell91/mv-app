import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { COLORS } from '../theme/index';

type Props = {
  name?: React.ComponentProps<typeof Icon>['name'];
};

const IconButtom = (props: Props) => {
  const { name } = props;
  return (
    <View style={styles.container}>
      <Icon name={name} size={26} color={COLORS.stroke} />
    </View>
  );
};

export default IconButtom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    borderRadius: 48,
    borderWidth: 1,
    borderColor: COLORS.stroke,
    padding: 8,
  },
});
