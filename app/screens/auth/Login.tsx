import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from '../../components';
import { REGEX_EMAIL } from '../../constants/regex';
import { useAuth } from '../../context/auth/authProvider';
import { COLORS } from '../../theme';
import AuthLayout from './AuthLayout';
import loginService from '../../services/login';

const Login = () => {
  // states
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('Error al iniciar sesión');
  //const [isVisible, setIsVisible] = useState(false);

  // context
  const { login } = useAuth();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const session = await loginService.login({ email, password: pass });
      login(session);
    } catch (error) {
      setError(error?.message);
    }
    setIsLoading(false);
  };

  const handleForgotPass = () => {
    //navigation.navigate('ForgotPass');
  };

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
