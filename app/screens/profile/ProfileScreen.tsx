import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Input, Text } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../../context/auth/authProvider';
import ActionBox from './components/ActionBox';
import { COLORS } from '../../theme';
import Version from './components/Version';
import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/user.graphql';

const ProfileScreen = ({ navigation }: any) => {
  const { top } = useSafeAreaInsets();
  const { signOut } = useAuth();

  const { data, loading, error } = useQuery(ME);

  if (loading) {
    return (
      <View style={{ ...styles.container, paddingTop: top }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ ...styles.container, paddingTop: top }}>
        <Text>Error...</Text>
        <ActionBox icon="arrow-right-bold" title="Salir" onPress={signOut} />
        <Version />
      </View>
    );
  }

  if (data) {
    const { me } = data;
    return (
      <View style={{ ...styles.container, paddingTop: top }}>
        <ScrollView contentInset={{ top }} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text size={16} fontFamily="Poppins-Medium" color={COLORS.zeus}>
              PREFERENCIAS
            </Text>
          </View>
          <Input value={me.name} iconLeft="account" editable={false} />
          <Input value={me.email} iconLeft="email" editable={false} />
          <Input value={me.phone} iconLeft="phone-dial-outline" editable={false} />
          <Input value={me.role} iconLeft="security" editable={false} />

          <View style={styles.header}>
            <Text size={16} fontFamily="Poppins-Medium" color={COLORS.zeus}>
              Legal
            </Text>
          </View>
          <ActionBox
            icon="shield-account"
            title="Políticas de Privacidad"
            onPress={() => {
              navigation.navigate('Info', {
                title: 'Política de Privacidad',
                content: 'Contenido política de privacidad',
              });
            }}
          />
          <ActionBox
            icon="file-certificate"
            title="Terminos de servicio"
            onPress={() => {
              navigation.navigate('Info', {
                title: 'Términos de Servicios',
                content: 'Este es el contenido de la política de servicios',
              });
            }}
          />
          <ActionBox icon="arrow-right-bold" title="Salir" onPress={signOut} />
          <Version />
        </ScrollView>
      </View>
    );
  }
  return <View />;
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  header: {
    marginVertical: 16,
    backgroundColor: COLORS.backDrop,
    paddingVertical: 12,
    paddingHorizontal: 16,
    opacity: 0.25,
  },
  content: {
    flex: 1,
    marginHorizontal: 8,
  },
});
