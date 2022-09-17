import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Input } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import Profile from './components/Profile';
import { useAuth } from '../../context/auth/authProvider';

const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const { user, signOut } = useAuth();
  console.log(user);
  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <ScrollView contentInset={{ top }} showsVerticalScrollIndicator={false}>
        <Profile name={user.name} />
        <View style={styles.content}>
          <Input editable={false} placeholder={user.name} iconLeft="account-outline" />
          <Input editable={false} placeholder={user.email} iconLeft="email-fast-outline" />
        </View>
      </ScrollView>
      <Button title="Cerrar sessión" onPress={signOut} style={{ width: '90%', marginTop: 32 }} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: 8,
  },
});
