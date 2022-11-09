import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { COLORS } from '../theme';
import Text from './Text';
import { useNavigation } from '@react-navigation/native';

type Props = {
  id: string;
  name: string;
  description?: string;
  phone: number;
};

const Contact = (props: Props) => {
  const navigation = useNavigation<any>();
  const { name = 'Facebook ads', description = '', phone } = props;
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('ContactDetails', { ...props });
      }}
      style={styles.box}
    >
      <View style={styles.icon}>
        <Icon name={'account'} size={28} color={COLORS.white} />
      </View>
      <View style={{ flex: 1, marginStart: 16 }}>
        <Text>{name}</Text>
        <Text>{`${phone}`}</Text>
        <Text size={12}>{description}</Text>
      </View>
    </Pressable>
  );
};

export default Contact;

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
