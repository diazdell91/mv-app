/*eslint @typescript-eslint/no-unsafe-assignment:*/
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input } from '../../components';
import { useAuth } from '../../context/auth/authProvider';
import { COLORS } from '../../theme';

import AuthLayout from './AuthLayout';
import { View } from 'react-native';

const FAKE_LOGIN = [
  {
    uid: '1',
    name: 'John Doe',
    rol: 'client',
    accessToken: 'accessToken',
    logOutToken: 'logOutToken',
  },
  {
    uid: '2',
    name: 'Jane Doe',
    rol: 'staff',
    accessToken: 'accessToken',
    logOutToken: 'logOutToken',
  },
  {
    uid: '3',
    name: 'John Doe',
    rol: 'owner',
    accessToken: 'accessToken',
    logOutToken: 'logOutToken',
  },
];

// regex email
const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = ({ navigation }: any) => {
  // states
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('Error al iniciar sesión');
  const [isVisible, setIsVisible] = useState(false);

  // context
  const { login } = useAuth();

  const handleLogin = () => {
    setIsLoading(true);
    setError('');
  };

  const handleForgotPass = () => {
    //navigation.navigate('ForgotPass');
  };
  console.log(email, pass);

  return (
    <AuthLayout>
      <View style={{ marginHorizontal: 32 }}>
        <Input
          placeholder="Correo electrónico"
          iconLeft="mail"
          value={email}
          onChangeText={setEmail}
          textContentType="emailAddress"
        />
        <Input
          placeholder="Indica tu Contraseña"
          iconLeft="lock"
          value={pass}
          onChangeText={setPass}
          secureTextEntry
        />
        <Button
          title="No recuerdo la contraseña"
          onPress={handleForgotPass}
          style={{ backgroundColor: 'transparent' }}
          textStyle={styles.buttonText}
        />
      </View>

      <Button
        disabled={!REGEX_EMAIL.test(email) || pass.length < 4}
        title="Iniciar sesión"
        onPress={handleLogin}
        style={{ width: '90%', alignSelf: 'center' }}
      />
    </AuthLayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});
