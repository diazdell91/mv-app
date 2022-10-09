import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../../context/auth/authProvider';
import ActionBox from './components/ActionBox';
import { COLORS } from '../../theme';
import Version from './components/Version';

const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const { user, signOut } = useAuth();

  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <ScrollView contentInset={{ top }} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text size={16} fontFamily="Poppins-Medium" color={COLORS.zeus}>
            PREFERENCIAS
          </Text>
        </View>
        <ActionBox icon="cog-outline" title="Ajustes" onPress={() => {}} />
        <ActionBox icon="checkbox-blank-badge" title="Notificaciones" />
        <ActionBox
          icon="ticket-percent"
          title="Comision por venta"
          subTitle="8%"
          onPress={() => {}}
        />
        <View style={styles.header}>
          <Text size={16} fontFamily="Poppins-Medium" color={COLORS.zeus}>
            Legal
          </Text>
        </View>
        <ActionBox icon="shield-account" title="Políticas de Privacidad" onPress={() => {}} />
        <ActionBox icon="file-certificate" title="Terminos de servicio" onPress={() => {}} />
        <ActionBox icon="arrow-right-bold" title="Salir" onPress={signOut} />
        <Version />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
