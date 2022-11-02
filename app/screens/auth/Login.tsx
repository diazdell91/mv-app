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
  const [loginService, { loading }] = useMutation(LOGIN);

  // context
  const { login } = useAuth();

  // methods
  const handleLogin = async () => {
    const { data } = await loginService({
      variables: {
        input: {
          email,
          password: pass,
        },
      },
    });
    if (!data || data.login?.success === false) {
      Alert.alert(data?.login?.message);
    }
    if (data.login.success) {
      const { tokens, user } = data.login;
      const session = {
        tokens,
        user,
      };
      login(session);
    }
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
      </View>

      <Button
        loading={loading}
        disabled={!REGEX_EMAIL.test(email) || pass.length < 5}
        onPress={handleLogin}
        title="Iniciar sesión"
        style={{
          width: '90%',
          backgroundColor:
            !REGEX_EMAIL.test(email) || pass.length < 5 ? COLORS.backgroundAlt : COLORS.primary,
        }}
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
