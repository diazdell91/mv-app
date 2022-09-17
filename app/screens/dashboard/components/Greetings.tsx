import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useAuth } from '../../../context/auth/authProvider';
import { Text } from '../../../components';
import { COLORS } from '../../../theme';

const Greetings = () => {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text
        size={32}
        color={COLORS.black}
        fontFamily={'Poppins-ExtraLight'}
      >{`Hello, ${user.name} `}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.profile}>
          <Icon name="account-circle-outline" size={28} color={COLORS.primary} />
        </Pressable>
      </View>
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  profile: {
    backgroundColor: COLORS.black,
    width: 42,
    height: 42,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 8,
  },
});
