import { useState } from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Input, Text } from '../../../components';
import { COLORS } from '../../../theme';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../../graphql/user.graphql';

const CreateUserScreen = ({ navigation }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();

  const [createUser] = useMutation(CREATE_USER);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState('CLIENT');

  const validate = () => {
    if (name.length < 3) {
      return false;
    }
    if (!email.includes('@')) {
      return false;
    }
    if (phone.length < 8 || phone.length > 10) {
      return false;
    }
    if (password.length < 6) {
      return false;
    }
    if (password !== passwordConfirm) {
      return false;
    }
    return true;
  };

  const handleCreateUser = async () => {
    const user = {
      name,
      email,
      phone,
      password,
      role,
    };

    await createUser({
      variables: {
        input: user,
      },
      onCompleted: (data) => {
        console.log(data);
        if (data.createUser.success === false) {
          Alert.alert('Error', data.createUser.message);
        }
        if (data.createUser.user.role === 'STAFF') {
          navigation.navigate('SuccessUser');
        } else {
          navigation.navigate('UserServices', { id: data.createUser.user.id });
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

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
          placeholder="Teléfono"
          iconRight="phone"
          iconRightColor={COLORS.black}
          value={phone}
          maxLength={10}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Input
          placeholder="Contraseña"
          iconRight="lock"
          iconRightColor={COLORS.black}
          value={password}
          onChangeText={setPassword}
          maxLength={32}
          secureTextEntry
        />
        <Input
          placeholder="Confirmar Contraseña"
          iconRight="lock-check"
          iconRightColor={COLORS.black}
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          maxLength={32}
          secureTextEntry
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
            onPress={() => setRole('CLIENT')}
            style={{
              ...styles.select,
              backgroundColor: role === 'CLIENT' ? COLORS.caramel : COLORS.white,
            }}
          >
            <Text>Cliente</Text>
          </Pressable>
          <Pressable
            onPress={() => setRole('STAFF')}
            style={{
              ...styles.select,
              backgroundColor: role === 'STAFF' ? COLORS.caramel : COLORS.white,
            }}
          >
            <Text>Operador</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Button
        disabled={!validate()}
        title="Crear usuario"
        onPress={handleCreateUser}
        style={{
          backgroundColor: !validate() ? COLORS.backgroundAlt : COLORS.primary,
        }}
      />
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
