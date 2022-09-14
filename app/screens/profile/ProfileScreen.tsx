import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Input } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import Profile from './components/Profile';

const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <ScrollView contentInset={{ top }} showsVerticalScrollIndicator={false}>
        <Profile name="David Alfonso" profile="https://randomuser.me/api/portraits/men/71.jpg" />
        <View style={styles.content}>
          <Input placeholder="Nombre" iconLeft="account-outline" />
          <Input placeholder="Apellidos" iconLeft="account-outline" />
          <Input placeholder="Email" iconLeft="email-fast-outline" />
          <Input placeholder="Teléfono" iconLeft="phone-dial-outline" />
        </View>
      </ScrollView>
      <Button title="Guardar cambios" style={{ width: '80%', marginTop: 32 }} />
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
