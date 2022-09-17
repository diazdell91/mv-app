import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import topUpServices from '../../services/topUp';
import { Button, Input } from '../../components';
import { COLORS } from '../../theme';
import { useAuth } from '../../context/auth/authProvider';

const CreateTopup = () => {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const { session } = useAuth();
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreateTopup = () => {
    console.log('handleCreateTopup');
    topUpServices
      .createTopup(session.token, parseInt(amount), phone)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={{ ...styles.container, paddingTop: 16, paddingBottom }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <Input
          autoFocus
          placeholder="Número de telefono"
          iconRight="cellphone-charging"
          iconRightColor={COLORS.black}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <Input
          placeholder="Cantidad 500-1000"
          iconRight="piggy-bank-outline"
          iconRightColor={COLORS.black}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <Button title="Crear recarga" onPress={handleCreateTopup} />
      </ScrollView>
    </View>
  );
};

export default CreateTopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
