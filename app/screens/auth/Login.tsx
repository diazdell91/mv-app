import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Input } from '../../components';
import { REGEX_EMAIL } from '../../constants/regex';
import { useAuth } from '../../context/auth/authProvider';
import { COLORS } from '../../theme';
import AuthLayout from './AuthLayout';
import { LOGIN } from '../../graphql/auth.graphql';

const Login = () => {
  // states
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [securyTextEntry, setSecuryTextEntry] = useState(true);
  const [loginService, { loading, error }] = useMutation(LOGIN);
  //const [isVisible, setIsVisible] = useState(false);

  // context
  const { login } = useAuth();

  // methods
  const handleLogin = async () => {
    console.log('first');
    const { data } = await loginService({
      variables: {
        input: {
          email,
          password: pass,
        },
      },
    });
    if (data.login.success) {
      const { tokens, user } = data.login;
      const session = {
        tokens,
        user,
      };
      login(session);
    }
    Alert.alert(data?.login?.message);
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
        onPress={handleLogin}
        title="Iniciar sesión"
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
    color: COLORS.white,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  inputStyle: {
    color: COLORS.white,
    backgroundColor: COLORS.placeHolder,
    borderRadius: 16,
  },
});
