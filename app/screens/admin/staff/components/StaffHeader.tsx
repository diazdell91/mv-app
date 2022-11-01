import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../../../theme';
import { Text } from '../../../../components';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../../context/auth/authProvider';

export default function StaffHeader(props: any) {
  const { data } = props;
  const navigation = useNavigation();
  const { navigate } = useNavigation<any>();
  const { top } = useSafeAreaInsets();
  const { user } = useAuth();

  const updateUser = () => {
    navigate('UserUpdate', {
      user: data,
    });
  };
  return (
    <View style={{ ...styles.container, marginTop: top }}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon style={{ left: 0 }} color={COLORS.white} name="chevron-left" size={32} />
      </Pressable>
      <Text color={COLORS.white} size={24}>
        Detalles del usuario
      </Text>
      {user && <Icon onPress={updateUser} color={COLORS.white} name="account-edit" size={32} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
