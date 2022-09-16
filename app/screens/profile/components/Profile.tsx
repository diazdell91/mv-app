import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Text } from '../../../components';
import { COLORS } from '../../../theme';

interface Props {
  name: string;
}

const Profile = ({ name }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Icon name="account-supervisor-circle-outline" size={72} color={COLORS.gray} />
      </View>
      <Text h5 size={24} fontFamily="Poppins-Medium">
        {name}
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  profile: {
    margin: 8,
    width: 72,
    height: 72,
    borderRadius: 72,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.gradient,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
});
