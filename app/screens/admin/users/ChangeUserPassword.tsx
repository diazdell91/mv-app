import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Input } from '../../../components';
import { COLORS } from '../../../theme';
import { useMutation } from '@apollo/client';
import { RESET_PASSWORD } from '../../../graphql/user.graphql';

const ChangeUserPassword = ({ navigation, route }: any) => {
  const { bottom: paddingBottom } = useSafeAreaInsets();

  const [updatePassword] = useMutation(RESET_PASSWORD);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { params } = route;
  const { id } = params;

  const validate = () => {
    if (password.length < 6) {
      return false;
    }
    if (password !== passwordConfirm) {
      return false;
    }
    return true;
  };

  const handleChangePassword = async () => {
    const user = {
      id,
      password,
    };

    await updatePassword({
      variables: {
        input: user,
      },
      onCompleted: () => {
        navigation.navigate('Staff');
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
      </ScrollView>
      <Button
        disabled={!validate()}
        title="Actualizar contraseña"
        onPress={handleChangePassword}
        style={{
          backgroundColor: !validate() ? COLORS.backgroundAlt : COLORS.primary,
        }}
      />
    </View>
  );
};

export default ChangeUserPassword;

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
