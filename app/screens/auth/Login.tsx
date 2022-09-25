import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
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
  const [securyTextEntry, setSecuryTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('Error al iniciar sesión');
  //const [isVisible, setIsVisible] = useState(false);

  // context
  const { login } = useAuth();

  const handleLogin = async () => {
    console.log('handleLogin');
    setIsLoading(true);
    try {
      const session = await loginService.login({ email, password: pass });
      login(session);
    } catch (error) {
      console.log(error);
      setError(error?.message);
      Alert.alert('Error', error?.message);
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
          autoFocus
          placeholder="Correo electrónico"
          iconLeft="mail"
          value={email}
          onChangeText={setEmail}
          textContentType="emailAddress"
          keyboardType="email-address"
          inputStyle={styles.inputStyle}
        />
        <Input
          placeholder="Contraseña..."
          iconLeft="lock"
          value={pass}
          onChangeText={setPass}
          secureTextEntry={securyTextEntry}
          iconRight="eye"
          onPressRight={() => {
            setSecuryTextEntry(!securyTextEntry);
          }}
          inputStyle={styles.inputStyle}
        />
        <Button
          title="No recuerdo la contraseña"
          onPress={handleForgotPass}
          style={{ backgroundColor: 'transparent' }}
          textStyle={styles.buttonText}
        />
      </View>

      <Button
        disabled={!REGEX_EMAIL.test(email) || pass.length < 3}
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
  inputStyle: {
    color: COLORS.white,
    backgroundColor: COLORS.placeHolder,
    borderRadius: 16,
  },
});
