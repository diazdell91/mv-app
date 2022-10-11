import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Input, Text } from '../../../components';
import { COLORS } from '../../../theme';
import staffService from '../../../services/staff';

const CreateUserScreen = ({ navigation }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  //const { session } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState('2000');

  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <Input
          autoFocus
          placeholder="Nombre Completo"
          iconRight="account"
          iconRightColor={COLORS.black}
          value={name}
          onChangeText={setName}
          maxLength={32}
        />
        <Input
          placeholder="Email"
          iconRight="email"
          iconRightColor={COLORS.black}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Contraseña"
          iconRight="lock"
          iconRightColor={COLORS.black}
          value={password}
          onChangeText={setPassword}
          maxLength={32}
        />
        <Input
          placeholder="Confirmar Contraseña"
          iconRight="lock-check"
          iconRightColor={COLORS.black}
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          maxLength={32}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderColor: COLORS.stornGray,
            borderWidth: 1,
            borderRadius: 56,
          }}
        >
          <Pressable
            onPress={() => setRole('2000')}
            style={{
              ...styles.select,
              backgroundColor: role === '2000' ? COLORS.caramel : COLORS.white,
            }}
          >
            <Text>Cliente</Text>
          </Pressable>
          <Pressable
            onPress={() => setRole('3000')}
            style={{
              ...styles.select,
              backgroundColor: role === '3000' ? COLORS.caramel : COLORS.white,
            }}
          >
            <Text>Operador</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Button title="Crear usuario" onPress={handleCreateUser} />
    </View>
  );
};

export default CreateUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  select: {
    width: '45%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 32,
    marginHorizontal: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
