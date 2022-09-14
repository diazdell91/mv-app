import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from '../../../components';
import { COLORS } from '../../../theme';

interface Props {
  name: string;
  profile: string;
}

const Profile = ({ name, profile = 'https://randomuser.me/api/portraits/men/71.jpg' }: Props) => {
  return (
    <View style={styles.container}>
      <Avatar profile={profile} size={74} />
      <Text h5 size={24} color={COLORS.primary}>
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
});
