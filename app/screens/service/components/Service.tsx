import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Text } from '../../../components';
import { COLORS } from '../../../theme';

type Props = {
  id: string;
  icon: React.ComponentProps<typeof Icon>['name'];
  name: string;
  description?: string;
  price: number;
};

const Service = (props: Props) => {
  const { name = 'Facebook ads', icon = 'facebook', price = 99.99 } = props;
  return (
    <View style={styles.box}>
      <View style={styles.icon}>
        <Icon name={icon} size={28} color={COLORS.white} />
      </View>
      <View style={{ flex: 1, marginStart: 16 }}>
        <Text>{name}</Text>
        <Text>{`${price}`} USD</Text>
      </View>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  icon: {
    backgroundColor: COLORS.blue,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
